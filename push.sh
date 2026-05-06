#!/bin/bash

set -e

echo "=========================================="
echo "🚀 Building production bundle..."
echo "=========================================="

npm run build

BUILD_EXIT=$?
if [ $BUILD_EXIT -ne 0 ]; then
  echo "❌ Build failed!"
  exit $BUILD_EXIT
fi

echo "✅ Build complete!"
echo ""

echo "=========================================="
echo "🔍 Testing assets and paths..."
echo "=========================================="

DIST_DIR="dist"
ERRORS=0

if [ ! -d "$DIST_DIR" ]; then
  echo "❌ Dist directory not found!"
  exit 1
fi

echo "📁 Checking dist structure..."

JS_COUNT=$(ls $DIST_DIR/assets/*.js 2>/dev/null | wc -l)
CSS_COUNT=$(ls $DIST_DIR/assets/*.css 2>/dev/null | wc -l)

if [ -f "$DIST_DIR/index.html" ]; then
  echo "  ✅ index.html"
else
  echo "  ❌ Missing: index.html"
  ERRORS=$((ERRORS + 1))
fi

if [ -f "$DIST_DIR/favicon.ico" ]; then
  echo "  ✅ favicon.ico"
fi

if [ $JS_COUNT -gt 0 ]; then
  echo "  ✅ JS bundles: $JS_COUNT"
else
  echo "  ❌ No JS bundles found"
  ERRORS=$((ERRORS + 1))
fi

if [ $CSS_COUNT -gt 0 ]; then
  echo "  ✅ CSS bundles: $CSS_COUNT"
else
  echo "  ❌ No CSS bundles found"
  ERRORS=$((ERRORS + 1))
fi

TOTAL_FILES=$(find $DIST_DIR -type f | wc -l)
echo ""
echo "📄 Total files: $TOTAL_FILES"

if [ $ERRORS -gt 0 ]; then
  echo ""
  echo "❌ Asset check failed with $ERRORS error(s)"
  exit 1
fi

echo ""
echo "✅ All assets verified!"
echo ""

echo "=========================================="
echo "📦 Committing changes..."
echo "=========================================="

git add .

echo "Commit message: Update $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

echo ""
echo "=========================================="
echo "🚀 Pushing to remote..."
echo "=========================================="

git push -u origin master

echo ""
echo "=========================================="
echo "✅ Deployment complete!"
echo "=========================================="
echo ""
echo "🔗 Live site: https://HautlyS.github.io/Autitude"
echo ""