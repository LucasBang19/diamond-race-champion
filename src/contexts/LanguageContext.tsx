import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "es";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.badge": { pt: "Desafio 2026", es: "Desafío 2026" },
  "hero.title": { pt: "CORRIDA", es: "CARRERA" },
  "hero.sub1": { pt: "Cinco nomes. Cinco histórias aplaudidas.", es: "Cinco nombres. Cinco historias aplaudidas." },
  "hero.sub2.pre": { pt: "E o primeiro colocado… vai sentir o poder da chave de uma", es: "Y el primer lugar… sentirá el poder de las llaves de un" },
  "hero.sub2.post": { pt: "nas mãos.", es: "en sus manos." },
  "hero.sub3": { pt: "O Desafio já começou, e a única pergunta que fica é:", es: "El Desafío ya comenzó, y la única pregunta que queda es:" },
  "hero.sub3b": { pt: "Você vai assistir ou entrar para a história?", es: "¿Vas a mirar o vas a hacer historia?" },
  "hero.1st": { pt: "1º Lugar", es: "1er Lugar" },
  "hero.2nd": { pt: "2º Lugar", es: "2do Lugar" },
  "hero.3rd": { pt: "3º Lugar", es: "3er Lugar" },
  "hero.45": { pt: "4º e 5º", es: "4to y 5to" },
  "hero.resort": { pt: "Resort Pago", es: "Resort Pagado" },
  "cta.participate": { pt: "Quero Participar", es: "Quiero Participar" },

  // Block 2
  "b2.title.pre": { pt: "O Que É a", es: "¿Qué Es la" },
  "b2.title.post": { pt: "Corrida Diamond", es: "Carrera Diamond" },
  "b2.title.suffix": { pt: "?", es: "?" },
  "b2.p1": {
    pt: "A Corrida da Diamond é um desafio criado em 2026 em formato de ranking, por",
    es: "La Carrera Diamond es un desafío creado en 2026 en formato de ranking, por",
  },
  "b2.p1b": {
    pt: "para premiar membros do seu Ecossistema Diamond.",
    es: "para premiar miembros de su Ecosistema Diamond.",
  },
  "b2.p2": {
    pt: "Um lugar onde pessoas que executam, se cobram e se recusam a viver abaixo do próprio potencial, se encontram.",
    es: "Un lugar donde personas que ejecutan, se exigen y se rehúsan a vivir por debajo de su potencial, se encuentran.",
  },
  "b2.p2b": {
    pt: "O mais obcecado, vence o desafio e leva uma BMW pra casa.",
    es: "El más obsesionado, gana el desafío y se lleva un BMW a casa.",
  },
  "b2.prize.1": { pt: "1º", es: "1ro" },
  "b2.prize.2": { pt: "2º", es: "2do" },
  "b2.prize.3": { pt: "3º", es: "3ro" },
  "b2.prize.45": { pt: "4º e 5º", es: "4to y 5to" },
  "b2.prize.resort": { pt: "Resort Tudo Pago", es: "Resort Todo Pagado" },

  // Block 3
  "b3.title.pre": { pt: "Para Quem É e", es: "¿Para Quién Es y" },
  "b3.title.post": { pt: "Como Participar", es: "Cómo Participar" },
  "b3.p1": {
    pt: "A Corrida Diamond é para todo membro do ecossistema Diamond. Se você faz parte de algum dos seguintes produtos, você está apto a participar:",
    es: "La Carrera Diamond es para todo miembro del ecosistema Diamond. Si formas parte de alguno de los siguientes productos, estás apto para participar:",
  },
  "b3.p2": {
    pt: "Basta você se inscrever no desafio para receber todas as informações necessárias, como por exemplo: regulamento completo, datas, pontuações e como vencer o desafio.",
    es: "Solo debes inscribirte en el desafío para recibir toda la información necesaria, como por ejemplo: reglamento completo, fechas, puntuaciones y cómo ganar el desafío.",
  },
  "cta.member": { pt: "Sou Membro e Quero Participar", es: "Soy Miembro y Quiero Participar" },
  "b3.email.info": {
    pt: "Você receberá essas informações via e-mail, e também dentro do produto onde você é membro.",
    es: "Recibirás esta información por e-mail, y también dentro del producto donde eres miembro.",
  },
  "b3.support.info": {
    pt: "Se você for membro e por acaso não recebeu as informações, envie uma mensagem ao suporte oficial:",
    es: "Si eres miembro y no recibiste la información, envía un mensaje al soporte oficial:",
  },
  "b3.support.btn": { pt: "Suporte da Corrida Diamond", es: "Soporte de la Carrera Diamond" },

  // Block 3b
  "b3b.title.pre": { pt: "Não faço parte do Ecossistema Diamond, mas", es: "No soy parte del Ecosistema Diamond, pero" },
  "b3b.title.post": { pt: "quero participar", es: "quiero participar" },
  "b3b.p1": {
    pt: "Se você não é aluno de nenhum treinamento: Comunidade S.M.A / Mentoria Diamond / Consultoria Stratify, e/ou não faz parte do Fox Leads, você ainda não está apto a participar do desafio.",
    es: "Si no eres alumno de ningún entrenamiento: Comunidad S.M.A / Mentoría Diamond / Consultoría Stratify, y/o no formas parte del Fox Leads, aún no estás apto para participar del desafío.",
  },
  "b3b.p2.pre": { pt: "Você precisa ser membro ativo no nosso ecossistema.", es: "Necesitas ser miembro activo en nuestro ecosistema." },
  "b3b.p2.post": {
    pt: "Entre em contato com um especialista e entenda em qual produto você está apto a entrar, para aí sim, ativar a sua entrada na corrida.",
    es: "Ponte en contacto con un especialista y entiende en qué producto puedes entrar, para así activar tu entrada en la carrera.",
  },
  "b3b.cta": { pt: "Quero Entrar na Corrida Diamond", es: "Quiero Entrar en la Carrera Diamond" },

  // Block 4
  "b4.title.pre": { pt: "Quem Está Por Trás da", es: "Quién Está Detrás de la" },
  "b4.title.post": { pt: "Corrida Diamond", es: "Carrera Diamond" },
  "b4.p1": {
    pt: "ex-maquiadora.",
    es: "ex-maquilladora.",
  },
  "b4.p1b": { pt: "ex-empresário.", es: "ex-empresario." },
  "b4.p2": {
    pt: "Eles descobriram o poder das vendas digitais e, em menos de um ano, criaram uma máquina de vendas que os tornou milionários.",
    es: "Descubrieron el poder de las ventas digitales y, en menos de un año, crearon una máquina de ventas que los hizo millonarios.",
  },
  "b4.p3.pre": { pt: "Hoje, lideram a", es: "Hoy, lideran" },
  "b4.p3.mid": {
    pt: "empresa que já faturou mais de",
    es: "empresa que ya facturó más de",
  },
  "b4.p3.post": {
    pt: "através do seu ecossistema: comunidade, mentoria, consultoria e SaaS, onde já impactaram a vida de mais de",
    es: "a través de su ecosistema: comunidad, mentoría, consultoría y SaaS, donde ya impactaron la vida de más de",
  },
  "b4.p3.end": {
    pt: "e ensina pessoas comuns a conquistarem resultados extraordinários através das vendas automáticas.",
    es: "y enseña a personas comunes a lograr resultados extraordinarios a través de las ventas automáticas.",
  },

  // Block 5
  "b5.title.pre": { pt: "Informações", es: "Información" },
  "b5.title.post": { pt: "Oficiais", es: "Oficial" },
  "b5.title.end": { pt: "da Corrida", es: "de la Carrera" },
  "b5.meta.title": { pt: "Meta Clara", es: "Meta Clara" },
  "b5.meta.desc": { pt: "460 novos alunos na comunidade SMA (via indicação)", es: "460 nuevos alumnos en la comunidad SMA (por referido)" },
  "b5.rule.title": { pt: "Regra Clara", es: "Regla Clara" },
  "b5.rule.desc": { pt: "Com 460 novos membros, quem mais pontua, ganha o desafio", es: "Con 460 nuevos miembros, quien más puntúa, gana el desafío" },
  "b5.regulation": { pt: "A corrida tem um regulamento oficial que pode ser acessado após a inscrição.", es: "La carrera tiene un reglamento oficial que se puede acceder después de la inscripción." },

  // FAQ
  "faq.title": { pt: "Dúvidas Frequentes", es: "Preguntas Frecuentes" },
  "faq.1.q": { pt: "O que é a Corrida Diamond?", es: "¿Qué es la Carrera Diamond?" },
  "faq.1.a": { pt: "É um desafio em formato de ranking. Você entra no jogo, executa ações dentro do ecossistema, soma pontos e sobe no ranking. No final, o primeiro colocado leva a BMW, e o segundo, terceiro, quarto e quinto lugar levam prêmios exclusivos.", es: "Es un desafío en formato de ranking. Entras en el juego, ejecutas acciones dentro del ecosistema, sumas puntos y subes en el ranking. Al final, el primer lugar se lleva el BMW, y el segundo, tercero, cuarto y quinto lugar llevan premios exclusivos." },
  "faq.2.q": { pt: "Isso é sorteio?", es: "¿Es un sorteo?" },
  "faq.2.a": { pt: "Não. Não é sorteio e não depende de sorte. É ranking + execução.", es: "No. No es sorteo y no depende de la suerte. Es ranking + ejecución." },
  "faq.3.q": { pt: "Quem pode participar?", es: "¿Quién puede participar?" },
  "faq.3.a": { pt: "Membros ativos da Diamond: FOX Leads, Comunidade SMA, Mentoria ou Consultoria.", es: "Miembros activos de Diamond: FOX Leads, Comunidad SMA, Mentoría o Consultoría." },
  "faq.4.q": { pt: "Como eu entro na Corrida?", es: "¿Cómo entro en la Carrera?" },
  "faq.4.a": { pt: "Se você não está dentro de nenhum produto Diamond, precisa se tornar um membro para automaticamente ativar sua entrada no desafio. Entre em contato com um especialista Diamond.", es: "Si no estás dentro de ningún producto Diamond, necesitas convertirte en miembro para activar automáticamente tu entrada en el desafío. Contacta a un especialista Diamond." },
  "faq.5.q": { pt: "Eu preciso ser grande / ter audiência pra competir?", es: "¿Necesito ser grande / tener audiencia para competir?" },
  "faq.5.a": { pt: "Não. Aqui pesa a execução + constância nas estratégias digitais que ensinamos. Ganha quem mantém o ritmo e sobe no ranking.", es: "No. Aquí pesa la ejecución + constancia en las estrategias digitales que enseñamos. Gana quien mantiene el ritmo y sube en el ranking." },
  "faq.6.q": { pt: "Como eu ganho pontos?", es: "¿Cómo gano puntos?" },
  "faq.6.a": { pt: "Você tem acesso ao regulamento oficial onde há todas as regras do desafio, principalmente como ganhar pontos e subir no ranking.", es: "Tienes acceso al reglamento oficial donde están todas las reglas del desafío, principalmente cómo ganar puntos y subir en el ranking." },
  "faq.7.q": { pt: "Quando começa a Corrida?", es: "¿Cuándo empieza la Carrera?" },
  "faq.7.a": { pt: "Final de fevereiro. E pode terminar a qualquer momento — quando a meta for alcançada.", es: "Final de febrero. Y puede terminar en cualquier momento — cuando se alcance la meta." },
  "faq.8.q": { pt: "Como vou acompanhar o ranking e minha pontuação?", es: "¿Cómo sigo el ranking y mi puntuación?" },
  "faq.8.a": { pt: "Após ativar sua participação, você recebe acesso a todas as informações, e a página atualizada em tempo real com as informações diárias do desafio.", es: "Después de activar tu participación, recibes acceso a toda la información, y a la página actualizada en tiempo real con la información diaria del desafío." },
  "faq.9.q": { pt: "A BMW é garantida?", es: "¿El BMW está garantizado?" },
  "faq.9.a": { pt: "Sim, desde que a meta (460 novos alunos) seja batida.", es: "Sí, siempre que se cumpla la meta (460 nuevos alumnos)." },
  "faq.10.q": { pt: "Vai ter oportunidades extras para ganhar mais pontos ao longo do ano?", es: "¿Habrá oportunidades extras para ganar más puntos durante el año?" },
  "faq.10.a": { pt: "Sim. Podem existir turbos e ações surpresa em janelas específicas, anunciadas oficialmente.", es: "Sí. Pueden existir turbos y acciones sorpresa en ventanas específicas, anunciadas oficialmente." },
  "faq.11.q": { pt: "O que acontece se eu entrar e não fizer nada?", es: "¿Qué pasa si entro y no hago nada?" },
  "faq.11.a": { pt: "Você fica pra trás. Simples. Quem não executa não sobe no ranking.", es: "Te quedas atrás. Simple. Quien no ejecuta no sube en el ranking." },
  "faq.12.q": { pt: "Posso entrar só pra 'ver como é'?", es: "¿Puedo entrar solo para 'ver cómo es'?" },
  "faq.12.a": { pt: "Pode, mas você vai perder tempo. Essa corrida é pra quem quer resultado de verdade.", es: "Puedes, pero vas a perder tiempo. Esta carrera es para quien quiere resultados de verdad." },
  "faq.13.q": { pt: "O que eu faço agora?", es: "¿Qué hago ahora?" },
  "faq.13.a": { pt: "Se você quer participar, entre em contato com um especialista para ativar sua participação. Se você já é membro, apenas se cadastre para receber as informações oficiais.", es: "Si quieres participar, contacta a un especialista para activar tu participación. Si ya eres miembro, solo regístrate para recibir la información oficial." },

  // Modal
  "modal.title": { pt: "Quero Participar", es: "Quiero Participar" },
  "modal.member.q": { pt: "É membro de algum dos nossos produtos?", es: "¿Eres miembro de alguno de nuestros productos?" },
  "modal.email.label": { pt: "Seu e-mail", es: "Tu e-mail" },
  "modal.email.placeholder": { pt: "Preencha com o mesmo email cadastrado na compra", es: "Ingresa el mismo email registrado en la compra" },
  "modal.submit": { pt: "Confirmar Inscrição", es: "Confirmar Inscripción" },
  "modal.forgot": { pt: "Se não lembra seu email ou não foi encontrado o seu cadastro mesmo sendo membro de algum produto:", es: "Si no recuerdas tu email o no se encontró tu registro siendo miembro de algún producto:" },
  "modal.support": { pt: "Falar com o Suporte", es: "Hablar con Soporte" },
  "modal.notmember": { pt: "Não é membro e quer participar?", es: "¿No eres miembro y quieres participar?" },
  "modal.specialist": { pt: "Falar com um Especialista", es: "Hablar con un Especialista" },
  "modal.success.title": { pt: "Inscrição realizada!", es: "¡Inscripción realizada!" },
  "modal.success.msg": { pt: "Verifique seu e-mail para receber todas as informações da Corrida Diamond.", es: "Revisa tu e-mail para recibir toda la información de la Carrera Diamond." },

  // Footer
  "footer.sub": { pt: "Um desafio do Ecossistema Diamond Global", es: "Un desafío del Ecosistema Diamond Global" },
  "footer.copy": { pt: "© 2026 Diamond Global. Todos os direitos reservados.", es: "© 2026 Diamond Global. Todos los derechos reservados." },
  "footer.disclaimer": { pt: "Este site não é afiliado, associado, autorizado, endossado ou de qualquer forma conectado oficialmente à BMW Group.", es: "Este sitio no está afiliado, asociado, autorizado, respaldado ni conectado de ninguna manera oficialmente con BMW Group." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
