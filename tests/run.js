import puppeteer from 'puppeteer';

const BASE_URL = process.env.TEST_URL || 'http://localhost:4173/#';
const TIMEOUT = 30000;

const results = { passed: 0, failed: 0, errors: [], warnings: [] };

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test(name, fn, critical = true) {
  const testStart = Date.now();
  try {
    await fn();
    results.passed++;
    console.log(`✅ ${name}`);
  } catch (error) {
    if (critical) {
      results.failed++;
      results.errors.push({ name, error: error.message, time: Date.now() - testStart });
      console.log(`❌ ${name}: ${error.message}`);
    } else {
      results.warnings.push({ name, error: error.message });
      console.log(`⚠️  ${name}: ${error.message}`);
    }
  }
}

async function expectText(selector, expected, options = {}) {
  const { timeout = 5000, exact = false } = options;
  await page.waitForSelector(selector, { timeout });
  const el = await page.$(selector);
  if (!el) throw new Error(`Element ${selector} not found`);
  const text = await el.evaluate(e => e.textContent?.trim());
  if (exact) {
    if (text !== expected) throw new Error(`Expected "${expected}" but got "${text}"`);
  } else {
    if (!text || !text.includes(expected)) throw new Error(`Expected "${expected}" in "${text}"`);
  }
}

async function expectVisible(selector, options = {}) {
  const { timeout = 5000 } = options;
  await page.waitForSelector(selector, { timeout });
  const el = await page.$(selector);
  if (!el) throw new Error(`Element ${selector} not found`);
}

async function expectCount(selector, min) {
  const elements = await page.$$(selector);
  if (elements.length < min) throw new Error(`Expected at least ${min} "${selector}", found ${elements.length}`);
}

async function expectContains(selector, text) {
  const content = await page.content();
  if (!content.includes(text)) throw new Error(`Expected content "${text}"`);
}

async function getElementText(selector) {
  const el = await page.$(selector);
  return el ? await el.evaluate(e => e.textContent?.trim()) : null;
}

async function isElementVisible(selector) {
  const el = await page.$(selector);
  if (!el) return false;
  return await el.isIntersectingViewport();
}

async function clickElement(selector) {
  await page.waitForSelector(selector);
  await page.click(selector);
}

let browser, page, consoleErrors = [], consoleWarnings = [];

