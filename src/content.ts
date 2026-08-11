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
  slug: "chatadv" | "orbit" | "noma";
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
  theme: "ink" | "blue" | "green" | "coral";
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
    slug: "orbit",
    index: "02",
    name: "ORBIT",
    year: "2026",
    category: {
      en: "Operations intelligence platform",
      pt: "Plataforma de inteligência operacional",
    },
    title: {
      en: "From scattered signals to one operational picture.",
      pt: "De sinais dispersos para uma visão operacional única.",
    },
    summary: {
      en: "A B2B analytics concept that helps operations teams spot risk, align priorities, and act before small issues become expensive ones.",
      pt: "Um conceito B2B de analytics que ajuda equipes de operações a identificar riscos, alinhar prioridades e agir antes que pequenos problemas se tornem caros.",
    },
    role: { en: "Lead Product Designer", pt: "Lead Product Designer" },
    duration: { en: "10 weeks", pt: "10 semanas" },
    tags: [
      { en: "Complex Systems", pt: "Sistemas Complexos" },
      { en: "Data Visualization", pt: "Visualização de Dados" },
      { en: "Design System", pt: "Design System" },
    ],
    challenge: {
      en: "Operational teams were switching between reports, messages, and spreadsheets to understand the same incident. Information existed, but shared context did not.",
      pt: "Times de operações alternavam entre relatórios, mensagens e planilhas para entender o mesmo incidente. A informação existia, mas o contexto compartilhado não.",
    },
    context: {
      en: "Orbit is a demonstration project exploring how dense operational data can support faster, more accountable decisions.",
      pt: "Orbit é um projeto demonstrativo que explora como dados operacionais densos podem apoiar decisões mais rápidas e responsáveis.",
    },
    insight: {
      en: "Experts read anomalies before totals. A useful overview had to foreground change, ownership, and urgency instead of decorating aggregate numbers.",
      pt: "Especialistas percebem anomalias antes dos totais. Uma visão geral útil precisava priorizar mudança, responsabilidade e urgência, em vez de apenas decorar números agregados.",
    },
    decision: {
      en: "A layered workspace connects system health, exceptions, responsible teams, and the full event trail without forcing users into separate modules.",
      pt: "Um workspace em camadas conecta saúde do sistema, exceções, equipes responsáveis e todo o histórico de eventos sem forçar o uso de módulos separados.",
    },
    outcome: {
      en: "The prototype established a reusable information model and a compact component language for dashboards, incident views, and team handoffs.",
      pt: "O protótipo estabeleceu um modelo de informação reutilizável e uma linguagem compacta de componentes para dashboards, incidentes e passagens entre equipes.",
    },
    learning: {
      en: "In complex products, hierarchy is a form of functionality.",
      pt: "Em produtos complexos, hierarquia é uma forma de funcionalidade.",
    },
    quote: {
      en: "A dashboard should reveal a decision, not merely display a dataset.",
      pt: "Um dashboard deve revelar uma decisão, não apenas exibir um conjunto de dados.",
    },
    metric: "4→1",
    metricLabel: {
      en: "disconnected tools reframed as one decision surface",
      pt: "ferramentas desconectadas reorganizadas em uma superfície de decisão",
    },
    theme: "blue",
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
    clientWork: "Client project — pre-launch",
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
    clientWork: "Projeto para cliente — pré-lançamento",
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
