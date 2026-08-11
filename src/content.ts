export type Locale = "en" | "pt";

export type LocalizedText = Record<Locale, string>;

export type ProjectCaseDetail = {
  discoveryTitle: LocalizedText;
  discoveryCopy: LocalizedText;
  methods: LocalizedText[];
  flowTitle: LocalizedText;
  flowSteps: LocalizedText[];
  systemTitle: LocalizedText;
  systemCopy: LocalizedText;
  outcomeTitle: LocalizedText;
  note: LocalizedText;
};

export type Project = {
  slug: "chatadv" | "levite" | "noma";
  index: string;
  name: string;
  year: string;
  dateLabel?: LocalizedText;
  kind?: "client" | "concept";
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  duration: LocalizedText;
  tags: LocalizedText[];
  challenge: LocalizedText;
  context: LocalizedText;
  insight: LocalizedText;
  decision: LocalizedText;
  outcome: LocalizedText;
  learning: LocalizedText;
  quote: LocalizedText;
  metric: string;
  metricLabel: LocalizedText;
  theme: "ink" | "blue" | "green" | "gold" | "coral";
  caseDetail?: ProjectCaseDetail;
};

export const projects: Project[] = [
  {
    slug: "chatadv",
    index: "01",
    name: "ChatADV",
    year: "—",
    dateLabel: { en: "Pre-launch", pt: "Pré-lançamento" },
    kind: "client",
    category: {
      en: "AI workspace for legal teams",
      pt: "Workspace com IA para equipes jurídicas",
    },
    title: {
      en: "One legal workspace. Less time lost between tools.",
      pt: "Um só workspace jurídico. Menos tempo perdido entre ferramentas.",
    },
    summary: {
      en: "An end-to-end interface redesign for an AI SaaS platform that brings legal drafting, case-law research, transcription, and text review into one system.",
      pt: "Uma reestruturação completa da interface de uma plataforma SaaS com IA que reúne redação jurídica, pesquisa de jurisprudência, transcrição e revisão de textos em um único sistema.",
    },
    role: {
      en: "Product Designer — two-person design team",
      pt: "Product Designer — equipe de design com duas pessoas",
    },
    duration: { en: "4 months", pt: "4 meses" },
    tags: [
      { en: "UX Research", pt: "Pesquisa UX" },
      { en: "Information Architecture", pt: "Arquitetura da Informação" },
      { en: "Interface Design", pt: "Design de Interface" },
    ],
    challenge: {
      en: "The project required restructuring the entire platform while a two-person design team stayed ahead of development. A broad set of advanced tools had to feel connected, understandable, and feasible under tight time and technical constraints.",
      pt: "O projeto exigia reestruturar toda a plataforma enquanto uma equipe de design com duas pessoas trabalhava à frente do desenvolvimento. Um conjunto amplo de ferramentas avançadas precisava parecer conectado, compreensível e viável diante de restrições de prazo e tecnologia.",
    },
    context: {
      en: "ChatADV brings together SaaS tools designed to save time in legal practice. Its features include AI-assisted legal drafting, case-law research, audio transcription, and text review for an audience composed mainly of lawyers over 35.",
      pt: "O ChatADV reúne ferramentas SaaS criadas para economizar tempo na prática jurídica. Entre os recursos estão redação de documentos com IA, pesquisa de jurisprudência, transcrição de áudios e revisão de textos para um público formado principalmente por advogados com mais de 35 anos.",
    },
    insight: {
      en: "AI was not the experience. The real experience began with a familiar legal task and ended with a result ready to be reviewed.",
      pt: "A IA não era a experiência. A experiência começava em uma tarefa jurídica reconhecível e terminava em um resultado pronto para ser revisado.",
    },
    decision: {
      en: "We organized the interface around recognizable jobs—draft, research, transcribe, and review—then used shared patterns and progressive guidance to make every tool feel part of the same product.",
      pt: "Organizamos a interface em torno de tarefas reconhecíveis — redigir, pesquisar, transcrever e revisar — e usamos padrões compartilhados e orientação progressiva para fazer cada ferramenta parecer parte do mesmo produto.",
    },
    outcome: {
      en: "Because the product has not launched, the case does not claim performance metrics. The prototype was reviewed in usability sessions with the CEO and through early beta access, creating a clearer foundation for implementation and future validation.",
      pt: "Como o produto ainda não foi lançado, o case não apresenta métricas de desempenho. O protótipo foi revisado em testes de usabilidade com o CEO e por meio de acessos beta, criando uma base mais clara para implementação e validações futuras.",
    },
    learning: {
      en: "Designing under pressure reinforced that speed does not come from skipping structure. It comes from making decisions reusable.",
      pt: "Projetar sob pressão reforçou que velocidade não vem de pular a estrutura. Ela vem de tornar as decisões reutilizáveis.",
    },
    quote: {
      en: "Every feature had to save time before asking users to learn a new way of working.",
      pt: "Cada recurso precisava economizar tempo antes de pedir que o usuário aprendesse uma nova forma de trabalhar.",
    },
    metric: "BETA",
    metricLabel: {
      en: "pre-launch validation with the CEO and early users",
      pt: "validação pré-lançamento com o CEO e usuários iniciais",
    },
    theme: "green",
    caseDetail: {
      discoveryTitle: {
        en: "Research that kept pace with delivery.",
        pt: "Pesquisa que acompanhou o ritmo da entrega.",
      },
      discoveryCopy: {
        en: "We combined interviews, competitive analysis, journey mapping, and beta validation. Instead of treating discovery as a separate phase, findings were organized in Scrum cycles and translated into decisions alongside the evolving product.",
        pt: "Combinamos entrevistas, análise de concorrentes, mapeamento de jornadas e validações beta. Em vez de tratar a descoberta como uma fase isolada, organizamos os aprendizados em ciclos de Scrum e os transformamos em decisões junto à evolução do produto.",
      },
      methods: [
        { en: "User interviews", pt: "Entrevistas com usuários" },
        { en: "Competitive analysis", pt: "Análise de concorrentes" },
        { en: "Journeys and flows", pt: "Jornadas e fluxos" },
        { en: "Usability validation", pt: "Validação de usabilidade" },
      ],
      flowTitle: {
        en: "From a legal task to a result ready for review.",
        pt: "De uma tarefa jurídica a um resultado pronto para revisão.",
      },
      flowSteps: [
        { en: "Choose task", pt: "Escolher tarefa" },
        { en: "Provide context", pt: "Informar contexto" },
        { en: "Generate result", pt: "Gerar resultado" },
        { en: "Review and refine", pt: "Revisar e refinar" },
      ],
      systemTitle: {
        en: "Consistency became a way to move faster.",
        pt: "Consistência virou uma forma de avançar mais rápido.",
      },
      systemCopy: {
        en: "Reusable components and shared interaction rules helped the two-person design team protect coherence while working ahead of development and adapting to feedback.",
        pt: "Componentes reutilizáveis e regras de interação compartilhadas ajudaram a equipe de duas pessoas a preservar a coerência enquanto trabalhava à frente do desenvolvimento e incorporava feedbacks.",
      },
      outcomeTitle: {
        en: "A validated direction, ready to support development.",
        pt: "Uma direção validada, pronta para apoiar o desenvolvimento.",
      },
      note: {
        en: "Real client project, currently pre-launch. No post-release metrics are claimed. The interface shown is an active ChatADV product screen and may evolve before launch.",
        pt: "Projeto real para cliente, atualmente em pré-lançamento. Nenhuma métrica pós-lançamento é atribuída ao case. A interface exibida é uma tela ativa do produto ChatADV e pode evoluir antes do lançamento.",
      },
    },
  },
  {
    slug: "levite",
    index: "02",
    name: "LEVITÉ",
    year: "—",
    dateLabel: { en: "Launched", pt: "Publicado" },
    kind: "client",
    category: {
      en: "Institutional health and wellbeing website",
      pt: "Site institucional de saúde e bem-estar",
    },
    title: {
      en: "A digital front door for care, trust, and appointment intent.",
      pt: "Uma presença digital para transformar cuidado em confiança e agendamento.",
    },
    summary: {
      en: "An institutional website for Instituto Levité that presents the brand, founder, and specialties while creating a direct path to appointment booking via WhatsApp.",
      pt: "Um site institucional para o Instituto Levité que apresenta a marca, a fundadora e as especialidades, criando um caminho direto para o agendamento pelo WhatsApp.",
    },
    role: {
      en: "Independent UI/UX Designer",
      pt: "UI/UX Designer independente",
    },
    duration: { en: "3 weeks", pt: "3 semanas" },
    tags: [
      { en: "Information Architecture", pt: "Arquitetura da Informação" },
      { en: "Interface Design", pt: "Design de Interface" },
      { en: "Conversion Path", pt: "Jornada de Conversão" },
    ],
    challenge: {
      en: "With a three-week timeline and no direct access to users or research, the challenge was to turn the institute's available content into a credible, welcoming, and easy-to-navigate experience—without following the implementation phase.",
      pt: "Com um prazo de três semanas e sem acesso direto a usuários ou pesquisa, o desafio foi transformar o conteúdo disponível do instituto em uma experiência confiável, acolhedora e fácil de navegar — sem acompanhar a etapa de implementação.",
    },
    context: {
      en: "Instituto Levité needed its first institutional website: a central place to explain its approach, introduce the team and specialties, and give prospective patients a clear way to get in touch.",
      pt: "O Instituto Levité precisava de seu primeiro site institucional: um espaço central para apresentar sua abordagem, sua equipe e suas especialidades, além de oferecer a potenciais pacientes uma forma clara de entrar em contato.",
    },
    insight: {
      en: "For a healthcare institution, trust is the first conversion step. Before asking someone to schedule, the website had to make the institute feel credible, present, and human.",
      pt: "Para uma instituição de saúde, confiança é o primeiro passo da conversão. Antes de pedir um agendamento, o site precisava fazer o instituto parecer confiável, presente e humano.",
    },
    decision: {
      en: "The interface combines warm photography, a restrained gold-and-black palette, large editorial headlines, and repeated WhatsApp calls to action so users can understand the institute before starting a conversation.",
      pt: "A interface combina fotografias acolhedoras, uma paleta contida de dourado e preto, títulos editoriais amplos e chamadas recorrentes para o WhatsApp, permitindo que as pessoas conheçam o instituto antes de iniciar uma conversa.",
    },
    outcome: {
      en: "The launched website gave Instituto Levité the institutional presence it previously lacked and established a direct route from discovery to appointment contact. No post-launch performance metrics were provided.",
      pt: "O site publicado deu ao Instituto Levité a presença institucional que ainda não possuía e estabeleceu um caminho direto entre descoberta e contato para agendamento. Não foram fornecidas métricas de desempenho pós-lançamento.",
    },
    learning: {
      en: "When research access is limited, hierarchy, transparency, and low-friction contact become hypotheses that should remain visible—and be validated after launch.",
      pt: "Quando o acesso à pesquisa é limitado, hierarquia, transparência e contato sem atrito se tornam hipóteses que precisam permanecer visíveis — e ser validadas após o lançamento.",
    },
    quote: {
      en: "Before asking someone to schedule, the experience had to make care feel credible and close.",
      pt: "Antes de pedir um agendamento, a experiência precisava fazer o cuidado parecer confiável e próximo.",
    },
    metric: "LIVE",
    metricLabel: {
      en: "launched institutional presence with a direct WhatsApp appointment path",
      pt: "presença institucional publicada com caminho direto para agendamento pelo WhatsApp",
    },
    theme: "gold",
    caseDetail: {
      discoveryTitle: {
        en: "A lean process shaped by the information available.",
        pt: "Um processo enxuto, construído a partir das informações disponíveis.",
      },
      discoveryCopy: {
        en: "Because direct user research was not possible, the work focused on organizing the institute's existing content, clarifying the page hierarchy, and turning business priorities into a concise institutional journey. The lack of research is treated as a project constraint, not as evidence.",
        pt: "Como não foi possível realizar pesquisa direta com usuários, o trabalho se concentrou em organizar o conteúdo existente do instituto, esclarecer a hierarquia das páginas e transformar prioridades do negócio em uma jornada institucional concisa. A ausência de pesquisa é apresentada como uma restrição do projeto, não como evidência.",
      },
      methods: [
        { en: "Business brief", pt: "Briefing do negócio" },
        { en: "Content architecture", pt: "Arquitetura de conteúdo" },
        { en: "Interface design", pt: "Design de interface" },
        { en: "Client handoff", pt: "Entrega ao cliente" },
      ],
      flowTitle: {
        en: "From first impression to a direct conversation.",
        pt: "Da primeira impressão a uma conversa direta.",
      },
      flowSteps: [
        { en: "Discover institute", pt: "Conhecer o instituto" },
        { en: "Build trust", pt: "Construir confiança" },
        { en: "Explore specialties", pt: "Explorar especialidades" },
        { en: "Schedule via WhatsApp", pt: "Agendar pelo WhatsApp" },
      ],
      systemTitle: {
        en: "A warm visual language for clinical credibility.",
        pt: "Uma linguagem visual acolhedora para transmitir credibilidade clínica.",
      },
      systemCopy: {
        en: "Gold accents, black typography, generous white space, and large-format photography create a balance between authority and warmth. Repeated card and call-to-action patterns keep the experience coherent across the site.",
        pt: "Acentos dourados, tipografia preta, espaços brancos generosos e fotografias em grande formato equilibram autoridade e acolhimento. Padrões recorrentes de cards e chamadas para ação mantêm a experiência coerente em todo o site.",
      },
      outcomeTitle: {
        en: "A launched digital presence where none existed.",
        pt: "Uma presença digital publicada onde antes não existia.",
      },
      note: {
        en: "Real client project, launched. Sara was responsible for the UI/UX design as an external contractor and did not accompany implementation. No user research or post-launch metrics are claimed. The images shown are real screens from the delivered website.",
        pt: "Projeto real para cliente, já publicado. Sara foi responsável pelo UI/UX design como profissional contratada externamente e não acompanhou a implementação. O case não atribui pesquisa com usuários nem métricas pós-lançamento. As imagens exibidas são telas reais do site entregue.",
      },
    },
  },
  {
    slug: "noma",
    index: "03",
    name: "NOMA",
    year: "2025",
    category: {
      en: "Care coordination, without the noise",
      pt: "Coordenação de cuidado, sem ruído",
    },
    title: {
      en: "A calmer way to coordinate everyday care.",
      pt: "Uma forma mais tranquila de coordenar o cuidado diário.",
    },
    summary: {
      en: "A healthcare service concept that connects patients, caregivers, and professionals around a simple, shared plan.",
      pt: "Um conceito de serviço em saúde que conecta pacientes, cuidadores e profissionais em torno de um plano simples e compartilhado.",
    },
    role: { en: "Product Designer", pt: "Product Designer" },
    duration: { en: "6 weeks", pt: "6 semanas" },
    tags: [
      { en: "Service Design", pt: "Service Design" },
      { en: "Accessibility", pt: "Acessibilidade" },
      { en: "Prototyping", pt: "Prototipação" },
    ],
    challenge: {
      en: "Care plans often become fragmented across appointments, notes, and family conversations. The product needed to feel dependable for people with very different levels of digital confidence.",
      pt: "Planos de cuidado costumam se fragmentar entre consultas, anotações e conversas familiares. O produto precisava ser confiável para pessoas com níveis muito diferentes de familiaridade digital.",
    },
    context: {
      en: "Noma is a speculative service-design case study focused on continuity, consent, and accessible communication.",
      pt: "Noma é um estudo de caso especulativo de service design focado em continuidade, consentimento e comunicação acessível.",
    },
    insight: {
      en: "Coordination breaks when responsibility is implied. Every task needed a visible owner, a simple status, and a shared understanding of what happens next.",
      pt: "A coordenação falha quando a responsabilidade fica implícita. Cada tarefa precisava de responsável visível, status simples e entendimento compartilhado do que acontece depois.",
    },
    decision: {
      en: "The design centers a living care plan with explicit ownership, gentle reminders, and language that works under stress.",
      pt: "O design é centrado em um plano de cuidado vivo, com responsabilidades explícitas, lembretes gentis e linguagem que funciona mesmo sob estresse.",
    },
    outcome: {
      en: "The resulting prototype prioritizes confidence over feature volume and includes accessible defaults from the first interaction.",
      pt: "O protótipo resultante prioriza confiança em vez de volume de funcionalidades e inclui padrões acessíveis desde a primeira interação.",
    },
    learning: {
      en: "Designing for care means designing for the moments when attention is already limited.",
      pt: "Projetar para o cuidado significa projetar para momentos em que a atenção já está limitada.",
    },
    quote: {
      en: "Good coordination makes responsibility visible and reassurance ambient.",
      pt: "Uma boa coordenação torna a responsabilidade visível e a tranquilidade presente.",
    },
    metric: "3/3",
    metricLabel: {
      en: "roles aligned around the same care plan",
      pt: "papéis alinhados em torno do mesmo plano de cuidado",
    },
    theme: "coral",
  },
];