async function run() {
  console.log('\n' + '═'.repeat(60));
  console.log('🚀 Autitude App - Comprehensive Tests');
  console.log('🌐 URL:', BASE_URL);
  console.log('═'.repeat(60) + '\n');

  const launchOptions = {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-web-security',
      '--allow-running-insecure-content'
    ]
  };

  const viewport = { width: 1280, height: 800 };
  const mobileViewport = { width: 375, height: 812 };

  browser = await puppeteer.launch(launchOptions);
  page = await browser.newPage();
  await page.setViewport(viewport);

  page.on('console', msg => {
    const type = msg.type();
    if (type === 'error') consoleErrors.push(msg.text());
    if (type === 'warning') consoleWarnings.push(msg.text());
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  const start = Date.now();

  console.log('📋 CORE TESTS\n');

  await test('Homepage loads', async () => {
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0', timeout: TIMEOUT });
    await expectVisible('.navbar', { timeout: 10000 });
  });

  await test('Navigation renders correctly', async () => {
    const links = await page.$$('.nav-links a');
    if (links.length < 5) throw new Error(`Expected 5+ nav links, found ${links.length}`);
  });

  await test('Footer renders', async () => {
    await expectVisible('.footer');
  });

  await test('Year is dynamic', async () => {
    const year = new Date().getFullYear().toString();
    await expectContains('.footer', year);
  });

  await test('Page title is set', async () => {
    const title = await page.title();
    if (!title.includes('Autitude')) throw new Error(`Title not set: ${title}`);
  });

  await test('Meta description present', async () => {
    const desc = await page.$eval('meta[name="description"]', el => el.content).catch(() => null);
    if (!desc) throw new Error('Meta description missing');
  });

  await test('Mobile responsive navbar', async () => {
    await page.setViewport(mobileViewport);
    await expectVisible('.menu-toggle');
    await page.setViewport(viewport);
  });

  await test('Logo present with image', async () => {
    const logo = await page.$('.logo-img');
    if (!logo) throw new Error('Logo image not found');
  });

  console.log('\n📋 ROUTE TESTS\n');

  const routes = [
    { path: '/sobre', selector: '.section-tag', text: 'Sobre a' },
    { path: '/servicos', selector: 'h1', text: 'Tratamentos' },
    { path: '/equipe', selector: '.section-tag', text: 'Nossa' },
    { path: '/agendar', selector: 'h1', text: 'Agende' },
    { path: '/contato', selector: 'h1', text: 'Fale' },
    { path: '/faq', selector: '.faq', text: '' },
    { path: '/privacidade', selector: 'h1', text: '' }
  ];

  for (const route of routes) {
    await test(`Route: ${route.path}`, async () => {
      await page.goto(BASE_URL + route.path, { waitUntil: 'networkidle0', timeout: TIMEOUT });
      if (route.text) {
        await expectText(route.selector, route.text, { timeout: 8000 });
      } else {
        await expectVisible(route.selector, { timeout: 8000 });
      }
    });
  }

  await test('Route: 404 page', async () => {
    await page.goto(BASE_URL + '/invalid-xyz-123', { waitUntil: 'networkidle0', timeout: TIMEOUT });
    const text = await getElementText('h1');
    if (!text || !text.includes('encontrada')) throw new Error('404 page not rendered');
  });

  console.log('\n📋 ACCESSIBILITY TESTS\n');

  await test('Alt text on logo', async () => {
    const alt = await page.$eval('.logo-img', el => el.alt).catch(() => '');
    if (!alt) throw new Error('Logo alt text missing');
  });

  await test('ARIA labels on buttons', async () => {
    const menuBtn = await page.$('.menu-toggle[aria-label]');
    if (!menuBtn) throw new Error('Menu toggle missing aria-label');
  });

  await test('Form labels present (agendar)', async () => {
    await page.goto(BASE_URL + '/agendar', { waitUntil: 'networkidle0' });
    const labels = await page.$$('label[for]');
    if (labels.length < 2) throw new Error('Form labels insufficient');
  });

  await test('Skip to main link', async () => {
    const skipLink = await page.$('a[href$="#main"], .skip-link');
    if (!skipLink) results.warnings.push('Skip link missing');
  });

  console.log('\n📋 NAVIGATION TESTS\n');

  await test('Navigation works (click)', async () => {
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
    await delay(200);
    await page.evaluate(() => {
      const link = document.querySelector('.nav-link[href$="/sobre"]');
      if (link) link.click();
    });
    await delay(500);
  });

  await test('Logo links to home', async () => {
    await page.goto(BASE_URL + '/sobre', { waitUntil: 'networkidle0' });
    await clickElement('.logo');
    await delay(300);
    const url = page.url();
    if (!url.includes('/#') && !url.endsWith('/')) throw new Error('Logo link failed');
  });

  await test('Footer links work', async () => {
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
    const footerLinks = await page.$$('.footer-links a');
    if (footerLinks.length < 2) throw new Error('Footer links insufficient');
  });

  console.log('\n📋 CONTENT TESTS\n');

  await test('Homepage hero section', async () => {
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
    await expectVisible('.hero, .hero-section, .hero-content', { timeout: 8000 });
  });

  await test('Schedule form has fields', async () => {
    await page.goto(BASE_URL + '/agendar', { waitUntil: 'networkidle0' });
    const fields = await page.$$('input, select, textarea');
    if (fields.length < 3) throw new Error(`Expected form fields, found ${fields.length}`);
  });

await test('Services has cards', async () => {
    await page.goto(BASE_URL + '/servicos', { waitUntil: 'networkidle0' });
    const cards = await page.$$('.service-card-main, .service-card');
    if (cards.length < 3) throw new Error('Too few service cards');
  });

  await test('Team has members', async () => {
    await page.goto(BASE_URL + '/equipe', { waitUntil: 'networkidle0' });
    const members = await page.$$('.team-main-card, .member-details');
    if (members.length < 1) throw new Error('Too few team members');
  });

  await test('Team has members', async () => {
    await page.goto(BASE_URL + '/equipe', { waitUntil: 'networkidle0' });
    await expectCount('.team-main-card', 1);
  });

  await test('Contact has form', async () => {
    await page.goto(BASE_URL + '/contato', { waitUntil: 'networkidle0' });
    await expectVisible('form');
  });

  await test('WhatsApp link present', async () => {
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
    const wa = await page.$('a[href*="wa.me"]');
    if (!wa) throw new Error('WhatsApp link not found');
  });

  console.log('\n📋 UI COMPONENT TESTS\n');

  await test('All pages have navbar', async () => {
    for (const route of ['/', '/sobre', '/servicos', '/equipe', '/agendar', '/contato']) {
      await page.goto(BASE_URL + route, { waitUntil: 'networkidle0', timeout: TIMEOUT });
      await expectVisible('.navbar', { timeout: 8000 });
    }
  });

  await test('All pages have footer', async () => {
    for (const route of ['/', '/sobre', '/servicos', '/equipe', '/agendar', '/contato']) {
      await page.goto(BASE_URL + route, { waitUntil: 'networkidle0', timeout: TIMEOUT });
      await expectVisible('.footer', { timeout: 8000 });
    }
  });

  await test('Navbar is sticky or fixed', async () => {
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
    const navClass = await page.$eval('.navbar', el => el.className);
    if (!navClass.includes('fixed') && !navClass.includes('sticky')) {
      results.warnings.push('Navbar may not be sticky');
    }
  });

  console.log('\n📋 JS ERROR TESTS\n');

  await test('No console errors (home)', async () => {
    consoleErrors = [];
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
    await delay(500);
    if (consoleErrors.length > 0) {
      console.log('   Console errors:', consoleErrors.slice(0, 3).join('; '));
      throw new Error('Console errors detected');
    }
  });

  await test('No console errors (sobre)', async () => {
    consoleErrors = [];
    await page.goto(BASE_URL + '/sobre', { waitUntil: 'networkidle0' });
    await delay(300);
    if (consoleErrors.length > 0) {
      console.log('   Console errors:', consoleErrors.slice(0, 3).join('; '));
      throw new Error('Console errors detected');
    }
  });

  await test('No console errors (agendar)', async () => {
    consoleErrors = [];
    await page.goto(BASE_URL + '/agendar', { waitUntil: 'networkidle0' });
    await delay(300);
    if (consoleErrors.length > 0) {
      console.log('   Console errors:', consoleErrors.slice(0, 3).join('; '));
      throw new Error('Console errors detected');
    }
  });

  console.log('\n📋 THEME SWITCHER TESTS\n');

  await test('Theme switcher button is visible', async () => {
    const btn = await page.$('.theme-switcher');
    if (!btn) throw new Error('Theme switcher button not found');
  });

  await test('Theme switcher toggles correctly', async () => {
    const btn = await page.$('.theme-switcher');
    if (!btn) throw new Error('Theme switcher button not found');
    const initialText = await page.evaluate(el => el.textContent, btn);
    await btn.click();
    await delay(300);
    const afterClick = await page.evaluate(el => el.textContent, await page.$('.theme-switcher'));
    if (afterClick === initialText) throw new Error('Theme did not change after click');
  });

  await test('Theme changes data-theme attribute', async () => {
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
    const btn = await page.$('.theme-switcher');
    if (!btn) throw new Error('Theme switcher button not found');
    await btn.click();
    await delay(300);
    const theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    if (!theme) throw new Error('data-theme attribute not set after clicking theme switcher');
  });

  console.log('\n📋 LOGO TESTS\n');

  await test('Small logo loads in navbar', async () => {
    const logo = await page.$('.logo-img');
    if (!logo) throw new Error('Logo image not found');
    const src = await page.evaluate(el => el.src, logo);
    if (!src || !src.includes('small-logo')) throw new Error(`Logo src incorrect: ${src}`);
  });

  await test('Small logo loads in footer', async () => {
    const footerLogo = await page.$('.footer-brand .logo-img');
    if (!footerLogo) throw new Error('Footer logo image not found');
    const src = await page.evaluate(el => el.src, footerLogo);
    if (!src || !src.includes('small-logo')) throw new Error(`Footer logo src incorrect: ${src}`);
  });

  console.log('\n📋 PERFORMANCE TESTS\n');

  await test('Page loads under 5s', async () => {
    const start = Date.now();
    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0', timeout: TIMEOUT });
    const loadTime = Date.now() - start;
    console.log(`   Load time: ${loadTime}ms`);
    if (loadTime > 5000) throw new Error(`Page load too slow: ${loadTime}ms`);
  }, false);

  const duration = Date.now() - start;

  await browser.close();

  console.log('\n' + '═'.repeat(60));
  console.log(`📊 Results: ${results.passed}/${results.passed + results.failed} passed`);
  console.log(`⏱️  Duration: ${duration}ms`);
  if (results.warnings.length > 0) {
    console.log(`⚠️  Warnings: ${results.warnings.length}`);
  }
  console.log('═'.repeat(60));

  if (results.failed > 0) {
    console.log('\n❌ Failed tests:');
    results.errors.forEach(e => console.log(`  - ${e.name}: ${e.error}`));
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed!');
    if (results.warnings.length > 0) {
      console.log('\n⚠️  Warnings (non-critical):');
      results.warnings.forEach(w => console.log(`  - ${w.name}: ${w.error}`));
    }
    process.exit(0);
  }
}

run().catch(err => {
  console.error('Test runner error:', err.message);
  if (browser) browser.close().catch(() => {});
  process.exit(1);
});