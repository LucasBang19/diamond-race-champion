import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é a Corrida Diamond?",
    a: "É um desafio em formato de ranking. Você entra no jogo, executa ações dentro do ecossistema, soma pontos e sobe no ranking. No final, o primeiro colocado leva a BMW, e o segundo, terceiro, quarto e quinto lugar levam prêmios exclusivos.",
  },
  {
    q: "Isso é sorteio?",
    a: "Não. Não é sorteio e não depende de sorte. É ranking + execução.",
  },
  {
    q: "Quem pode participar?",
    a: "Membros ativos da Diamond: FOX Leads, Comunidade SMA, Mentoria ou Consultoria.",
  },
  {
    q: "Como eu entro na Corrida?",
    a: "Se você não está dentro de nenhum produto Diamond, precisa se tornar um membro para automaticamente ativar sua entrada no desafio. Entre em contato com um especialista Diamond.",
  },
  {
    q: "Eu preciso ser grande / ter audiência pra competir?",
    a: "Não. Aqui pesa a execução + constância nas estratégias digitais que ensinamos. Ganha quem mantém o ritmo e sobe no ranking.",
  },
  {
    q: "Como eu ganho pontos?",
    a: "Você tem acesso ao regulamento oficial onde há todas as regras do desafio, principalmente como ganhar pontos e subir no ranking.",
  },
  {
    q: "Quando começa a Corrida?",
    a: "Final de fevereiro. E pode terminar a qualquer momento — quando a meta for alcançada.",
  },
  {
    q: "Como vou acompanhar o ranking e minha pontuação?",
    a: "Após ativar sua participação, você recebe acesso a todas as informações, e a página atualizada em tempo real com as informações diárias do desafio.",
  },
  {
    q: "A BMW é garantida?",
    a: "Sim, desde que a meta (460 novos alunos) seja batida.",
  },
  {
    q: "Vai ter oportunidades extras para ganhar mais pontos ao longo do ano?",
    a: "Sim. Podem existir turbos e ações surpresa em janelas específicas, anunciadas oficialmente.",
  },
  {
    q: "O que acontece se eu entrar e não fizer nada?",
    a: "Você fica pra trás. Simples. Quem não executa não sobe no ranking.",
  },
  {
    q: "Posso entrar só pra 'ver como é'?",
    a: "Pode, mas você vai perder tempo. Essa corrida é pra quem quer resultado de verdade.",
  },
  {
    q: "O que eu faço agora?",
    a: "Se você quer participar, entre em contato com um especialista para ativar sua participação. Se você já é membro, apenas se cadastre para receber as informações oficiais.",
  },
];

interface FAQSectionProps {
  onParticipate: () => void;
}

const FAQSection = ({ onParticipate }: FAQSectionProps) => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
          Dúvidas Frequentes
        </h2>
        <div className="gold-divider mx-auto mb-12" />

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-sm px-6 data-[state=open]:border-gold/40"
            >
              <AccordionTrigger className="font-body text-sm font-semibold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <button onClick={onParticipate} className="btn-gold">
            Quero Participar
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
