import { useState } from "react";
import { Trophy, Laptop, Smartphone, Palmtree, MessageCircle, Target, Users, CheckCircle } from "lucide-react";
import bmwHero from "@/assets/bmw-hero.jpg";
import foundersImg from "@/assets/founders.jpg";
import communityImg from "@/assets/community.jpg";
import ParticipateModal from "@/components/corrida/ParticipateModal";
import FAQSection from "@/components/corrida/FAQSection";
import Footer from "@/components/corrida/Footer";

const WPP_LINK = "https://wa.me/555197062246";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-background">
      {/* BLOCO 1 - HERO */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(43 75% 49% / 0.3), transparent 70%)"
        }} />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-8 text-center">
          <p className="text-gold font-body text-sm font-bold uppercase tracking-[0.3em] mb-6 animate-fade-up">
            Desafio 2026
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-up" style={{ color: "hsl(0 0% 95%)" }}>
            CORRIDA <span className="text-gold">DIAMOND</span>
          </h1>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto mb-2 leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
            Cinco nomes. Cinco histórias aplaudidas.
          </p>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto mb-2 leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
            E o primeiro colocado… vai sentir o poder da chave de uma <strong className="text-gold">BMW</strong> nas mãos.
          </p>
          <p className="font-body text-sm max-w-xl mx-auto mb-8" style={{ color: "hsl(0 0% 50%)" }}>
            O Desafio já começou, e a única pergunta que fica é:<br />
            <strong style={{ color: "hsl(0 0% 80%)" }}>Você vai assistir ou entrar para a história?</strong>
          </p>

          <img
            src={bmwHero}
            alt="BMW 320i - Prêmio principal da Corrida Diamond"
            className="w-full max-w-4xl mx-auto rounded-sm mb-8"
          />

          {/* Prizes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
            <div className="prize-card">
              <Trophy className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-xs font-bold uppercase tracking-wide text-gold">1º Lugar</p>
              <p className="text-sm font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>BMW 320i</p>
            </div>
            <div className="prize-card">
              <Laptop className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-xs font-bold uppercase tracking-wide text-gold">2º Lugar</p>
              <p className="text-sm font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>MacBook Pro</p>
            </div>
            <div className="prize-card">
              <Smartphone className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-xs font-bold uppercase tracking-wide text-gold">3º Lugar</p>
              <p className="text-sm font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>iPhone</p>
            </div>
            <div className="prize-card">
              <Palmtree className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-xs font-bold uppercase tracking-wide text-gold">4º e 5º</p>
              <p className="text-sm font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>Resort Pago</p>
            </div>
          </div>

          <button onClick={openModal} className="btn-gold text-base">
            Quero Participar
          </button>
        </div>
      </section>

      {/* BLOCO 2 - O QUE É */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            O Que É a <span className="text-gold">Corrida Diamond</span>?
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            A Corrida da Diamond é um desafio criado em 2026 em formato de ranking, por{" "}
            <strong className="text-foreground">Jéssica Couto</strong> e{" "}
            <strong className="text-foreground">Francisco Galarreta</strong>, para premiar membros do seu Ecossistema Diamond.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Um lugar onde pessoas que executam, se cobram e se recusam a viver abaixo do próprio potencial, se encontram.{" "}
            <strong className="text-foreground">O mais obcecado, vence o desafio e leva uma BMW pra casa.</strong>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { place: "1º", prize: "BMW 320i" },
              { place: "2º", prize: "MacBook Pro" },
              { place: "3º", prize: "iPhone" },
              { place: "4º e 5º", prize: "Resort Tudo Pago" },
            ].map((p) => (
              <div key={p.place} className="border border-border rounded-sm p-4 hover:border-gold/40 transition-colors">
                <p className="text-gold font-bold text-lg">{p.place}</p>
                <p className="text-sm font-semibold mt-1">{p.prize}</p>
              </div>
            ))}
          </div>

          <button onClick={openModal} className="btn-gold">
            Quero Participar
          </button>
        </div>
      </section>

      {/* BLOCO 3 - COMO PARTICIPAR */}
      <section className="section-dark py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
            Para Quem É e <span className="text-gold">Como Participar</span>?
          </h2>
          <div className="gold-divider mx-auto mb-8" />

          <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "hsl(0 0% 70%)" }}>
            A Corrida Diamond é para todo membro do ecossistema Diamond.
            Se você faz parte de algum dos seguintes produtos, você está apto a participar:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["FOX LEADS", "COMUNIDADE S.M.A", "MENTORIA DIAMOND", "CONSULTORIA STRATIFY"].map((prod) => (
              <div key={prod} className="prize-card py-4">
                <CheckCircle className="mx-auto mb-2 text-gold" size={20} />
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "hsl(0 0% 85%)" }}>
                  {prod}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 70%)" }}>
            Basta você se inscrever no desafio para receber todas as informações necessárias, como por exemplo: regulamento completo, datas, pontuações e como vencer o desafio.
          </p>

          <button onClick={openModal} className="btn-gold mb-8">
            Sou Membro e Quero Participar
          </button>

          <p className="font-body text-xs mb-4" style={{ color: "hsl(0 0% 50%)" }}>
            Você receberá essas informações via e-mail, e também dentro do produto onde você é membro.
          </p>
          <p className="font-body text-xs mb-4" style={{ color: "hsl(0 0% 50%)" }}>
            Se você for membro e por acaso não recebeu as informações, envie uma mensagem ao suporte oficial:
          </p>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xs">
            <MessageCircle size={16} />
            Suporte da Corrida Diamond
          </a>
        </div>
      </section>

      {/* BLOCO 3B - NÃO SOU MEMBRO */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                Não faço parte do Ecossistema Diamond, mas <span className="text-gold">quero participar</span>.
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Se você não é aluno de nenhum treinamento: Comunidade S.M.A / Mentoria Diamond / Consultoria Stratify, e/ou não faz parte do Fox Leads, você ainda não está apto a participar do desafio.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Você precisa ser membro ativo no nosso ecossistema.</strong>{" "}
                Entre em contato com um especialista e entenda em qual produto você está apto a entrar, para aí sim, ativar a sua entrada na corrida.
              </p>
              <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Quero Entrar na Corrida Diamond
              </a>
            </div>
            <div>
              <img
                src={communityImg}
                alt="Comunidade Diamond celebrando conquistas"
                className="rounded-sm w-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 4 - FUNDADORES */}
      <section className="section-dark py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={foundersImg}
                alt="Jéssica Couto e Francisco Galarreta"
                className="rounded-sm w-full max-w-sm mx-auto shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
                Quem Está Por Trás da <span className="text-gold">Corrida Diamond</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 70%)" }}>
                <strong style={{ color: "hsl(0 0% 90%)" }}>Jéssica Couto</strong>, ex-maquiadora.{" "}
                <strong style={{ color: "hsl(0 0% 90%)" }}>Francisco Galarreta</strong>, ex-empresário.
              </p>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 70%)" }}>
                Eles descobriram o poder das vendas digitais e, em menos de um ano, criaram uma máquina de vendas que os tornou milionários.
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
                Hoje, lideram a <strong style={{ color: "hsl(0 0% 90%)" }}>Diamond Global</strong>, empresa que já faturou mais de{" "}
                <strong className="text-gold">R$17 milhões</strong>, através do seu ecossistema: comunidade, mentoria, consultoria e SaaS, onde já impactaram a vida de mais de{" "}
                <strong className="text-gold">50 mil alunos</strong> e ensina pessoas comuns a conquistarem resultados extraordinários através das vendas automáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5 - INFORMAÇÕES OFICIAIS */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Informações <span className="text-gold">Oficiais</span> da Corrida
          </h2>
          <div className="gold-divider mx-auto mb-8" />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-border rounded-sm p-8 hover:border-gold/40 transition-colors">
              <Target className="mx-auto mb-4 text-gold" size={32} />
              <h3 className="font-heading text-lg font-bold mb-2">Meta Clara</h3>
              <p className="text-sm text-muted-foreground">
                460 novos alunos na comunidade SMA (via indicação)
              </p>
            </div>
            <div className="border border-border rounded-sm p-8 hover:border-gold/40 transition-colors">
              <Users className="mx-auto mb-4 text-gold" size={32} />
              <h3 className="font-heading text-lg font-bold mb-2">Regra Clara</h3>
              <p className="text-sm text-muted-foreground">
                Com 460 novos membros, quem mais pontua, ganha o desafio
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            A corrida tem um regulamento oficial que pode ser acessado após a inscrição.
          </p>
        </div>
      </section>

      {/* BLOCO 6 - FAQ */}
      <FAQSection onParticipate={openModal} />

      {/* FOOTER */}
      <Footer />

      {/* MODAL */}
      <ParticipateModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