export const ui = {
  en: {
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    available: "Available for work",
    eyebrow: "Product / UI UX Designer",
    location: "Natal, Brazil — 2026",
    heroA: "I design digital",
    heroB: "products that",
    heroAccent: "make sense.",
    heroSupport:
      "I connect user needs, business goals, and visual clarity to shape useful digital products.",
    scroll: "Selected work",
    selectedEyebrow: "01 — Selected work",
    selectedTitle: "Projects where clarity became the product.",
    clientWork: "Client project",
    demoNote: "Self-initiated concept",
    viewCase: "View case study",
    approachEyebrow: "02 — Approach",
    approachTitle: "Clarity is the outcome of good questions.",
    approachIntro:
      "My process moves from ambiguity to evidence, from evidence to structure, and from structure to an interface that feels inevitable.",
    approach: [
      ["Understand", "Frame the real decision before drawing the screen."],
      ["Structure", "Turn research into flows, priorities, and testable hypotheses."],
      ["Refine", "Build a coherent system, then remove everything that does not help."],
    ],
    capabilitiesEyebrow: "03 — Capabilities",
    capabilitiesTitle: "From early signal to shipped detail.",
    capabilities: [
      "UX Research",
      "Product Strategy",
      "User Flows",
      "Interface Design",
      "Design Systems",
      "Interactive Prototypes",
      "Usability Testing",
      "Design QA",
    ],
    aboutEyebrow: "04 — About",
    aboutTitle: "Brazilian designer, product-minded, detail-obsessed.",
    aboutCopy:
      "I design digital experiences that respect people's attention. My work balances useful research, product reasoning, and a visual language that makes complexity feel manageable.",
    footerEyebrow: "05 — Start a conversation",
    footerTitleA: "Let’s build",
    footerTitleB: "something good.",
    rights: "Sara Xavier © 2026",
    prototype: "Open prototype",
  },
  pt: {
    navWork: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    available: "Disponível para trabalho",
    eyebrow: "Product / UI UX Designer",
    location: "Natal, Brasil — 2026",
    heroA: "Eu projeto produtos",
    heroB: "digitais que",
    heroAccent: "fazem sentido.",
    heroSupport:
      "Conecto necessidades de pessoas, objetivos de negócio e clareza visual para criar produtos digitais úteis.",
    scroll: "Projetos selecionados",
    selectedEyebrow: "01 — Projetos selecionados",
    selectedTitle: "Projetos em que clareza virou produto.",
    clientWork: "Projeto para cliente",
    demoNote: "Conceito autoral",
    viewCase: "Ver estudo de caso",
    approachEyebrow: "02 — Abordagem",
    approachTitle: "Clareza é o resultado de boas perguntas.",
    approachIntro:
      "Meu processo vai da ambiguidade à evidência, da evidência à estrutura e da estrutura a uma interface que parece inevitável.",
    approach: [
      ["Entender", "Enquadrar a decisão real antes de desenhar a tela."],
      ["Estruturar", "Transformar pesquisa em fluxos, prioridades e hipóteses testáveis."],
      ["Refinar", "Construir um sistema coerente e remover tudo que não ajuda."],
    ],
    capabilitiesEyebrow: "03 — Competências",
    capabilitiesTitle: "Do primeiro sinal ao último detalhe.",
    capabilities: [
      "Pesquisa UX",
      "Estratégia de Produto",
      "Fluxos de Usuário",
      "Design de Interfaces",
      "Design Systems",
      "Protótipos Interativos",
      "Testes de Usabilidade",
      "Design QA",
    ],
    aboutEyebrow: "04 — Sobre",
    aboutTitle: "Designer brasileira, visão de produto e atenção aos detalhes.",
    aboutCopy:
      "Projeto experiências digitais que respeitam a atenção das pessoas. Meu trabalho equilibra pesquisa útil, raciocínio de produto e uma linguagem visual que torna a complexidade mais simples de administrar.",
    footerEyebrow: "05 — Comece uma conversa",
    footerTitleA: "Vamos construir",
    footerTitleB: "algo bom.",
    rights: "Sara Xavier © 2026",
    prototype: "Abrir protótipo",
  },
} as const;
