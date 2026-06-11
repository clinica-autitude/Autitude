<script setup>
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const seoContent = {
  // === ORIGINAL 7 (HIGH-TRAFFIC) ===
  'terapia-ocupacional-infantil': {
    title: 'Terapia Ocupacional Infantil — Intervenção Precoce e Autonomia | Autitude',
    description: 'Terapia ocupacional infantil em Pindamonhangaba-SP. Avaliação e intervenção em integração sensorial, autonomia pessoal e social. Certificação internacional USC.',
    keywords: 'terapia ocupacional infantil, integração sensorial, autonomia infantil, desenvolvimento sensorial, terapia ocupacional Pindamonhangaba, sensory integration, terapia ocupacional criança',
    canonical: '/blog/terapia-ocupacional-infantil',
    articleBody: 'A terapia ocupacional infantil é uma área da saúde dedicada a promover a autonomia e a participação ativa de crianças em suas atividades cotidianas. Na Autitude, em Pindamonhangaba-SP, utilizamos abordagens baseadas em evidências, incluindo a certificação internacional em Integração Sensorial pela University of Southern California (USC). O tratamento é indicado para crianças com dificuldades motoras, sensoriais, cognitivas ou socioemocionais que impactam seu desempenho em atividades como brincar, se alimentar, se vestir e interagir socialmente. A intervenção precoce é fundamental: quanto antes identificamos os desafios no processamento sensorial ou no desenvolvimento motor, melhores são os resultados a longo prazo. Nossa terapeuta ocupacional, Dra. Juliana Mariani, realiza avaliações individualizadas para compreender as necessidades únicas de cada criança, criando um plano de intervenção personalizado que envolve a família em cada etapa do processo. O objetivo é capacitar a criança para explorar o mundo com confiança e independência.'
  },
  'integracao-sensorial': {
    title: 'Integração Sensorial — Avaliação e Intervenção Certificada | Autitude',
    description: 'Integração sensorial com certificação internacional pela University of Southern California (USC). Avaliação e intervenção em Pindamonhangaba-SP.',
    keywords: 'integração sensorial, sensory integration, regulação sensorial, avaliação sensorial, processamento sensorial, integração sensorial criança',
    canonical: '/blog/integracao-sensorial',
    articleBody: 'A integração sensorial é um processo neurológico fundamental que organiza as sensações do corpo e do ambiente para que possamos responder adequadamente às demandas do cotidiano. Na Autitude, oferecemos avaliação e intervenção em integração sensorial com certificação internacional pela University of Southern California (USC), um dos mais renomados centros de estudo da área. Crianças com dificuldades de processamento sensorial podem apresentar hipersensibilidade ou hipossensibilidade a estímulos como toque, som, movimento e texturas, afetando seu comportamento, aprendizado e interações sociais. A terapia de integração sensorial utiliza atividades lúdicas e estruturadas em um ambiente especialmente preparado, desafiando a criança a processar e responder a estímulos de forma organizada. Os resultados incluem melhora na regulação emocional, na atenção, na coordenação motora e na participação em atividades diárias. Cada sessão é planejada com base no perfil sensorial individual da criança.'
  },
  'neuropsicologia-infantil': {
    title: 'Neuropsicologia Infantil — Avaliação Cognitiva e Comportamental | Autitude',
    description: 'Neuropsicologia infantil: avaliação neuropsicológica completa, rastreamento de neurodivergências, desenvolvimento cognitivo e emocional. Pindamonhangaba-SP.',
    keywords: 'neuropsicologia infantil, avaliação neuropsicológica, desenvolvimento cognitivo, neurodivergência criança, TDAH avaliação, TEA avaliação neuropsicológica',
    canonical: '/blog/neuropsicologia-infantil',
    articleBody: 'A neuropsicologia infantil é uma especialidade que investiga as relações entre o funcionamento cerebral e o comportamento, a cognição e as emoções em crianças e adolescentes. Na Autitude, realizamos avaliações neuropsicológicas completas para compreender o perfil cognitivo, comportamental e emocional de cada criança. Este processo é essencial para o rastreamento e diagnóstico de condições como Transtorno do Espectro Autista (TEA), Transtorno do Déficit de Atenção e Hiperatividade (TDAH) e dificuldades específicas de aprendizagem. A avaliação envolve a aplicação de instrumentos padronizados que analisam funções como atenção, memória, linguagem, funções executivas, habilidades visoconstrutivas e processamento socioemocional. Os resultados fornecem um mapa detalhado das potencialidades e desafios da criança, orientando intervenções terapêuticas e pedagógicas mais eficazes.'
  },
  'neuropsicopedagogia': {
    title: 'Neuropsicopedagogia — Apoio à Aprendizagem e Desenvolvimento Escolar | Autitude',
    description: 'Neuropsicopedagogia: avaliação de dificuldades de aprendizagem, plano pedagógico individualizado e apoio ao desenvolvimento escolar em Pindamonhangaba-SP.',
    keywords: 'neuropsicopedagogia, dificuldades de aprendizagem, plano pedagógico, apoio escolar, dislexia, disgrafia, déficit de atenção escolar',
    canonical: '/blog/neuropsicopedagogia',
    articleBody: 'A neuropsicopedagogia integra conhecimentos da neurociência, psicologia e pedagogia para compreender e intervir nas dificuldades de aprendizagem. Na Autitude, em Pindamonhangaba-SP, realizamos avaliações detalhadas que investigam os processos cognitivos subjacentes ao aprendizado, como atenção, memória, raciocínio lógico e processamento fonológico. Condições como dislexia, disgrafia e discalculia são identificadas por meio de instrumentos específicos, permitindo a elaboração de um plano pedagógico individualizado (PPI) que atende às necessidades únicas de cada aluno. A intervenção neuropsicopedagógica combina estratégias de reabilitação cognitiva com adaptações curriculares, promovendo o desenvolvimento de habilidades acadêmicas e a autoestima da criança. Trabalhamos em estreita colaboração com escolas e famílias para criar um ambiente de aprendizado inclusivo e acolhedor.'
  },
  'fonoaudiologia-infantil': {
    title: 'Fonoaudiologia Infantil — Linguagem, Comunicação e Neurodivergência | Autitude',
    description: 'Fonoaudiologia infantil: desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial. Atendimento especializado em neurodivergência.',
    keywords: 'fonoaudiologia infantil, linguagem infantil, atraso de linguagem, fala criança, comunicação social, fonoaudiologia neurodivergência',
    canonical: '/blog/fonoaudiologia-infantil',
    articleBody: 'A fonoaudiologia infantil é a especialidade responsável pela prevenção, avaliação e intervenção nos distúrbios da comunicação humana, incluindo linguagem oral e escrita, fala, voz, audição e motricidade orofacial. Na Autitude, oferecemos atendimento especializado para crianças com atraso de fala e linguagem, dificuldades de comunicação social, alterações na motricidade orofacial e desafios relacionados à neurodivergência. Nossa abordagem é centrada na criança e na família, utilizando estratégias lúdicas e baseadas em evidências para estimular o desenvolvimento comunicativo. Para crianças no espectro autista, a fonoaudiologia desempenha um papel crucial no desenvolvimento de habilidades de comunicação funcional, incluindo sistemas de comunicação alternativa quando necessário. A intervenção precoce em fonoaudiologia pode transformar significativamente a trajetória de desenvolvimento da criança, facilitando sua participação social e seu desempenho escolar.'
  },
  'autismo-terapia': {
    title: 'Terapia para Autismo (TEA) — Cuidado Integrado e Humanizado | Autitude',
    description: 'Cuidado integrado e humanizado para crianças e adolescentes no espectro autista (TEA). Terapia ABA, integração sensorial, fonoaudiologia e mais.',
    keywords: 'autismo, TEA, autismo infantil, espectro autista, terapia autismo, ABA autismo, intervenção precoce autismo',
    canonical: '/blog/autismo-terapia',
    articleBody: 'O cuidado integrado para crianças e adolescentes no espectro autista (TEA) é a essência do trabalho da Autitude. Oferecemos uma abordagem multidisciplinar que combina terapia ocupacional com integração sensorial, terapia ABA (Análise do Comportamento Aplicada), fonoaudiologia e neuropsicologia, sempre com um olhar humanizado e centrado na pessoa. Cada plano terapêutico é construído a partir de uma avaliação abrangente das necessidades, interesses e potencialidades únicas de cada indivíduo. A intervenção precoce é fundamental para o desenvolvimento de habilidades de comunicação, interação social, regulação emocional e autonomia. Trabalhamos em parceria com a família e a escola, garantindo que as estratégias terapêuticas sejam consistentes em todos os ambientes da criança. Nosso compromisso é oferecer um espaço seguro e acolhedor onde crianças e adolescentes no espectro possam desenvolver todo o seu potencial.'
  },
  'tdah-tratamento': {
    title: 'Acompanhamento para TDAH — Regulação, Aprendizagem e Bem-Estar | Autitude',
    description: 'Cuidado especializado para crianças e adolescentes com TDAH. Avaliação neuropsicológica, estratégias de regulação e apoio ao aprendizado.',
    keywords: 'TDAH, ADHD, atenção, hiperatividade, TDAH infantil, avaliação TDAH, estratégias TDAH escola',
    canonical: '/blog/tdah-tratamento',
    articleBody: 'O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é uma condição do neurodesenvolvimento que afeta a atenção, o controle de impulsos e a regulação da atividade motora. Na Autitude, oferecemos um acompanhamento especializado e multimodal para crianças e adolescentes com TDAH, combinando avaliação neuropsicológica detalhada, intervenções terapêuticas e orientação familiar e escolar. A avaliação neuropsicológica é o primeiro passo para um diagnóstico preciso, identificando o perfil de atenção, funções executivas e processamento de informações. A partir desse mapeamento, desenvolvemos estratégias personalizadas de regulação emocional, organização e planejamento, além de técnicas de estudo adaptadas. A terapia ocupacional auxilia na organização sensorial e na autorregulação, enquanto a intervenção psicopedagógica apoia o aprendizado escolar. O envolvimento da família e da escola é essencial para criar um ambiente estruturado e previsível que favoreça o desenvolvimento da criança.'
  },

  // === NEW 21 BLOG PAGES ===
  'terapia-aba': {
    title: 'Terapia ABA — Análise do Comportamento Aplicada e Desenvolvimento de Habilidades | Autitude',
    description: 'Terapia ABA (Applied Behavior Analysis) humanizada em Pindamonhangaba-SP. Desenvolvimento de habilidades adaptativas, redução de comportamentos desafiadores e ensino baseado em evidências.',
    keywords: 'terapia ABA, ABA autismo, análise comportamental, comportamento aplicado, habilidades adaptativas, ABA infantil, intervenção comportamental, ABA humanizada',
    canonical: '/blog/terapia-aba',
    articleBody: 'A Terapia ABA (Applied Behavior Analysis) é uma abordagem científica baseada na análise do comportamento, amplamente reconhecida como uma das intervenções mais eficazes para o desenvolvimento de habilidades em pessoas com Transtorno do Espectro Autista (TEA). Na Autitude, aplicamos a terapia ABA de forma humanizada, respeitando a individualidade e o ritmo de cada criança. O foco está no desenvolvimento de habilidades adaptativas essenciais, como comunicação, interação social, autocuidado e autonomia, além da redução de comportamentos desafiadores por meio de estratégias positivas e baseadas em reforço. Cada programa ABA é individualizado, com metas claras e mensuráveis, baseadas em uma avaliação funcional detalhada. Trabalhamos em estreita colaboração com a família para garantir a generalização das habilidades aprendidas para o ambiente doméstico e escolar.'
  },
  'dificuldades-aprendizagem': {
    title: 'Dificuldades de Aprendizagem — Identificação, Diagnóstico e Apoio Escolar | Autitude',
    description: 'Dificuldades de aprendizagem: dislexia, disgrafia, discalculia e déficits de atenção. Avaliação neuropsicológica e plano pedagógico individualizado em Pindamonhangaba-SP.',
    keywords: 'dificuldades de aprendizagem, dislexia, disgrafia, discalculia, apoio escolar, criança dificuldade aprendizagem, avaliação aprendizagem',
    canonical: '/blog/dificuldades-aprendizagem',
    articleBody: 'As dificuldades de aprendizagem englobam um conjunto de condições que afetam a capacidade da criança de adquirir e utilizar habilidades acadêmicas como leitura, escrita e matemática. Na Autitude, realizamos uma avaliação abrangente para identificar condições como dislexia (dificuldade na leitura), disgrafia (dificuldade na escrita), discalculia (dificuldade no raciocínio matemático) e déficits de atenção que impactam o aprendizado. O processo de identificação começa com uma anamnese detalhada e a aplicação de instrumentos padronizados que avaliam o funcionamento cognitivo e as habilidades acadêmicas. A partir do diagnóstico preciso, elaboramos um plano de intervenção personalizado que pode incluir neuropsicopedagogia, terapia ocupacional e acompanhamento neuropsicológico. O apoio escolar é integrado ao plano, com orientações para professores e adaptações curriculares que garantem a inclusão e o sucesso acadêmico.'
  },
  'desenvolvimento-infantil': {
    title: 'Desenvolvimento Infantil — Marcos, Avaliação e Estimulação Precoce | Autitude',
    description: 'Desenvolvimento infantil: marcos motores, cognitivos, linguagem e socioemocionais. Avaliação e estimulação precoce para crianças de 0 a 12 anos em Pindamonhangaba-SP.',
    keywords: 'desenvolvimento infantil, marcos do desenvolvimento, estimulação precoce, desenvolvimento motor, desenvolvimento cognitivo, desenvolvimento linguagem, criança pequena',
    canonical: '/blog/desenvolvimento-infantil',
    articleBody: 'O desenvolvimento infantil é um processo contínuo e dinâmico que abrange as áreas motora, cognitiva, de linguagem e socioemocional desde o nascimento até a adolescência. Na Autitude, acompanhamos crianças de 0 a 12 anos, avaliando e estimulando cada aspecto do desenvolvimento conforme os marcos esperados para cada faixa etária. A avaliação do desenvolvimento é fundamental para identificar precocemente possíveis atrasos ou alterações, permitindo intervenções oportunas que podem transformar a trajetória da criança. Utilizamos instrumentos padronizados de triagem e avaliação para investigar habilidades motoras, desenvolvimento da linguagem, habilidades cognitivas e competências socioemocionais. A estimulação precoce é oferecida por meio de atividades lúdicas e estruturadas que respeitam o ritmo individual de cada criança, sempre com a participação ativa da família no processo terapêutico.'
  },
  'neurodivergencia': {
    title: 'Neurodivergência — O Que É, Tipos e Como Cuidar com Respeito e Ciência | Autitude',
    description: 'Neurodivergência: o que é, como se manifesta e por que o cuidado humanizado e baseado em evidências faz diferença. Autismo, TDAH, deficiências de aprendizagem e mais.',
    keywords: 'neurodivergência, neurodiversidade, autismo, TDAH, deficiência aprendizagem, transtorno coordenação motora, síndrome de Asperger, neurodivergente',
    canonical: '/blog/neurodivergencia',
    articleBody: 'Neurodivergência é um termo que descreve as variações naturais no funcionamento cerebral humano, incluindo condições como autismo (TEA), Transtorno do Déficit de Atenção e Hiperatividade (TDAH), dislexia, discalculia e outras diferenças no neurodesenvolvimento. O conceito de neurodiversidade reconhece que essas variações não são doenças a serem curadas, mas sim diferenças neurológicas que trazem tanto desafios quanto potencialidades únicas. Na Autitude, adotamos uma abordagem de cuidado humanizado e baseado em evidências que respeita a individualidade de cada pessoa neurodivergente. Nossa equipe multidisciplinar oferece avaliação especializada e intervenções personalizadas que consideram as necessidades específicas de cada indivíduo, promovendo autonomia, bem-estar e qualidade de vida.'
  },
  'terapia-ocupacional-adulto': {
    title: 'Terapia Ocupacional para Adultos — Autonomia, Produtividade e Bem-Estar | Autitude',
    description: 'Terapia ocupacional para adultos: reabilitação cognitiva, adaptação funcional, manejo de estresse e promoção de independência. Atendimento especializado em Pindamonhangaba-SP.',
    keywords: 'terapia ocupacional adulto, reabilitação cognitiva, adaptação funcional, bem-estar adulto, autonomia adulto, terapia ocupacional Pindamonhangaba',
    canonical: '/blog/terapia-ocupacional-adulto',
    articleBody: 'A terapia ocupacional para adultos é uma especialidade que auxilia pessoas a superar desafios que afetam sua capacidade de realizar atividades significativas do dia a dia. Na Autitude, oferecemos atendimento especializado para adultos neurodivergentes e para aqueles que buscam reabilitação cognitiva, adaptação funcional e promoção da independência. A terapia ocupacional com adultos aborda áreas como organização e planejamento das rotinas diárias, manejo do estresse e da ansiedade, adaptação do ambiente de trabalho ou doméstico, desenvolvimento de estratégias para lidar com desafios sensoriais e cognitivos e promoção do equilíbrio entre as diversas ocupações da vida adulta. Para adultos com diagnóstico tardio de autismo ou TDAH, a terapia ocupacional oferece um espaço de autoconhecimento e desenvolvimento de estratégias práticas.'
  },
  'laudo-neuropsicologico': {
    title: 'Laudo Neuropsicológico — O Que É, Como Funciona e Por Que É Importante | Autitude',
    description: 'Laudo neuropsicológico: documento técnico-científico que caracteriza o perfil cognitivo e comportamental. Essencial para diagnóstico de TEA, TDAH e dificuldades de aprendizagem.',
    keywords: 'laudo neuropsicológico, relatório neuropsicológico, avaliação neuropsicológica laudo, diagnóstico neuropsicológico, laudo TEA, laudo TDAH',
    canonical: '/blog/laudo-neuropsicologico',
    articleBody: 'O laudo neuropsicológico é um documento técnico-científico elaborado por neuropsicólogo que apresenta uma análise detalhada do perfil cognitivo e comportamental de uma pessoa. Na Autitude, este documento é resultado de uma avaliação neuropsicológica abrangente, que utiliza instrumentos padronizados para investigar funções como atenção, memória, linguagem, funções executivas, inteligência e processamento socioemocional. O laudo é essencial para o diagnóstico diferencial de condições como Transtorno do Espectro Autista (TEA), TDAH e dificuldades específicas de aprendizagem. Além de caracterizar o funcionamento neuropsicológico, o documento oferece recomendações detalhadas para intervenções terapêuticas, adaptações escolares e estratégias de apoio. O laudo é frequentemente solicitado por escolas e planos de saúde para embasar decisões sobre suporte educacional e terapêutico.'
  },
  'avaliacao-desenvolvimento': {
    title: 'Avaliação do Desenvolvimento Infantil — Como Funciona e Quando Procurar | Autitude',
    description: 'Avaliação do desenvolvimento infantil: quando procurar, como funciona o processo e quais áreas são investigadas. Pindamonhangaba-SP.',
    keywords: 'avaliação desenvolvimento infantil, avaliação neuropsicológica criança, quando procurar avaliação, atraso desenvolvimento, avaliação precoce',
    canonical: '/blog/avaliacao-desenvolvimento',
    articleBody: 'A avaliação do desenvolvimento infantil é um processo sistemático que investiga como a criança está progredindo em relação aos marcos esperados para sua idade nas áreas motora, cognitiva, de linguagem e socioemocional. Na Autitude, indicamos a avaliação quando há preocupações sobre atrasos no desenvolvimento, dificuldades na escola, alterações no comportamento ou suspeitas de condições como TEA, TDAH ou deficiências de aprendizagem. O processo começa com uma entrevista detalhada com os pais sobre a história da criança, seguida da aplicação de instrumentos padronizados de triagem e avaliação. As áreas investigadas incluem habilidades motoras grossas e finas, linguagem receptiva e expressiva, raciocínio e resolução de problemas, interação social e regulação emocional. A avaliação precoce é fundamental para garantir o melhor prognóstico e intervenção oportuna.'
  },
  'escola-inclusiva': {
    title: 'Escola Inclusiva — Como Adaptar o Ambiente Escolar para Neurodivergentes | Autitude',
    description: 'Escola inclusiva: estratégias pedagógicas, adaptações curriculares e apoio multidisciplinar para alunos neurodivergentes. Orientação para escolas e famílias.',
    keywords: 'escola inclusiva, inclusão escolar, adaptação curricular, aluno neurodivergente, educação inclusiva, escola TEA, escola TDAH, adaptacão sala aula',
    canonical: '/blog/escola-inclusiva',
    articleBody: 'A escola inclusiva é um modelo educacional que garante o direito de todos os alunos aprenderem juntos, independentemente de suas diferenças e necessidades específicas. Na Autitude, orientamos escolas e famílias na implementação de estratégias pedagógicas e adaptações curriculares que promovem a participação plena de alunos neurodivergentes. A inclusão escolar vai além da matrícula: envolve a formação de professores, a adaptação do ambiente físico e sensorial da sala de aula, a elaboração de planos educacionais individualizados (PEI) e a implementação de metodologias de ensino que considerem diferentes estilos de aprendizagem. Para alunos com TEA, TDAH ou deficiências de aprendizagem, adaptações como redução de estímulos visuais, uso de agendas visuais e tempo estendido para tarefas podem fazer enorme diferença.'
  },
  'autismo-adulto': {
    title: 'Autismo no Adulto — Diagnóstico Tardio, Autoconhecimento e Apoio | Autitude',
    description: 'Autismo no adulto: diagnóstico tardio, como impacta a vida cotidiana, estratégias de adaptação e apoio profissional especializado em Pindamonhangaba-SP.',
    keywords: 'autismo adulto, TEA adulto, diagnóstico tardio autismo, autismo mulher, autismo no trabalho, autoconhecimento autismo, autismo vida adulta',
    canonical: '/blog/autismo-adulto',
    articleBody: 'O diagnóstico tardio de autismo na vida adulta é uma realidade para muitas pessoas que cresceram sem identificação ou com diagnósticos incorretos. Na Autitude, oferecemos avaliação especializada para adultos que suspeitam estar no espectro autista, proporcionando um espaço de acolhimento e autoconhecimento. O diagnóstico tardio pode ter um impacto profundo na vida da pessoa, explicando desafios ao longo da vida em áreas como interações sociais, processamento sensorial, regulação emocional e funcionamento executivo. Após o diagnóstico, oferecemos apoio terapêutico focado no desenvolvimento de estratégias de adaptação, manejo de estresse e autodefesa. A terapia ocupacional para adultos autistas auxilia na organização da rotina e na adaptação do ambiente de trabalho, promovendo qualidade de vida.'
  },
  'regulacao-emocional': {
    title: 'Regulação Emocional — Estratégias para Crianças e Adolescentes Neurodivergentes | Autitude',
    description: 'Regulação emocional em crianças e adolescentes neurodivergentes: o que é, por que é difícil e estratégias práticas para apoio familiar e escolar.',
    keywords: 'regulação emocional, regulação afetiva, crises emocionais criança, meltdowns, autoregulação, estratégias regulação, TDAH regulação emocional, TEA regulação',
    canonical: '/blog/regulacao-emocional',
    articleBody: 'A regulação emocional é a capacidade de identificar, compreender e responder adequadamente às próprias emoções, uma habilidade que pode ser particularmente desafiadora para crianças e adolescentes neurodivergentes. Na Autitude, trabalhamos o desenvolvimento da regulação emocional por meio de estratégias personalizadas que consideram o perfil sensorial, cognitivo e comportamental de cada criança. As dificuldades podem se manifestar como crises intensas (meltdowns), explosões de raiva, ansiedade elevada ou retraimento social. Nossa abordagem inclui o ensino de estratégias de autorregulação, como técnicas de respiração, pausas sensoriais, uso de ferramentas visuais para identificação de emoções e criação de rotinas previsíveis que reduzem a ansiedade. A terapia ocupacional com integração sensorial é fundamental para ajudar a criança a organizar seu sistema nervoso e facilitar respostas emocionais mais equilibradas.'
  },
  'habilidades-sociais': {
    title: 'Habilidades Sociais — Desenvolvimento e Apoio para Neurodivergentes | Autitude',
    description: 'Habilidades sociais em crianças e adolescentes neurodivergentes: dificuldades comuns, intervenções eficazes e treinamento em interação social em Pindamonhangaba-SP.',
    keywords: 'habilidades sociais, interação social criança, dificuldade social neurodivergente, treinamento habilidades sociais, TEA habilidades sociais, amizade criança neurodivergente',
    canonical: '/blog/habilidades-sociais',
    articleBody: 'As habilidades sociais são comportamentos aprendidos que nos permitem interagir de forma adequada e satisfatória com outras pessoas. Crianças e adolescentes neurodivergentes frequentemente enfrentam desafios específicos nessa área, como dificuldade em iniciar e manter conversas, interpretar sinais não verbais, compreender regras sociais implícitas e desenvolver amizades. Na Autitude, oferecemos intervenções baseadas em evidências para o desenvolvimento de habilidades sociais, incluindo treinamento estruturado em grupos terapêuticos e atendimento individualizado. Utilizamos técnicas como modelação, role-play, histórias sociais e vídeos modeladores para ensinar habilidades como contato visual, tomada de turno, empatia e resolução de conflitos. O treinamento não busca forçar a criança a se comportar de forma neurotípica, mas fornecer ferramentas que ampliem seu repertório de interação.'
  },
  'alimentacao-neurodivergencia': {
    title: 'Alimentação e Neurodivergência — Seletividade Alimentar e Nutrição | Autitude',
    description: 'Alimentação e neurodivergência: seletividade alimentar, sensibilidades sensoriais na comida e estratégias nutricionais para crianças neurodivergentes.',
    keywords: 'seletividade alimentar, alimentação neurodivergente, TEA alimentação, sensibilidade sensorial comida, nutrição criança, picky eating, alimentação saudável criança',
    canonical: '/blog/alimentacao-neurodivergencia',
    articleBody: 'A seletividade alimentar é um desafio frequente em crianças neurodivergentes, especialmente naquelas com Transtorno do Espectro Autista (TEA). Na Autitude, compreendemos que a dificuldade com a alimentação vai além da simples preferência: está frequentemente ligada a sensibilidades sensoriais que afetam a percepção de texturas, cores, cheiros e temperaturas dos alimentos. Crianças com hipersensibilidade sensorial podem recusar alimentos com certas consistências ou apresentar aversão a grupos alimentares inteiros. Nossa abordagem é gradual e respeitosa, utilizando estratégias de integração sensorial para dessensibilizar o sistema nervoso da criança em relação aos estímulos alimentares. Trabalhamos em parceria com a família para criar um ambiente alimentar positivo, sem pressão ou estresse, expandindo gradualmente o repertório alimentar e garantindo uma nutrição adequada.'
  },
  'exercicios-fisicos': {
    title: 'Exercícios Físicos e Neurodivergência — Benefícios para o Desenvolvimento | Autitude',
    description: 'Exercícios físicos para crianças e adolescentes neurodivergentes: benefícios motores, cognitivos e emocionais. Atividades recomendadas e como começar.',
    keywords: 'exercício físico criança, atividade física neurodivergente, benefícios exercício TEA, TDAH exercício, motricidade grossa, coordenação motora, esporte adaptado',
    canonical: '/blog/exercicios-fisicos',
    articleBody: 'A prática regular de exercícios físicos traz benefícios significativos para o desenvolvimento de crianças e adolescentes neurodivergentes, impactando positivamente as áreas motora, cognitiva e emocional. Na Autitude, recomendamos e orientamos atividades físicas adaptadas às necessidades e preferências de cada criança. Os benefícios motores incluem melhora na coordenação motora grossa e fina, no equilíbrio, na consciência corporal e na resistência física. No aspecto cognitivo, os exercícios físicos promovem aumento da atenção e concentração, melhora das funções executivas e redução da impulsividade, sendo particularmente benéficos para crianças com TDAH. Emocionalmente, a atividade física contribui para a regulação emocional, redução da ansiedade e melhora da autoestima. Atividades recomendadas incluem natação, artes marciais, equoterapia e yoga infantil.'
  },
  'terapia-familiar': {
    title: 'Terapia Familiar — Apoio e Acolhimento para Famílias Neurodivergentes | Autitude',
    description: 'Terapia familiar para famílias de pessoas neurodivergentes: comunicação, vínculos, estratégias de convivência e cuidado mútuo em Pindamonhangaba-SP.',
    keywords: 'terapia familiar, família neurodivergente, apoio familiar, convivência autismo, comunicação familiar, orientação pais neurodivergência, cuidador família',
    canonical: '/blog/terapia-familiar',
    articleBody: 'A terapia familiar é um espaço de cuidado e acolhimento dedicado às famílias de pessoas neurodivergentes, reconhecendo que o diagnóstico e as demandas do cuidado impactam todo o sistema familiar. Na Autitude, oferecemos acompanhamento psicológico e orientação familiar para ajudar os membros da família a compreender melhor a neurodivergência, desenvolver estratégias de comunicação eficazes e fortalecer os vínculos afetivos. As famílias frequentemente enfrentam desafios como sobrecarga do cuidador, dificuldades de comunicação entre os membros, ajustes na rotina e navegação pelo sistema de saúde e educação. A terapia familiar proporciona um espaço seguro para expressar emoções, resolver conflitos e alinhar expectativas. Incluímos psicoeducação sobre neurodivergência, treinamento de pais em manejo positivo e mediação de conversas familiares.'
  },
  'acolhimento-familia': {
    title: 'Acolhimento à Família — O Papel do Suporte no Cuidado Neurodivergente | Autitude',
    description: 'Acolhimento à família: por que o suporte emocional e prático é essencial no cuidado de pessoas neurodivergentes. Grupos de apoio, orientação e escuta qualificada.',
    keywords: 'acolhimento família, suporte familiar, cuidador neurodivergente, grupo de apoio, escuta qualificada, bem-estar cuidador, família TEA, família TDAH',
    canonical: '/blog/acolhimento-familia',
    articleBody: 'O acolhimento à família é um pilar fundamental do cuidado neurodivergente na Autitude. Reconhecemos que a jornada da família começa muito antes da primeira sessão terapêutica, frequentemente marcada por dúvidas, angústias e a busca por respostas. Nosso acolhimento começa com uma escuta qualificada e sem julgamentos, onde cada genitor ou cuidador pode compartilhar suas preocupações, observações e esperanças. Oferecemos orientação personalizada sobre o processo de avaliação e intervenção, explicando cada etapa de forma clara e acessível. Além do suporte individual, promovemos grupos de apoio onde as famílias podem trocar experiências e construir uma rede de suporte mútuo. O bem-estar do cuidador é uma preocupação central, pois sabemos que uma família acolhida e informada é mais capaz de oferecer suporte consistente à pessoa neurodivergente.'
  },
  'inclusao-social': {
    title: 'Inclusão Social — Participação e Pessoas com Neurodivergência | Autitude',
    description: 'Inclusão social de pessoas neurodivergentes: barreiras, oportunidades e estratégias para participação plena na sociedade. Pindamonhangaba-SP.',
    keywords: 'inclusão social, participação social neurodivergente, barreiras inclusão, direitos neurodivergente, cidadania inclusão, convivência social',
    canonical: '/blog/inclusao-social',
    articleBody: 'A inclusão social de pessoas neurodivergentes é um processo que visa garantir participação plena e equitativa em todos os aspectos da vida em sociedade, incluindo educação, trabalho, lazer e convivência comunitária. Na Autitude, trabalhamos para identificar e superar as barreiras que dificultam essa participação, ao mesmo tempo que fortalecemos as habilidades e potencialidades de cada indivíduo. As barreiras à inclusão social podem ser físicas (ambientes não acessíveis), comunicacionais (falta de recursos de comunicação alternativa), atitudinais (preconceito e estigma) e institucionais (políticas públicas insuficientes). Nossa abordagem combina o trabalho direto com a pessoa neurodivergente, desenvolvendo habilidades de autonomia e autodefesa, com a sensibilização da comunidade por meio de psicoeducação e orientação.'
  },
  'comunicacao-alternativa': {
    title: 'Comunicação Alternativa e Aumentativa — Facilitando a Expressão | Autitude',
    description: 'Comunicação alternativa e aumentativa (CAA): recursos e estratégias para pessoas com dificuldade de fala ou linguagem. Pranchas de comunicação, AAC e mais.',
    keywords: 'comunicação alternativa, comunicação aumentativa, CAA, AAC, prancha comunicação, linguagem alternativa, mudo funcional, pré-linguagem',
    canonical: '/blog/comunicacao-alternativa',
    articleBody: 'A Comunicação Alternativa e Aumentativa (CAA) é um conjunto de recursos, estratégias e técnicas que complementam ou substituem a fala para pessoas com dificuldades de comunicação oral. Na Autitude, oferecemos avaliação e implementação de sistemas de CAA para crianças e adolescentes que apresentam desafios significativos na comunicação, incluindo aqueles no espectro autista com pouca ou nenhuma fala funcional. Os recursos de CAA podem incluir desde sistemas de alta tecnologia, como aplicativos de comunicação em tablets, até sistemas de baixa tecnologia, como pranchas de comunicação com símbolos pictográficos. O objetivo da CAA não é substituir a fala, mas oferecer uma via alternativa de expressão que reduza a frustração e permita que a pessoa participe ativamente das interações sociais, expressando suas necessidades e desenvolvendo sua autonomia.'
  },
  'deficiencia-aprendizagem': {
    title: 'Deficiência de Aprendizagem — Tipos, Diagnóstico e Intervenção | Autitude',
    description: 'Deficiências de aprendizagem: dislexia, disgrafia, discalculia, déficit de processamento auditivo. Avaliação especializada e intervenção eficaz em Pindamonhangaba-SP.',
    keywords: 'deficiência aprendizagem, dislexia, disgrafia, discalculia, déficit processamento auditivo, Transtorno da Leitura, Transtorno da Escrita, Transtorno da Calculação',
    canonical: '/blog/deficiencia-aprendizagem',
    articleBody: 'As deficiências de aprendizagem são condições do neurodesenvolvimento que afetam a aquisição e o uso de habilidades acadêmicas específicas, apesar de a pessoa ter inteligência dentro da média e oportunidades educacionais adequadas. Na Autitude, realizamos avaliação especializada para identificar diferentes tipos de deficiência de aprendizagem, incluindo dislexia (transtorno da leitura que afeta a precisão e fluência na leitura), disgrafia (transtorno da expressão escrita que compromete a legibilidade) e discalculia (transtorno da matemática que dificulta o raciocínio numérico). O diagnóstico diferencial é crucial, pois cada tipo requer intervenções específicas. Nossa abordagem combina neuropsicopedagogia, terapia ocupacional e apoio psicopedagógico para desenvolver estratégias compensatórias e promover o sucesso acadêmico.'
  },
  'ansiedade-infantil': {
    title: 'Ansiedade Infantil — Identificação, Sinais e Tratamento em Crianças | Autitude',
    description: 'Ansiedade infantil: como identificar sinais, diferenciais com TEA e TDAH, estratégias de manejo e tratamento especializado em Pindamonhangaba-SP.',
    keywords: 'ansiedade infantil, ansiedade criança, medo excessivo, TAG criança, fobia escolar, ansiedade separação, transtorno ansiedade, TEA ansiedade',
    canonical: '/blog/ansiedade-infantil',
    articleBody: 'A ansiedade infantil é uma condição cada vez mais reconhecida que pode afetar significativamente o bem-estar e o desenvolvimento da criança. Na Autitude, oferecemos avaliação e tratamento especializado para crianças que apresentam sinais de ansiedade, incluindo preocupação excessiva, medos intensos, evitação de situações sociais ou escolares, queixas físicas recorrentes e dificuldade para dormir. É fundamental realizar o diagnóstico diferencial, pois a ansiedade pode se apresentar de forma semelhante a características do Transtorno do Espectro Autista (TEA) e do TDAH. Crianças neurodivergentes têm maior probabilidade de desenvolver transtornos de ansiedade, o que torna a avaliação cuidadosa ainda mais importante. O tratamento combina terapia cognitivo-comportamental adaptada para crianças, estratégias de regulação sensorial e emocional, e orientação familiar.'
  },
  'sono-neurodivergencia': {
    title: 'Sono e Neurodivergência — Distúrbios do Sono em Crianças Neurodivergentes | Autitude',
    description: 'Sono e neurodivergência: distúrbios do sono em crianças com TEA e TDAH, impacto no desenvolvimento e estratégias para melhorar a qualidade do sono.',
    keywords: 'sono criança, distúrbio sono neurodivergente, insônia criança TEA, TDAH sono, higiene do sono, melatonina criança, sono fragmentado, dificuldade dormir',
    canonical: '/blog/sono-neurodivergencia',
    articleBody: 'Os distúrbios do sono são extremamente comuns em crianças neurodivergentes, especialmente naquelas com Transtorno do Espectro Autista (TEA) e Transtorno do Déficit de Atenção e Hiperatividade (TDAH). Na Autitude, abordamos as dificuldades de sono considerando seus múltiplos fatores: alterações no ritmo circadiano, sensibilidades sensoriais que dificultam o relaxamento, ansiedade na hora de dormir e dificuldades de autorregulação. O impacto do sono inadequado no desenvolvimento é significativo, afetando a atenção, o aprendizado, a regulação emocional e o comportamento diurno. Nossa intervenção inclui a implementação de rotinas consistentes para a hora de dormir, adaptações sensoriais no ambiente (como iluminação suave, redução de ruídos e uso de cobertores pesados), estratégias de relaxamento e, quando necessário, orientação sobre intervenções médicas. Cada plano é personalizado considerando as necessidades específicas da criança.'
  },
  'brincadeira-desenvolvimento': {
    title: 'Brincadeira e Desenvolvimento — O Papel do Brincar no Crescimento Infantil | Autitude',
    description: 'Brincadeira e desenvolvimento: como o brincar contribui para a aprendizagem, socialização e regulação emocional. Tipos de brincadeira e quando procurar apoio.',
    keywords: 'brincadeira criança, brincar desenvolvimento, brinquedo terapêutico, brincadeira simbólica, imaginação criança, ludoterapia, brincar e aprendizagem',
    canonical: '/blog/brincadeira-desenvolvimento',
    articleBody: 'A brincadeira é a principal atividade da infância e um veículo fundamental para o desenvolvimento em todas as áreas: motora, cognitiva, linguística, social e emocional. Na Autitude, reconhecemos o brincar como uma ferramenta terapêutica poderosa, utilizando-o intencionalmente para promover o desenvolvimento de crianças neurodivergentes. Diferentes tipos de brincadeira contribuem para aspectos específicos: a brincadeira sensorial estimula o processamento sensorial; a brincadeira simbólica ou de faz de conta desenvolve a imaginação e a compreensão social; a brincadeira de construção trabalha o raciocínio espacial; e os jogos com regras ensinam tomada de turno e cooperação. Crianças neurodivergentes podem se beneficiar de mediação intencional durante o brincar para expandir seu repertório lúdico. Nossa equipe utiliza o brincar como base das intervenções terapêuticas, respeitando os interesses únicos de cada criança.'
  },

  // === NEW 12 BLOG POSTS (2026) ===
  'diagnostico-autismo-idade-escolar': {
    title: 'Diagnóstico de Autismo na Idade Escolar — Sinais e Processo em Pindamonhangaba | Autitude',
    description: 'Como é feito o diagnóstico de autismo leve ou moderado na idade escolar? Sinais de TEA em crianças, processo de avaliação neuropsicológica e suporte especializado em Pindamonhangaba-SP. Agende uma avaliação.',
    keywords: 'diagnóstico autismo idade escolar, autismo leve, autismo moderado, sinais TEA escola, avaliação neuropsicológica, diagnóstico tardio autismo, Pindamonhangaba, Vale do Paraíba',
    canonical: '/blog/diagnostico-autismo-idade-escolar',
    articleBody: 'O diagnóstico de autismo leve (nível 1) ou moderado (nível 2) na idade escolar é um processo que combina observação clínica, entrevistas com pais e professores e aplicação de instrumentos padronizados. Diferente dos diagnósticos precoces, crianças em idade escolar frequentemente apresentam sinais mais sutis que podem ser confundidos com timidez ou dificuldades de adaptação. Na avaliação neuropsicológica, o especialista investiga habilidades de comunicação social, presença de interesses restritos, rigidez cognitiva e processamento sensorial. O diagnóstico na escola permite intervenções direcionadas que podem transformar a trajetória acadêmica e social da criança. Na Autitude, em Pindamonhangaba-SP, realizamos avaliações completas respeitando o ritmo de cada criança, com devolutiva detalhada para a família e orientações para a escola. O laudo emitido serve como base para o Plano de Desenvolvimento Individualizado (PDI) e adaptações pedagógicas necessárias.'
  },
  'diferenca-autismo-tdah-infancia': {
    title: 'Diferença entre Autismo e TDAH na Infância — Sintomas e Diagnóstico | Autitude',
    description: 'Qual é a diferença entre os sintomas de autismo (TEA) e TDAH na infância? Entenda as características distintas de cada condição, comorbidades comuns e como o diagnóstico diferencial é feito em Pindamonhangaba-SP.',
    keywords: 'diferença autismo TDAH, TEA vs TDAH, sintomas autismo, sintomas TDAH, diagnóstico diferencial, autismo TDAH comorbidade, Pindamonhangaba',
    canonical: '/blog/diferenca-autismo-tdah-infancia',
    articleBody: 'Autismo (TEA) e TDAH compartilham sintomas como desatenção e impulsividade, mas suas origens são distintas. No TDAH, a desatenção é generalizada e ligada à dificuldade de regular o foco e os impulsos, enquanto a intenção social está preservada. No autismo, a desatenção é seletiva e ligada a interesses restritos, com prejuízo central na comunicação social, compreensão de pistas não verbais e rigidez comportamental. Cerca de 30 a 50% das crianças com TEA também preenchem critérios para TDAH, o que torna o diagnóstico diferencial complexo, mas essencial. Uma avaliação neuropsicológica detalhada em Pindamonhangaba-SP pode diferenciar os quadros e direcionar as intervenções mais eficazes para cada condição.'
  },
  'avaliacao-neuropsicologica-processo': {
    title: 'Avaliação Neuropsicológica — Quantas Sessões e Como Funciona o Laudo | Autitude',
    description: 'Quantas sessões dura uma avaliação neuropsicológica? Como funciona o processo completo? O laudo emitido é aceito por escolas e planos de saúde? Tire suas dúvidas em Pindamonhangaba-SP.',
    keywords: 'avaliação neuropsicológica, sessões avaliação neuropsicológica, laudo neuropsicológico, neuropsicólogo Pindamonhangaba, laudo TEA, laudo TDAH, adaptação escolar',
    canonical: '/blog/avaliacao-neuropsicologica-processo',
    articleBody: 'A avaliação neuropsicológica mapeia as funções cognitivas, emocionais e comportamentais da criança. Na Autitude, o processo é estruturado em etapas: entrevista inicial (anamnese) com os pais, sessões de aplicação de testes padronizados e dinâmicas lúdicas com a criança, coleta de relatórios escolares e reunião de devolutiva. Em média, o processo dura de 6 a 8 sessões, garantindo uma análise precisa sem pressa. O laudo neuropsicológico é um documento oficial de alto valor científico que embasa o diagnóstico médico e é aceito por escolas de Pindamonhangaba para solicitar adaptações pedagógicas e plano de saúde para liberação de terapias intensivas.'
  },
  'birra-ou-crise-sensorial': {
    title: 'Birra ou Crise Sensorial? Como Diferenciar no Autismo | Autitude',
    description: 'Como diferenciar birra infantil de uma crise de desregulação sensorial no autismo? Entenda os sinais de cada uma, causas neurológicas e a melhor forma de agir em cada situação em Pindamonhangaba-SP.',
    keywords: 'birra infantil, crise sensorial, meltdown autismo, desregulação sensorial, diferença birra crise, comportamento autismo, TEA crise, Pindamonhangaba',
    canonical: '/blog/birra-ou-crise-sensorial',
    articleBody: 'A birra infantil tem uma finalidade clara e geralmente cessa quando a criança obtém o que deseja ou percebe que não há plateia. A crise de desregulação sensorial (meltdown) é um colapso neurológico causado por sobrecarga sensorial, emocional ou cognitiva. Durante a crise, a criança perde o controle e não consegue parar mesmo que o desejo inicial seja atendido. Na crise sensorial, a criança precisa de segurança, acolhimento e redução de estímulos, não de disciplina. Compreender essa diferença é essencial para pais e educadores em Pindamonhangaba-SP. Na Autitude, ensinamos as famílias a identificar os gatilhos e responder adequadamente a cada tipo de comportamento.'
  },
  'comportamento-opositor-tod-escola': {
    title: 'Comportamento Opositor (TOD) na Escola — Estratégias para TEA e TDAH | Autitude',
    description: 'O que fazer quando a criança com TEA ou TDAH apresenta comportamento opositor desafiador (TOD) na escola? Estratégias baseadas em antecipação, reforço positivo e parceria escola-clínica em Pindamonhangaba-SP.',
    keywords: 'TOD, transtorno opositor desafiador, comportamento opositor escola, TEA TOD, TDAH TOD, estratégias TOD, escola inclusiva, Pindamonhangaba',
    canonical: '/blog/comportamento-opositor-tod-escola',
    articleBody: 'O Transtorno Opositor Desafiador (TOD) frequentemente acompanha o TDAH e o TEA, manifestando-se como recusa sistemática a regras e confrontos com autoridades. A abordagem mais eficaz não é o confronto direto, mas a antecipação: rotinas visuais claras reduzem a ansiedade de transição; escolhas direcionadas dam à criança sensação de controle; e o reforço positivo imediato valida os comportamentos adequados. A clínica Autitude realiza visitas agendadas às escolas de Pindamonhangaba e reuniões de alinhamento com professores para construir o Plano de Desenvolvimento Individualizado (PDI) do aluno, garantindo que as estratégias sejam consistentes entre clínica e escola.'
  },
  'aba-humanizada-estereotipias': {
    title: 'Terapia ABA Humanizada — Reduzir Estereotipias sem Punição | Autitude',
    description: 'Como a abordagem ABA humanizada ajuda a reduzir estereotipias e agressividade em crianças com autismo sem punir? Método baseado em reforço positivo, respeito e comunicação funcional em Pindamonhangaba-SP.',
    keywords: 'ABA humanizada, estereotipias autismo, agressividade infantil, ABA punição, análise do comportamento, comunicação funcional, comportamento autismo, Pindamonhangaba',
    canonical: '/blog/aba-humanizada-estereotipias',
    articleBody: 'A Análise do Comportamento Aplicada (ABA) moderna é estritamente humanizada. Na Autitude, não punimos comportamentos e não tentamos eliminar estereotipias apenas por parecerem diferentes. Se uma estereotipia cumpre função de autorregulação e não causa prejuízo, é respeitada. Para comportamentos agressivos, investigamos a função: a criança está agredindo para fugir de tarefas difíceis? Para pedir atenção? Para aliviar desconforto físico? Ao identificar a causa, ensinamos uma comunicação funcional alternativa. Quando a criança aprende a usar um cartão de comunicação ou a dizer "me ajuda", a agressividade perde a razão de existir. O aprendizado acontece pelo afeto, respeito aos limites e reforço das conquistas.'
  },
  'marcos-fala-infantil': {
    title: 'Marcos do Desenvolvimento da Fala — Até Quando é Normal Não Falar? | Autitude',
    description: 'Até que idade é normal a criança não falar ou falar errado? Marcos do desenvolvimento da fala de 0 a 3 anos, sinais de alerta por idade e quando procurar avaliação fonoaudiológica em Pindamonhangaba-SP.',
    keywords: 'marcos desenvolvimento fala, atraso fala infantil, criança não fala, quando procurar fonoaudiólogo, desenvolvimento linguagem, fala bebê, Pindamonhangaba',
    canonical: '/blog/marcos-fala-infantil',
    articleBody: 'Aos 12 meses, espera-se que a criança fale palavras simples como "mamá" e aponte para objetos. Aos 18 meses, deve falar de 10 a 20 palavras e compreender ordens simples. Aos 2 anos, o vocabulário deve ter pelo menos 50 palavras com frases de duas palavras. Aos 3 anos, a fala deve ser compreensível para adultos fora do convívio familiar. Atrasos significativos não devem ser ignorados sob a justificativa de que "cada criança tem seu tempo". A intervenção fonoaudiológica precoce é a chave para o sucesso. Na Autitude, em Pindamonhangaba-SP, realizamos avaliação completa do desenvolvimento da linguagem e intervenção personalizada para cada criança.'
  },
  'seletividade-alimentar-autismo': {
    title: 'Seletividade Alimentar no Autismo — Quando a Fono e a TO Atuam Juntas | Autitude',
    description: 'Meu filho só come alimentos amarelos ou crocantes, isso pode ser seletividade alimentar do autismo? Quando a fonoaudiologia e a terapia ocupacional devem agir juntas? Entenda em Pindamonhangaba-SP.',
    keywords: 'seletividade alimentar, autismo alimentação, fonoaudiologia alimentação, terapia ocupacional alimentação, integração sensorial alimentar, recusa alimentar, Pindamonhangaba',
    canonical: '/blog/seletividade-alimentar-autismo',
    articleBody: 'A seletividade alimentar no autismo raramente é "frescura". Está ligada a disfunções no processamento sensorial: a criança pode ter hipersensibilidade a texturas, cheiros, cores ou temperaturas. Uma criança que só come alimentos crocantes ou de uma cor específica busca previsibilidade sensorial. Forçar a criança a comer nesses casos gera traumas severos. A fonoaudiologia atua na motricidade orofacial e na introdução de novas texturas, enquanto a terapia ocupacional trabalha a integração sensorial para dessensibilizar o sistema nervoso. Na Autitude, em Pindamonhangaba-SP, unimos fonoaudiologia e terapia ocupacional em um plano integrado para tratar a seletividade alimentar de forma respeitosa e eficaz.'
  },
  'integracao-sensorial-comunicacao-criancas-nao-verbais': {
    title: 'Integração Sensorial e Comunicação em Crianças Não-Verbais — Bases do Neurodesenvolvimento | Autitude',
    description: 'O que é integração sensorial e por que ela é a base da terapia ocupacional no neurodesenvolvimento? Como estimular a comunicação funcional em crianças não-verbais usando CAA? Pindamonhangaba-SP.',
    keywords: 'integração sensorial, terapia ocupacional integração sensorial, comunicação alternativa, CAA, criança não verbal, PECS, comunicação funcional, Pindamonhangaba',
    canonical: '/blog/integracao-sensorial-comunicacao-criancas-nao-verbais',
    articleBody: 'A integração sensorial é a capacidade do cérebro de organizar informações dos sentidos para gerar respostas adequadas. Crianças com Transtorno do Processamento Sensorial recebem informações de forma distorcida: o toque de uma etiqueta pode parecer uma lixa, o barulho do liquidificador soa como turbina. A terapia ocupacional baseada em integração sensorial treina o sistema nervoso a tolerar e processar essas sensações. Para crianças não-verbais, a Comunicação Alternativa e Ampliada (CAA) é essencial, usando desde pastas com figuras (PECS) até aplicativos em tablets. Ao contrário do mito popular, a CAA não atrasa a fala — estimula as áreas cerebrais da linguagem ao reduzir a frustração da criança.'
  },
  'cobertura-plano-saude-aba-fono': {
    title: 'Plano de Saúde é Obrigado a Cobrir Terapia ABA e Fonoaudiologia? | Autitude',
    description: 'O plano de saúde é obrigado a cobrir a terapia ABA e fonoaudiologia pelo método especializado? Direitos das famílias, cobertura ANS e como garantir o tratamento em Pindamonhangaba-SP.',
    keywords: 'plano de saúde ABA, cobertura fonoaudiologia, ANS terapia ocupacional, plano saúde autismo, direito TEA, convênio ABA, Pindamonhangaba',
    canonical: '/blog/cobertura-plano-saude-aba-fono',
    articleBody: 'Sim, a cobertura é obrigatória por lei. A ANS determinou o fim do limite de sessões de psicoterapia, fonoaudiologia, terapia ocupacional e fisioterapia para pacientes com transtornos globais do desenvolvimento, incluindo o TEA. O plano deve cobrir as terapias na quantidade e metodologia prescritas pelo médico, incluindo ABA com fonoaudiologia especializada e terapia ocupacional com integração sensorial. Se o plano negar, a família pode recorrer à ANS ou buscar via judicial. Na Autitude, emitimos toda a documentação necessária para que as famílias de Pindamonhangaba-SP garantam seus direitos.'
  },
  'liminar-tratamento-autismo': {
    title: 'Liminar para Tratamento de Autismo — Como Garantir as Terapias pelo Plano | Autitude',
    description: 'Como funciona a liminar para garantir o tratamento neurodivergente em clínicas particulares? Documentos necessários, prazos e orientação jurídica para famílias em Pindamonhangaba-SP.',
    keywords: 'liminar autismo, tutela urgência saúde, plano de saúde negou autismo, processo judicial TEA, direito terapias autismo, Pindamonhangaba',
    canonical: '/blog/liminar-tratamento-autismo',
    articleBody: 'Quando o plano de saúde nega ou limita o tratamento, a família pode obter uma liminar (tutela de urgência) em poucos dias determinando que o plano custeie imediatamente as terapias na clínica escolhida. Documentos essenciais: laudo médico detalhado com CID e justificativa de urgência, negativa formal do plano por escrito e relatório da clínica particular. A Autitude, em Pindamonhangaba-SP, fornece relatórios transdisciplinares robustos e gráficos de evolução que comprovam a eficácia e necessidade de continuidade do tratamento, fortalecendo o processo judicial da família.'
  },
  'vinculo-terapeutico-relatorios-evolucao': {
    title: 'Vínculo Terapêutico e Relatórios de Evolução — Direitos das Famílias | Autitude',
    description: 'Por que o vínculo terapêutico e a baixa rotatividade de profissionais são essenciais para a evolução da criança? Como a Autitude emite relatórios e gráficos de evolução em Pindamonhangaba-SP.',
    keywords: 'vínculo terapêutico, rotatividade terapeutas, relatório evolução, gráfico evolução ABA, continuidade tratamento, documentação terapia, Pindamonhangaba',
    canonical: '/blog/vinculo-terapeutico-relatorios-evolucao',
    articleBody: 'A alta rotatividade de terapeutas é um dos maiores problemas das redes credenciadas. Para uma criança com autismo, que valoriza previsibilidade, a quebra constante de vínculo é devastadora, podendo causar regressões. Na Autitude, priorizamos a estabilidade da equipe e o vínculo terapêutico como motor do aprendizado. Além disso, emitimos relatórios transdisciplinares e gráficos de evolução baseados em dados de cada sessão, comparando o desempenho com os objetivos do Plano de Ensino Individualizado (PEI). Essa documentação serve como bússola para a equipe ajustar estratégias e como comprovação técnica para médicos, operadoras de saúde e processos judiciais em Pindamonhangaba-SP.'
  },

  // === BLOG INDEX ===
  'blog': {
    title: 'Blog — Conteúdo sobre Desenvolvimento Infantil e Neurodivergência | Autitude',
    description: 'Artigos sobre desenvolvimento infantil, neurodivergência, neuropsicologia, fonoaudiologia, terapia ocupacional e cuidado integrado para famílias.',
    keywords: 'blog, artigos, desenvolvimento infantil, neurodivergência, educação, saúde infantil',
    canonical: '/blog'
  }
}

