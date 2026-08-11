export type Locale = "en" | "pt";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  slug: "luma" | "orbit" | "noma";
  index: string;
  name: string;
  year: string;
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
  theme: "ink" | "blue" | "coral";
};

export const projects: Project[] = [
  {
    slug: "luma",
    index: "01",
    name: "LUMA",
    year: "2026",
    category: {
      en: "Personal finance, made legible",
      pt: "Finanças pessoais mais compreensíveis",
    },
    title: {
      en: "Turning financial anxiety into clear next steps.",
      pt: "Transformando ansiedade financeira em próximos passos claros.",
    },
    summary: {
      en: "A mobile finance concept that helps young professionals understand their money without spreadsheets, jargon, or judgment.",
      pt: "Um conceito mobile de finanças que ajuda jovens profissionais a entender o próprio dinheiro sem planilhas, jargões ou julgamentos.",
    },
    role: { en: "Product Designer", pt: "Product Designer" },
    duration: { en: "8 weeks", pt: "8 semanas" },
    tags: [
      { en: "UX Research", pt: "Pesquisa UX" },
      { en: "Product Strategy", pt: "Estratégia de Produto" },
      { en: "UI Design", pt: "UI Design" },
    ],
    challenge: {
      en: "Financial apps show plenty of data but rarely explain what deserves attention now. The challenge was to create confidence without oversimplifying the reality of someone's finances.",
      pt: "Aplicativos financeiros mostram muitos dados, mas raramente explicam o que merece atenção agora. O desafio era gerar confiança sem simplificar demais a realidade financeira de alguém.",
    },
    context: {
      en: "Luma is a self-initiated portfolio concept for people managing variable income, recurring bills, and short-term goals in the same place.",
      pt: "Luma é um conceito autoral de portfólio para pessoas que administram renda variável, contas recorrentes e objetivos de curto prazo no mesmo lugar.",
    },
    insight: {
      en: "People did not need another dashboard. They needed a calm answer to three questions: what changed, what is safe to spend, and what should happen next.",
      pt: "As pessoas não precisavam de outro dashboard. Precisavam de respostas tranquilas para três perguntas: o que mudou, quanto é seguro gastar e qual deve ser o próximo passo.",
    },
    decision: {
      en: "The experience was organized around a weekly pulse, with progressive detail and plain-language explanations available only when useful.",
      pt: "A experiência foi organizada em torno de um pulso semanal, com detalhes progressivos e explicações em linguagem simples apenas quando úteis.",
    },
    outcome: {
      en: "The concept reduced the primary journey from seven competing actions to one guided review, giving every screen a clear job.",
      pt: "O conceito reduziu a jornada principal de sete ações concorrentes para uma revisão guiada, dando a cada tela uma função clara.",
    },
    learning: {
      en: "Clarity is not the absence of information. It is the careful sequencing of it.",
      pt: "Clareza não é ausência de informação. É a organização cuidadosa da sequência em que ela aparece.",
    },
    quote: {
      en: "Make the next decision feel smaller than the problem.",
      pt: "Faça a próxima decisão parecer menor do que o problema.",
    },
    metric: "07→01",
    metricLabel: {
      en: "competing actions consolidated into one guided flow",
      pt: "ações concorrentes reunidas em um único fluxo guiado",
    },
    theme: "ink",
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
    selectedTitle: "A few problems worth solving well.",
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
    selectedTitle: "Alguns problemas que valem ser bem resolvidos.",
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
