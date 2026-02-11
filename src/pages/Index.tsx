import { useState } from "react";
import { MessageCircle, Target, Users, CheckCircle } from "lucide-react";
import bmwHero from "@/assets/bmw-prizes.png";
import foundersImg from "@/assets/founders.jpeg";
import communityImg from "@/assets/community.jpg";
import ParticipateModal from "@/components/corrida/ParticipateModal";
import FAQSection from "@/components/corrida/FAQSection";
import Footer from "@/components/corrida/Footer";
import LanguageSelector from "@/components/corrida/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const WPP_LINK = "https://wa.me/555197062246";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <LanguageSelector />

      {/* BLOCO 1 - HERO */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(43 75% 49% / 0.3), transparent 70%)"
        }} />
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 pt-10 sm:pt-16 pb-6 sm:pb-8 text-center">
          <p className="text-gold font-body text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 animate-fade-up">
            {t("hero.badge")}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 animate-fade-up" style={{ color: "hsl(0 0% 95%)" }}>
            {t("hero.title")} <span className="text-gold">DIAMOND</span>
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-2 leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
            {t("hero.sub1")}
          </p>
          <p className="font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-2 leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
            {t("hero.sub2.pre")} <strong className="text-gold">BMW</strong> {t("hero.sub2.post")}
          </p>
          <p className="font-body text-xs sm:text-sm max-w-xl mx-auto mb-6 sm:mb-8" style={{ color: "hsl(0 0% 50%)" }}>
            {t("hero.sub3")}<br />
            <strong style={{ color: "hsl(0 0% 80%)" }}>{t("hero.sub3b")}</strong>
          </p>

          <img
            src={bmwHero}
            alt="BMW 320i - Prêmio principal da Corrida Diamond"
            className="w-full max-w-4xl mx-auto rounded-sm mb-8"
          />

          <button onClick={openModal} className="btn-gold text-base">
            {t("cta.participate")}
          </button>
        </div>
      </section>

      {/* BLOCO 2 - O QUE É */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {t("b2.title.pre")} <span className="text-gold">{t("b2.title.post")}</span>{t("b2.title.suffix")}
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            {t("b2.p1")}{" "}
            <strong className="text-foreground">Jéssica Couto</strong> e{" "}
            <strong className="text-foreground">Francisco Galarreta</strong>, {t("b2.p1b")}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            {t("b2.p2")}{" "}
            <strong className="text-foreground">{t("b2.p2b")}</strong>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { place: t("b2.prize.1"), prize: "BMW 320i" },
              { place: t("b2.prize.2"), prize: "MacBook Pro" },
              { place: t("b2.prize.3"), prize: "iPhone" },
              { place: t("b2.prize.45"), prize: t("b2.prize.resort") },
            ].map((p) => (
              <div key={p.place} className="border border-border rounded-sm p-4 hover:border-gold/40 transition-colors">
                <p className="text-gold font-bold text-lg">{p.place}</p>
                <p className="text-sm font-semibold mt-1">{p.prize}</p>
              </div>
            ))}
          </div>

          <button onClick={openModal} className="btn-gold">
            {t("cta.participate")}
          </button>
        </div>
      </section>

      {/* BLOCO 3 - COMO PARTICIPAR */}
      <section className="section-dark py-12 sm:py-20 px-3 sm:px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
            {t("b3.title.pre")} <span className="text-gold">{t("b3.title.post")}</span>?
          </h2>
          <div className="gold-divider mx-auto mb-8" />

          <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "hsl(0 0% 70%)" }}>
            {t("b3.p1")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["FOX LEADS", "COMUNIDADE S.M.A", "MENTORIA DIAMOND", "CONSULTORIA STRATIFY"].map((name) => (
              <div key={name} className="prize-card py-4 flex flex-col items-center justify-center">
                <CheckCircle className="mx-auto mb-2 text-gold" size={20} />
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "hsl(0 0% 85%)" }}>
                  {name}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 70%)" }}>
            {t("b3.p2")}
          </p>

          <button onClick={openModal} className="btn-gold mb-8">
            {t("cta.member")}
          </button>

          <p className="font-body text-xs mb-4" style={{ color: "hsl(0 0% 50%)" }}>
            {t("b3.email.info")}
          </p>
          <p className="font-body text-xs mb-4" style={{ color: "hsl(0 0% 50%)" }}>
            {t("b3.support.info")}
          </p>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xs">
            <MessageCircle size={16} />
            {t("b3.support.btn")}
          </a>
        </div>
      </section>

      {/* BLOCO 3B - NÃO SOU MEMBRO */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-2">
                {t("b3b.title.pre")} <span className="text-gold">{t("b3b.title.post")}</span>.
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {t("b3b.p1")}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">{t("b3b.p2.pre")}</strong>{" "}
                {t("b3b.p2.post")}
              </p>
              <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
                {t("b3b.cta")}
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
      <section className="section-dark py-12 sm:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={foundersImg}
                alt="Jéssica Couto e Francisco Galarreta"
                className="rounded-sm w-full max-w-sm mx-auto shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
                {t("b4.title.pre")} <span className="text-gold">{t("b4.title.post")}</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 70%)" }}>
                <strong style={{ color: "hsl(0 0% 90%)" }}>Jéssica Couto</strong>, {t("b4.p1")}{" "}
                <strong style={{ color: "hsl(0 0% 90%)" }}>Francisco Galarreta</strong>, {t("b4.p1b")}
              </p>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 70%)" }}>
                {t("b4.p2")}
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
                {t("b4.p3.pre")} <strong style={{ color: "hsl(0 0% 90%)" }}>Diamond Global</strong>, {t("b4.p3.mid")}{" "}
                <strong className="text-gold">R$17 milhões</strong>, {t("b4.p3.post")}{" "}
                <strong className="text-gold">50 mil alunos</strong> {t("b4.p3.end")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5 - INFORMAÇÕES OFICIAIS */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {t("b5.title.pre")} <span className="text-gold">{t("b5.title.post")}</span> {t("b5.title.end")}
          </h2>
          <div className="gold-divider mx-auto mb-8" />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-border rounded-sm p-8 hover:border-gold/40 transition-colors">
              <Target className="mx-auto mb-4 text-gold" size={32} />
              <h3 className="font-heading text-lg font-bold mb-2">{t("b5.meta.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("b5.meta.desc")}
              </p>
            </div>
            <div className="border border-border rounded-sm p-8 hover:border-gold/40 transition-colors">
              <Users className="mx-auto mb-4 text-gold" size={32} />
              <h3 className="font-heading text-lg font-bold mb-2">{t("b5.rule.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("b5.rule.desc")}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            {t("b5.regulation")}
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