const content = seoContent[slug] || {
  title: 'Autitude - Desenvolvimento e Ação Humana',
  description: 'Espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Pindamonhangaba-SP.',
  keywords: 'autitude, neurodivergência, Pindamonhangaba, desenvolvimento infantil',
  canonical: `/${slug}`
}

const siteBase = 'https://autitude.com.br'

// Related posts mapping for internal cross-linking
const relatedPosts = {
  'terapia-ocupacional-infantil': ['integracao-sensorial', 'desenvolvimento-infantil', 'terapia-ocupacional-adulto'],
  'integracao-sensorial': ['terapia-ocupacional-infantil', 'autismo-terapia', 'alimentacao-neurodivergencia'],
  'neuropsicologia-infantil': ['tdah-tratamento', 'autismo-terapia', 'laudo-neuropsicologico'],
  'neuropsicopedagogia': ['dificuldades-aprendizagem', 'escola-inclusiva', 'deficiencia-aprendizagem'],
  'fonoaudiologia-infantil': ['comunicacao-alternativa', 'autismo-terapia', 'desenvolvimento-infantil'],
  'autismo-terapia': ['terapia-aba', 'integracao-sensorial', 'habilidades-sociais'],
  'tdah-tratamento': ['neuropsicologia-infantil', 'regulacao-emocional', 'exercicios-fisicos'],
  'terapia-aba': ['autismo-terapia', 'habilidades-sociais', 'regulacao-emocional'],
  'dificuldades-aprendizagem': ['neuropsicopedagogia', 'escola-inclusiva', 'deficiencia-aprendizagem'],
  'desenvolvimento-infantil': ['terapia-ocupacional-infantil', 'brincadeira-desenvolvimento', 'avaliacao-desenvolvimento'],
  'neurodivergencia': ['autismo-terapia', 'tdah-tratamento', 'inclusao-social'],
  'terapia-ocupacional-adulto': ['terapia-ocupacional-infantil', 'laudo-neuropsicologico', 'autismo-adulto'],
  'laudo-neuropsicologico': ['neuropsicologia-infantil', 'avaliacao-desenvolvimento', 'autismo-adulto'],
  'avaliacao-desenvolvimento': ['desenvolvimento-infantil', 'neuropsicologia-infantil', 'laudo-neuropsicologico'],
  'escola-inclusiva': ['neuropsicopedagogia', 'dificuldades-aprendizagem', 'inclusao-social'],
  'autismo-adulto': ['autismo-terapia', 'terapia-ocupacional-adulto', 'neurodivergencia'],
  'regulacao-emocional': ['tdah-tratamento', 'habilidades-sociais', 'ansiedade-infantil'],
  'habilidades-sociais': ['autismo-terapia', 'terapia-aba', 'inclusao-social'],
  'alimentacao-neurodivergencia': ['integracao-sensorial', 'autismo-terapia', 'terapia-ocupacional-infantil'],
  'exercicios-fisicos': ['tdah-tratamento', 'regulacao-emocional', 'habilidades-sociais'],
  'terapia-familiar': ['acolhimento-familia', 'autismo-terapia', 'inclusao-social'],
  'acolhimento-familia': ['terapia-familiar', 'neurodivergencia', 'regulacao-emocional'],
  'inclusao-social': ['escola-inclusiva', 'habilidades-sociais', 'neurodivergencia'],
  'comunicacao-alternativa': ['fonoaudiologia-infantil', 'autismo-terapia', 'habilidades-sociais'],
  'deficiencia-aprendizagem': ['dificuldades-aprendizagem', 'neuropsicopedagogia', 'escola-inclusiva'],
  'ansiedade-infantil': ['regulacao-emocional', 'neuropsicologia-infantil', 'tdah-tratamento'],
  'sono-neurodivergencia': ['tdah-tratamento', 'autismo-terapia', 'regulacao-emocional'],
  'brincadeira-desenvolvimento': ['desenvolvimento-infantil', 'habilidades-sociais', 'alimentacao-neurodivergencia'],
  'diagnostico-autismo-idade-escolar': ['neuropsicologia-infantil', 'avaliacao-neuropsicologica-processo', 'diferenca-autismo-tdah-infancia'],
  'diferenca-autismo-tdah-infancia': ['neuropsicologia-infantil', 'tdah-tratamento', 'diagnostico-autismo-idade-escolar'],
  'avaliacao-neuropsicologica-processo': ['neuropsicologia-infantil', 'laudo-neuropsicologico', 'diagnostico-autismo-idade-escolar'],
  'birra-ou-crise-sensorial': ['autismo-terapia', 'regulacao-emocional', 'aba-humanizada-estereotipias'],
  'comportamento-opositor-tod-escola': ['autismo-terapia', 'tdah-tratamento', 'escola-inclusiva'],
  'aba-humanizada-estereotipias': ['terapia-aba', 'autismo-terapia', 'habilidades-sociais'],
  'marcos-fala-infantil': ['fonoaudiologia-infantil', 'desenvolvimento-infantil', 'seletividade-alimentar-autismo'],
  'seletividade-alimentar-autismo': ['alimentacao-neurodivergencia', 'integracao-sensorial', 'marcos-fala-infantil'],
  'integracao-sensorial-comunicacao-criancas-nao-verbais': ['integracao-sensorial', 'comunicacao-alternativa', 'seletividade-alimentar-autismo'],
  'cobertura-plano-saude-aba-fono': ['autismo-terapia', 'terapia-aba', 'liminar-tratamento-autismo'],
  'liminar-tratamento-autismo': ['autismo-terapia', 'cobertura-plano-saude-aba-fono', 'vinculo-terapeutico-relatorios-evolucao'],
  'vinculo-terapeutico-relatorios-evolucao': ['autismo-terapia', 'cobertura-plano-saude-aba-fono', 'liminar-tratamento-autismo']
}

