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
  "b5.meta.desc": { pt: "460 novos alunos na comunidade SMA (via afiliação)", es: "460 nuevos alumnos en la comunidad SMA (por afiliación)" },
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
  "faq.9.a": { pt: "Sim, desde que a meta de 100% seja batida.", es: "Sí, siempre que se cumpla el 100% de la meta." },
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
  "modal.found.msg1": { pt: "encontramos seu cadastro no", es: "encontramos tu registro en" },
  "modal.found.msg2": { pt: "através do Email", es: "a través del Email" },
  "modal.notfound.title": { pt: "Cadastro não encontrado", es: "Registro no encontrado" },
  "modal.notfound.msg": { pt: "Não encontramos seu e-mail em nossa base. Entre em contato com o suporte para verificar sua inscrição.", es: "No encontramos tu e-mail en nuestra base. Contacta al soporte para verificar tu inscripción." },

  // Footer
  "footer.sub": { pt: "Um desafio do Ecossistema Diamond Global", es: "Un desafío del Ecosistema Diamond Global" },
  "footer.copy": { pt: "© 2026 Diamond Global. Todos os direitos reservados.", es: "© 2026 Diamond Global. Todos los derechos reservados." },
  "footer.disclaimer": { pt: "Este site não é afiliado, associado, autorizado, endossado ou de qualquer forma conectado oficialmente à BMW Group.", es: "Este sitio no está afiliado, asociado, autorizado, respaldado ni conectado de ninguna manera oficialmente con BMW Group." },

  // Interna - Hero
  "int.hero.badge": { pt: "Informações do Desafio", es: "Información del Desafío" },
  "int.hero.title": { pt: "CORRIDA", es: "CARRERA" },
  "int.hero.sub1": { pt: "Cinco nomes. Cinco histórias aplaudidas.", es: "Cinco nombres. Cinco historias aplaudidas." },
  "int.hero.sub2": { pt: "E o primeiro colocado… vai sentir o poder da chave de uma BMW nas mãos.", es: "Y el primer lugar… sentirá el poder de las llaves de un BMW en sus manos." },
  "int.hero.prize": { pt: "Qual prêmio será seu?", es: "¿Cuál premio será tuyo?" },
  "int.hero.support": { pt: "DÚVIDAS SOBRE O DESAFIO?", es: "¿DUDAS SOBRE EL DESAFÍO?" },
  "int.hero.support.btn": { pt: "CLIQUE AQUI PARA CONVERSAR COM O SUPORTE OFICIAL", es: "CLIC AQUÍ PARA HABLAR CON EL SOPORTE OFICIAL" },

  // Interna - Bloco 2 Termômetro
  "int.b2.title": { pt: "TERMÔMETRO DA META PRINCIPAL", es: "TERMÓMETRO DE LA META PRINCIPAL" },
  "int.b2.goal": { pt: "460 NOVOS ALUNOS", es: "460 NUEVOS ALUMNOS" },
  "int.b2.desc": { pt: "Como previsto no regulamento oficial da corrida, o desafio só finaliza e os prêmios são entregues aos membros que mais pontuarem, quando a meta de 460 novos alunos vindos de indicação e/ou afiliação for alcançada.", es: "Como previsto en el reglamento oficial de la carrera, el desafío solo finaliza y los premios se entregan a los miembros que más puntúen, cuando la meta de 460 nuevos alumnos por indicación y/o afiliación sea alcanzada." },
  "int.b2.regulation": { pt: "ACESSE O REGULAMENTO OFICIAL CLICANDO AQUI", es: "ACCEDA AL REGLAMENTO OFICIAL HACIENDO CLIC AQUÍ" },

  // Interna - Bloco 3 Ranking
  "int.b3.title": { pt: "RANKING OFICIAL", es: "RANKING OFICIAL" },
  "int.b3.desc": { pt: "Ranking mensal e semanal em tempo real.", es: "Ranking mensual y semanal en tiempo real." },
  "int.b3.sub": { pt: "Quem mais pontua, mais sobe no ranking.", es: "Quien más puntúa, más sube en el ranking." },
  "int.b3.soon": { pt: "Em breve disponível aqui", es: "Pronto disponible aquí" },

  // Interna - Bloco 4 Pontuação
  "int.b4.title": { pt: "PONTUAÇÃO", es: "PUNTUACIÓN" },
  "int.b4.video": { pt: "Vídeo explicativo em breve", es: "Video explicativo próximamente" },
  "int.b4.layers": { pt: "CAMADAS DE PONTUAÇÃO (MAIS PONTUAM):", es: "CAPAS DE PUNTUACIÓN (MÁS PUNTÚAN):" },

  // Camada 1
  "int.c1.title": { pt: "💎 CAMADA 1 – VENDA DA COMUNIDADE SMA (AFILIADO)", es: "💎 CAPA 1 – VENTA DE LA COMUNIDAD SMA (AFILIADO)" },
  "int.c1.desc": { pt: "Você ganha pontos por venda como afiliado da Comunidade Sociedade dos Milionários Anônimos", es: "Ganas puntos por venta como afiliado de la Comunidad Sociedad de los Millonarios Anónimos" },
  "int.c1.obs": { pt: "Obs: Como Afiliado (Venda Direta) — Você usa seu link de afiliado e realiza a venda diretamente para o produto de entrada.", es: "Obs: Como Afiliado (Venta Directa) — Usas tu enlace de afiliado y realizas la venta directamente para el producto de entrada." },
  "int.c1.sma": { pt: "SOU ALUNO COMUNIDADE SMA", es: "SOY ALUMNO COMUNIDAD SMA" },
  "int.c1.diamond": { pt: "SOU ALUNO DIAMOND", es: "SOY ALUMNO DIAMOND" },
  "int.c1.stratify": { pt: "SOU ALUNO STRATIFY", es: "SOY ALUMNO STRATIFY" },
  "int.c1.important": { pt: "IMPORTANTE: Você ganha os pontos, e quem comprou por você também", es: "IMPORTANTE: Ganas los puntos, y quien compró por ti también" },
  "int.c1.proof.title": { pt: "🚩 Como comprovar venda?", es: "🚩 ¿Cómo comprobar venta?" },
  "int.c1.proof.desc": { pt: "Neste caso, você não precisa enviar nenhuma prova, pois no nosso sistema já consta automaticamente suas vendas como afiliado e os pontos são computados no ranking automaticamente.", es: "En este caso, no necesitas enviar ninguna prueba, pues en nuestro sistema ya constan automáticamente tus ventas como afiliado y los puntos se computan en el ranking automáticamente." },
  "int.c1.affiliate": { pt: "IMPORTANTE: Para se afiliar a COMUNIDADE S.M.A, clique aqui.", es: "IMPORTANTE: Para afiliarte a la COMUNIDAD S.M.A, haz clic aquí." },
  "int.c1.affiliate.bonus": { pt: "Aqui além de você ganhar pontos pela venda direta, também ganha pontos por ser uma venda como afiliado (pontos abaixo) e 10% de comissão do valor do produto.", es: "Aquí además de ganar puntos por la venta directa, también ganas puntos por ser una venta como afiliado (puntos abajo) y 10% de comisión del valor del producto." },

  // Camada 2
  "int.c2.title": { pt: "🔥 CAMADA 2 – VENDA COMO AFILIADO", es: "🔥 CAPA 2 – VENTA COMO AFILIADO" },
  "int.c2.desc": { pt: "Você também pode vender como afiliado os produtos prontos que disponibilizamos nos treinamentos (e também a comunidade S.M.A, como consta acima) e pontuar por isso.", es: "También puedes vender como afiliado los productos listos que proporcionamos en los entrenamientos (y también la comunidad S.M.A, como consta arriba) y puntuar por eso." },
  "int.c2.sub": { pt: "Venda como afiliado (produtos prontos)", es: "Venta como afiliado (productos listos)" },
  "int.c2.sub.desc": { pt: "Esses produtos são disponibilizados na comunidade e mentoria. São ofertas onde disponibilizamos tudo pronto: VSL, criativos e produto através de afiliação.", es: "Estos productos se proporcionan en la comunidad y mentoría. Son ofertas donde proporcionamos todo listo: VSL, creativos y producto a través de afiliación." },
  "int.c2.pts.label": { pt: "Pontuação por venda aprovada (depende do nível do jogador):", es: "Puntuación por venta aprobada (depende del nivel del jugador):" },
  "int.c2.rules.title": { pt: "📌 Regras:", es: "📌 Reglas:" },
  "int.c2.rule1": { pt: "Vale o nível ativo no momento da venda", es: "Vale el nivel activo en el momento de la venta" },
  "int.c2.rule2": { pt: "Pagamento aprovado e liquidado", es: "Pago aprobado y liquidado" },
  "int.c2.rule3": { pt: "Reembolso/chargeback remove pontos", es: "Reembolso/chargeback remueve puntos" },
  "int.c2.proof.title": { pt: "🚩 Como comprovar venda como afiliado?", es: "🚩 ¿Cómo comprobar venta como afiliado?" },
  "int.c2.proof.desc": { pt: "Neste caso, você não precisa enviar nenhuma prova, pois no nosso sistema já consta automaticamente suas vendas como afiliado e os pontos são computados no ranking automaticamente.", es: "En este caso, no necesitas enviar ninguna prueba, pues en nuestro sistema ya constan automáticamente tus ventas como afiliado y los puntos se computan en el ranking automáticamente." },
  "int.c2.bonus.title": { pt: "🔥 BÔNUS EXTRA POR FATURAMENTO COMO AFILIADO (CUMULATIVO / MENSAL)", es: "🔥 BONO EXTRA POR FACTURACIÓN COMO AFILIADO (CUMULATIVO / MENSUAL)" },
  "int.c2.bonus.desc": { pt: "Metas mensais por faturamento aprovado e liquidado:", es: "Metas mensuales por facturación aprobada y liquidada:" },
  "int.c2.bonus.cumulative": { pt: "📌 Cumulativo: bateu 100k no mês, soma todos os bônus (total +2.850 pontos).", es: "📌 Cumulativo: alcanzaste 100k en el mes, suma todos los bonos (total +2.850 puntos)." },
  "int.c2.bonus.refund": { pt: "📌 Reembolso pode recalcular a meta do mês.", es: "📌 Reembolso puede recalcular la meta del mes." },
  "int.c2.bonus.proof.title": { pt: "🚩 Como comprovar o faturamento?", es: "🚩 ¿Cómo comprobar la facturación?" },
  "int.c2.bonus.proof.desc": { pt: "Deixar um depoimento com comprovação do faturamento na plataforma (foto ou vídeo) na aba oficial de depoimentos no site oficial.", es: "Dejar un testimonio con comprobación de la facturación en la plataforma (foto o video) en la pestaña oficial de testimonios en el sitio oficial." },

  // Camada 3
  "int.c3.title": { pt: "🔄 CAMADA 3 – PERMANÊNCIA, ATIVAÇÃO E AVANÇO", es: "🔄 CAPA 3 – PERMANENCIA, ACTIVACIÓN Y AVANCE" },
  "int.c3.desc": { pt: "Você ganha pontos por estar ativo e em dia nos produtos:", es: "Ganas puntos por estar activo y al día en los productos:" },
  "int.c3.products": { pt: "Comunidade / Mentoria Diamond / Consultoria Stratify / FoxLeads / Oráculo", es: "Comunidad / Mentoría Diamond / Consultoría Stratify / FoxLeads / Oráculo" },
  "int.c3.more": { pt: "Quanto mais tempo ativo, mais pontos você acumula mês a mês.", es: "Cuanto más tiempo activo, más puntos acumulas mes a mes." },
  "int.c3.col.product": { pt: "Produto", es: "Producto" },
  "int.c3.col.monthly": { pt: "Pontos/Mês", es: "Puntos/Mes" },
  "int.c3.col.semester": { pt: "Bônus Semestral", es: "Bono Semestral" },
  "int.c3.exit.warning": { pt: "Obs: Se você sair antes, os pontos são anulados.", es: "Obs: Si sales antes, los puntos se anulan." },
  "int.c3.exit.example": { pt: "Exemplo: sou membro do fox leads no plano semestral, e saí no quinto mês, os pontos anteriores da permanência são anulados.", es: "Ejemplo: soy miembro del fox leads en el plan semestral, y salí en el quinto mes, los puntos anteriores de la permanencia se anulan." },
  "int.c3.proof.title": { pt: "🚩 Como provar assinatura ativa?", es: "🚩 ¿Cómo probar suscripción activa?" },
  "int.c3.proof.desc": { pt: "Neste caso, você não precisa enviar nenhuma prova, pois no nosso sistema já consta automaticamente sua assinatura ativa e os pontos são computados no ranking automaticamente.", es: "En este caso, no necesitas enviar ninguna prueba, pues en nuestro sistema ya consta automáticamente tu suscripción activa y los puntos se computan en el ranking automáticamente." },
  "int.c3.advance.title": { pt: "AVANÇO NO ECOSSISTEMA", es: "AVANCE EN EL ECOSISTEMA" },
  "int.c3.advance.desc": { pt: "Também pontua ao avançar no ecossistema (ex: Comunidade → Diamond)", es: "También puntúa al avanzar en el ecosistema (ej: Comunidad → Diamond)" },
  "int.c3.advance.note": { pt: "A pontuação por avanço no ecossistema só é válida se o participante permanecer ativo por no mínimo 30 dias no novo produto.", es: "La puntuación por avance en el ecosistema solo es válida si el participante permanece activo por un mínimo de 30 días en el nuevo producto." },
  "int.c3.advance.proof": { pt: "🚩 Como comprovar avanço? Neste caso, você vai avançar com um especialista da nossa equipe.", es: "🚩 ¿Cómo comprobar avance? En este caso, avanzarás con un especialista de nuestro equipo." },
  "int.c3.advance.cta": { pt: "Clique aqui para falar com nosso time", es: "Haz clic aquí para hablar con nuestro equipo" },
  "int.c3.tool.title": { pt: "Ativação de Ferramenta (uma vez)", es: "Activación de Herramienta (una vez)" },
  "int.c3.tool.proof": { pt: "🚩 Como comprovar ativação da ferramenta? Neste caso, você não precisa enviar nenhuma prova, pois no nosso sistema já consta automaticamente sua ativação da ferramenta e os pontos são computados no ranking automaticamente.", es: "🚩 ¿Cómo comprobar activación de la herramienta? En este caso, no necesitas enviar ninguna prueba, pues en nuestro sistema ya consta automáticamente tu activación de la herramienta y los puntos se computan en el ranking automáticamente." },
  "int.c3.email.warning": { pt: "IMPORTANTE: Você precisa assinar com o mesmo email que tem cadastrado aqui no desafio (confira seu e-mail no ranking) - Só pontua pelo mesmo e-mail", es: "IMPORTANTE: Necesitas firmar con el mismo email que tienes registrado aquí en el desafío (verifica tu e-mail en el ranking) - Solo puntúa por el mismo e-mail" },
  "int.c3.email.change": { pt: "(se você já se inscreveu com outro e-mail, entre em contato com o suporte para trocar e receber os pontos)", es: "(si ya te inscribiste con otro e-mail, contacta al soporte para cambiar y recibir los puntos)" },

  // Camada 4
  "int.c4.title": { pt: "🚀 CAMADA 4 – VISIBILIDADE E PROVA SOCIAL", es: "🚀 CAPA 4 – VISIBILIDAD Y PRUEBA SOCIAL" },
  "int.c4.desc": { pt: "Você fortalece o legado e ainda pontua", es: "Fortaleces el legado y además puntúas" },
  "int.c4.storie": { pt: "STORIE (máx. 1 por semana)", es: "STORIE (máx. 1 por semana)" },
  "int.c4.depo": { pt: "DEPOIMENTO (máx. 1 por mês)", es: "TESTIMONIO (máx. 1 por mes)" },
  "int.c4.text": { pt: "Texto", es: "Texto" },
  "int.c4.video": { pt: "Vídeo (mín. 1 min)", es: "Video (mín. 1 min)" },
  "int.c4.proof.title": { pt: "🚩 Como comprovar que enviei depoimento ou postei stories?", es: "🚩 ¿Cómo comprobar que envié testimonio o publiqué stories?" },
  "int.c4.storie.rules": { pt: "Sobre o storie: Pode ser foto ou vídeo falando do desafio, falando da comunidade e/ou de resultados. Sempre perfil aberto no dia da postagem. Sempre marcar os perfis oficiais @jessicacoutto_ @franciscogalarreta. O ponto do storie só vale quando tiver uma curtida do Francisco ou Jessica. Não é necessário enviar nenhuma outra comprovação.", es: "Sobre el storie: Puede ser foto o video hablando del desafío, de la comunidad y/o de resultados. Siempre perfil abierto en el día de la publicación. Siempre marcar los perfiles oficiales @jessicacoutto_ @franciscogalarreta. El punto del storie solo vale cuando tenga un like de Francisco o Jessica. No es necesario enviar ninguna otra comprobación." },
  "int.c4.depo.rules": { pt: "Sobre o depoimento: Enviar (foto ou vídeo) na aba oficial de depoimentos no site oficial.", es: "Sobre el testimonio: Enviar (foto o video) en la pestaña oficial de testimonios en el sitio oficial." },

  // Bloco 5 - Bônus Turbos
  "int.b5.title": { pt: "⚡ BÔNUS: TURBOS E AÇÕES SURPRESA", es: "⚡ BONO: TURBOS Y ACCIONES SORPRESA" },
  "int.b5.desc": { pt: "Ao longo do ano, a organização pode lançar ações limitadas no tempo como:", es: "A lo largo del año, la organización puede lanzar acciones limitadas en el tiempo como:" },
  "int.b5.ex1": { pt: "Semana 2x pontos em afiliado", es: "Semana 2x puntos en afiliado" },
  "int.b5.ex2": { pt: "Bônus relâmpago para VIP", es: "Bono relámpago para VIP" },
  "int.b5.ex3": { pt: "Missões mensais com pontos extras", es: "Misiones mensuales con puntos extras" },
  "int.b5.ex4": { pt: "Ranking do mês valendo bônus", es: "Ranking del mes con bono" },
  "int.b5.ex5": { pt: "Campanhas com patrocinadores", es: "Campañas con patrocinadores" },
  "int.b5.rules": { pt: "📌 Regras: só vale se for comunicado oficialmente, tem prazo definido, a organização pode limitar por pessoa/semana para manter equilíbrio.", es: "📌 Reglas: solo vale si se comunica oficialmente, tiene plazo definido, la organización puede limitar por persona/semana para mantener equilibrio." },
  "int.b5.ambassador.title": { pt: "PONTOS PARA EMBAIXADORES (STATUS ESPECIAL)", es: "PUNTOS PARA EMBAJADORES (ESTATUS ESPECIAL)" },
  "int.b5.ambassador.desc": { pt: "O status de Embaixador reconhece: alinhamento, postura, contribuição, liderança", es: "El estatus de Embajador reconoce: alineamiento, postura, contribución, liderazgo" },
  "int.b5.ambassador.fox": { pt: "Embaixador FoxLeads", es: "Embajador FoxLeads" },
  "int.b5.ambassador.fox.desc": { pt: "Usuários ativos do FoxLeads, selecionados pela equipe.", es: "Usuarios activos del FoxLeads, seleccionados por el equipo." },
  "int.b5.ambassador.how": { pt: "Como funciona: Multiplicador 1.2x apenas em ações de prova/visibilidade ligadas ao FoxLeads (Storie marcando fox leads + 12 pontos) e ações educativas sobre FoxLeads (mostrar a ferramenta em call, max 1x aos 15 dias).", es: "Cómo funciona: Multiplicador 1.2x solo en acciones de prueba/visibilidad ligadas al FoxLeads (Storie marcando fox leads + 12 puntos) y acciones educativas sobre FoxLeads (mostrar la herramienta en call, max 1x cada 15 días)." },
  "int.b5.ambassador.proof": { pt: "🚩 Como comprovar? Enviar comprovação no seu grupo oficial de embaixador no WhatsApp.", es: "🚩 ¿Cómo comprobar? Enviar comprobación en tu grupo oficial de embajador en WhatsApp." },
  "int.b5.ambassador.sales": { pt: "Venda como afiliado: +48 | Indicação Comunidade: +90 | Indicação Diamond: +140 | Indicação Consultoria: +250", es: "Venta como afiliado: +48 | Indicación Comunidad: +90 | Indicación Diamond: +140 | Indicación Consultoría: +250" },
  "int.b5.ambassador.important": { pt: "IMPORTANTE: Neste caso, a pontuação só é válida com compra da indicação. A pessoa indicada precisa estar ciente do produto e avisada que será contactada pela nossa equipe.", es: "IMPORTANTE: En este caso, la puntuación solo es válida con compra de la indicación. La persona indicada necesita estar al tanto del producto y avisada que será contactada por nuestro equipo." },

  // Bloco 6 - Regras Oficiais
  "int.b6.title": { pt: "REGRAS OFICIAIS", es: "REGLAS OFICIALES" },
  "int.b6.intro": { pt: "Todas essas regras também constam no regulamento oficial do desafio.", es: "Todas estas reglas también constan en el reglamento oficial del desafío." },
  "int.b6.regulation": { pt: "Você pode acessar clicando aqui.", es: "Puedes acceder haciendo clic aquí." },
  "int.b6.period.title": { pt: "PERÍODO OFICIAL", es: "PERÍODO OFICIAL" },
  "int.b6.period.start": { pt: "Início: 19 de fevereiro de 2026", es: "Inicio: 19 de febrero de 2026" },
  "int.b6.period.end": { pt: "Término: Sem data definida. Apenas quando atingir 100% da meta (acompanhe o termômetro da meta em tempo real nesta página)", es: "Término: Sin fecha definida. Solo cuando se alcance el 100% de la meta (acompaña el termómetro de la meta en tiempo real en esta página)" },
  "int.b6.bmw.title": { pt: "CONDIÇÃO PARA A ENTREGA DA BMW", es: "CONDICIÓN PARA LA ENTREGA DEL BMW" },
  "int.b6.bmw.desc": { pt: "A BMW e demais prêmios só serão entregues quando a meta de 100% for alcançada.", es: "El BMW y demás premios solo se entregarán cuando se alcance el 100% de la meta." },
  "int.b6.who.title": { pt: "QUEM PODE PARTICIPAR", es: "QUIÉN PUEDE PARTICIPAR" },
  "int.b6.who.desc": { pt: "Apenas membros ativos do ecossistema Diamond:", es: "Solo miembros activos del ecosistema Diamond:" },
  "int.b6.who.note": { pt: "Não é permitido participar \"de fora\" ou apenas observar. É necessário se inscrever oficialmente no desafio.", es: "No está permitido participar \"de afuera\" o solo observar. Es necesario inscribirse oficialmente en el desafío." },
  "int.b6.who.cta": { pt: "Inscreva-se clicando aqui", es: "Inscríbete haciendo clic aquí" },
  "int.b6.ranking.title": { pt: "RANKING E CONTROLE", es: "RANKING Y CONTROL" },
  "int.b6.ranking.r1": { pt: "A pontuação será atualizada em tempo real, com acesso liberado aos participantes através desta página.", es: "La puntuación se actualizará en tiempo real, con acceso liberado a los participantes a través de esta página." },
  "int.b6.ranking.r2": { pt: "Apenas ações rastreáveis e aprovadas entram no ranking.", es: "Solo acciones rastreables y aprobadas entran en el ranking." },
  "int.b6.ranking.r3": { pt: "Pagamentos reembolsados ou cancelados perdem pontuação.", es: "Pagos reembolsados o cancelados pierden puntuación." },
  "int.b6.integrity.title": { pt: "INTEGRIDADE DO JOGO", es: "INTEGRIDAD DEL JUEGO" },
  "int.b6.integrity.desc": { pt: "A Corrida Diamond é baseada em princípios de boa-fé, integridade, colaboração e espírito esportivo. Qualquer tentativa de burlar o sistema não será tolerada.", es: "La Carrera Diamond se basa en principios de buena fe, integridad, colaboración y espíritu deportivo. Cualquier intento de burlar el sistema no será tolerado." },
  "int.b6.integrity.prohibited": { pt: "É proibido:", es: "Está prohibido:" },
  "int.b6.integrity.p1": { pt: "Fraudar dados", es: "Fraudar datos" },
  "int.b6.integrity.p2": { pt: "Combinar ações entre participantes", es: "Combinar acciones entre participantes" },
  "int.b6.integrity.p3": { pt: "Burlar regras para manipular o ranking", es: "Burlar reglas para manipular el ranking" },
  "int.b6.integrity.penalty": { pt: "Qualquer irregularidade pode resultar em: perda de pontos, suspensão ou exclusão definitiva do desafio.", es: "Cualquier irregularidad puede resultar en: pérdida de puntos, suspensión o exclusión definitiva del desafío." },
  "int.b6.adjust.title": { pt: "DIREITO DE AJUSTE", es: "DERECHO DE AJUSTE" },
  "int.b6.adjust.desc": { pt: "A organização poderá, a qualquer momento: auditar ações e provas, ajustar critérios ou pontuações, corrigir brechas e alterar regras operacionais, encerrar ou iniciar novas ações durante o desafio.", es: "La organización podrá, en cualquier momento: auditar acciones y pruebas, ajustar criterios o puntuaciones, corregir brechas y alterar reglas operacionales, cerrar o iniciar nuevas acciones durante el desafío." },
  "int.b6.adjust.note": { pt: "Todos os ajustes serão comunicados oficialmente e com antecedência.", es: "Todos los ajustes serán comunicados oficialmente y con anticipación." },
  "int.b6.final.title": { pt: "🏁 REGRA FINAL", es: "🏁 REGLA FINAL" },
  "int.b6.final.desc": { pt: "Quem somar mais pontos, vence.", es: "Quien sume más puntos, gana." },
  "int.b6.final.motto": { pt: "Sem sorte. Sem desculpas. Só execução.", es: "Sin suerte. Sin excusas. Solo ejecución." },
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