const currentRelated = computed(() => {
  const slugs = relatedPosts[slug] || []
  return slugs.map(s => ({
    slug: s,
    title: seoContent[s]?.title?.split(' | ')[0] || s
  }))
})

useHead({
  title: content.title,
  meta: [
    { name: 'description', content: content.description },
    { name: 'keywords', content: content.keywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Dra. Juliana Mariani | Terapeuta Ocupacional - CREFITO 20083-TO' },
    { property: 'og:title', content: content.title },
    { property: 'og:description', content: content.description },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: '2024-06-01' },
    { property: 'article:modified_time', content: '2026-06-09' },
    { property: 'article:author', content: 'Dra. Juliana Mariani' },
    { property: 'article:section', content: 'Neurodivergência' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: `${siteBase}${content.canonical}` },
    { property: 'og:image', content: `${siteBase}/full-logo.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: content.title },
    { name: 'twitter:description', content: content.description },
    { name: 'twitter:image', content: `${siteBase}/full-logo.png` },
    { name: 'twitter:creator', content: '@clinicaautitude' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}${content.canonical}` },
    { rel: 'alternate', href: `${siteBase}${content.canonical}`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: content.title.split(' | ')[0],
        description: content.description,
        articleBody: content.articleBody || '',
        author: {
          '@type': 'Person',
          name: 'Dra. Juliana Mariani',
          url: 'https://autitude.com.br/equipe',
          description: 'Terapeuta Ocupacional | CREFITO 20083-TO',
          identifier: 'CREFITO 20083-TO',
          worksFor: {
            '@type': 'Organization',
            name: 'Autitude - Desenvolvimento e Ação Humana'
          }
        },
        publisher: {
          '@type': 'Organization',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          logo: {
            '@type': 'ImageObject',
            url: `${siteBase}/full-logo.png`
          }
        },
        datePublished: '2024-06-01',
        dateModified: '2026-06-09',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteBase}${content.canonical}`
        },
        inLanguage: 'pt-BR',
        about: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Major José dos Santos Moreira, 328',
            addressLocality: 'Pindamonhangaba',
            addressRegion: 'SP',
            addressCountry: 'BR'
          }
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-heading', '.seo-paragraph']
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteBase}/blog` },
          { '@type': 'ListItem', position: 3, name: content.title.split(' | ')[0], item: `${siteBase}${content.canonical}` }
        ]
      })
    }
  ]
})

onMounted(() => {
  navigateTo('/', { replace: true })
})
</script>

<template>
  <div class="seo-blog-page">
    <article class="blog-content" itemscope itemtype="https://schema.org/WebPage">
      <nav class="blog-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Início</a>
        <span aria-hidden="true">/</span>
        <a href="/blog">Blog</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{{ content.title.split(' | ')[0] }}</span>
      </nav>

      <header>
        <h1 itemprop="name">{{ content.title }}</h1>
        <p class="blog-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">Autitude - Desenvolvimento e Ação Humana</span>
          <span class="author-separator">|</span>
          <time itemprop="datePublished" datetime="2024-06-01">Publicado em 01/06/2024</time>
          <span class="author-separator">|</span>
          <time itemprop="dateModified" datetime="2026-06-09">Atualizado em 09/06/2026</time>
        </p>
      </header>

      <section class="seo-answer seo-text" aria-label="Resumo">
        <p class="seo-paragraph">{{ content.description }}</p>
      </section>

      <section class="blog-keywords" aria-label="Temas relacionados">
        <span class="keyword-tag" v-for="keyword in content.keywords.split(', ').slice(0, 5)" :key="keyword">
          {{ keyword }}
        </span>
      </section>

      <!-- Hidden article body for SEO — rich content visible to crawlers -->
      <section class="blog-article-body" aria-label="Conteúdo do artigo" v-if="content.articleBody" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
        <div itemprop="articleBody">
          <p>{{ content.articleBody }}</p>
        </div>
      </section>

      <section class="blog-related" v-if="currentRelated.length" aria-label="Artigos relacionados">
        <h2>Artigos Relacionados</h2>
        <div class="related-grid">
          <a
            v-for="post in currentRelated"
            :key="post.slug"
            :href="`/blog/${post.slug}`"
            class="related-link"
          >
            {{ post.title }}
          </a>
        </div>
      </section>

      <section class="blog-cta">
        <p>Conteúdo indexado por motores de busca. Redirecionando para a página principal...</p>
        <a href="/" class="btn btn-primary">Ir para o Início</a>
          <!-- Hidden People Also Ask section for AI citations -->
          <div class="seo-paa" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
            <h2>Perguntas relacionadas sobre desenvolvimento infantil e neurodivergência</h2>
            <h3>O que é diagnóstico tardio de autismo na idade escolar?</h3>
            <p>O diagnóstico tardio de autismo ocorre quando crianças entre 6 e 12 anos recebem o diagnóstico de TEA, muitas vezes após anos de sinais confundidos com TDAH, ansiedade ou questões comportamentais. A avaliação neuropsicológica é essencial para o diagnóstico preciso. Saiba mais em <a href="/blog/diagnostico-autismo-idade-escolar">diagnóstico de autismo na idade escolar</a>.</p>
            <h3>Qual a diferença entre autismo e TDAH na infância?</h3>
            <p>Autismo (TEA) e TDAH compartilham sintomas como desatenção, mas são condições distintas. O TEA envolve prejuízos na comunicação social e comportamentos repetitivos, enquanto o TDAH tem como núcleo a desregulação da atenção e hiperatividade. Veja a comparação completa em <a href="/blog/diferenca-autismo-tdah-infancia">diferença entre autismo e TDAH na infância</a>.</p>
            <h3>Como diferenciar birra de crise sensorial?</h3>
            <p>A birra é um comportamento intencional para obter algo, enquanto a crise sensorial é uma reação involuntária a estímulos avassaladores. Crianças neurodivergentes frequentemente têm crises sensoriais. Aprenda a diferenciar em <a href="/blog/birra-ou-crise-sensorial">birra ou crise sensorial</a>.</p>
            <h3>O que é comportamento opositor (TOD) no contexto escolar?</h3>
            <p>O TOD se caracteriza por um padrão persistente de irritabilidade, discussão e desafio a figuras de autoridade. Na escola, esses comportamentos podem indicar necessidades não atendidas. Veja estratégias em <a href="/blog/comportamento-opositor-tod-escola">comportamento opositor TOD na escola</a>.</p>
            <h3>Como a terapia ABA humanizada trabalha estereotipias?</h3>
            <p>A ABA humanizada aborda as estereotipias como formas de comunicação e regulação, não como comportamentos a serem eliminados. A abordagem respeita a funcionalidade do estímulo. Leia mais em <a href="/blog/aba-humanizada-estereotipias">ABA humanizada e estereotipias</a>.</p>
            <h3>Quais são os marcos do desenvolvimento da fala infantil?</h3>
            <p>Balbucio aos 6 meses, primeiras palavras aos 12 meses, combinação de 2 palavras aos 24 meses e frases completas aos 36 meses. Atrasos nesses marcos podem indicar necessidade de intervenção fonoaudiológica. Confira a tabela completa em <a href="/blog/marcos-fala-infantil">marcos da fala infantil</a>.</p>
            <h3>O que é seletividade alimentar no autismo?</h3>
            <p>A seletividade alimentar no TEA está relacionada à hipersensibilidade sensorial a texturas, cores, cheiros e temperaturas. Não é comportamento voluntário, mas resposta neurológica. Saiba como intervir em <a href="/blog/seletividade-alimentar-autismo">seletividade alimentar no autismo</a>.</p>
            <h3>O plano de saúde cobre terapia ABA e fonoaudiologia?</h3>
            <p>Sim, os planos de saúde são obrigados por lei a cobrir ABA e fonoaudiologia para pacientes com TEA, conforme a Lei 9.656/98 e a Lei Berenice Piana (12.764/12). Descubra seus direitos em <a href="/blog/cobertura-plano-saude-aba-fono">cobertura do plano de saúde para ABA e fonoaudiologia</a>.</p>
            <h3>Como conseguir liminar para tratamento de autismo?</h3>
            <p>A liminar é um recurso judicial que obriga planos de saúde ou o poder público a custearem terapias quando há recusa. O direito ao tratamento é garantido pelo Estatuto da Pessoa com Deficiência. Veja o passo a passo em <a href="/blog/liminar-tratamento-autismo">liminar para tratamento de autismo</a>.</p>
            <h3>Como a integração sensorial ajuda crianças não-verbais?</h3>
            <p>A integração sensorial organiza as sensações do corpo e do ambiente, criando as bases neurológicas para a comunicação intencional. Para crianças não-verbais, a regulação sensorial precede intervenções de comunicação. Saiba mais em <a href="/blog/integracao-sensorial-comunicacao-criancas-nao-verbais">integração sensorial e comunicação em crianças não-verbais</a>.</p>
          </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.seo-blog-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 2rem;
}

.blog-content {
  max-width: 700px;
  text-align: center;
}

.blog-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 0.8125rem;
  color: var(--text-light);
}

.blog-breadcrumb a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.blog-breadcrumb a:hover {
  color: var(--primary);
}

.blog-breadcrumb [aria-current="page"] {
  color: var(--text);
  font-weight: 500;
}

.blog-content h1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.blog-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.author-separator {
  color: var(--border);
}

.seo-answer {
  background: var(--lilac-soft);
  border-left: 4px solid var(--primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
  text-align: left;
}

.seo-paragraph {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--text);
  font-weight: 500;
}

.blog-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.keyword-tag {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--lilac-deep);
}

.blog-related {
  margin-bottom: 2.5rem;
  text-align: left;
}

.blog-related h2 {
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.related-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.related-link {
  display: block;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text);
  font-size: 0.875rem;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.related-link:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateX(4px);
}

.blog-cta {
  margin-top: 1rem;
}

.blog-cta p {
  color: var(--text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.blog-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 640px) {
  .seo-blog-page {
    padding: 5rem 1rem 2rem;
  }

  .blog-description {
    font-size: 1rem;
  }
}
</style>
