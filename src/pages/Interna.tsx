import { Trophy, Laptop, Smartphone, Palmtree, MessageCircle, ChevronDown, AlertTriangle, Shield, Calendar, Users, Target, Zap, Award } from "lucide-react";
import bmwHero from "@/assets/bmw-prizes.png";
import LanguageSelector from "@/components/corrida/LanguageSelector";
import Footer from "@/components/corrida/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

const WPP_LINK = "https://wa.me/555197062246";
const CURRENT_STUDENTS = 0; // placeholder
const GOAL = 460;

const Interna = () => {
  const { t } = useLanguage();
  const progress = (CURRENT_STUDENTS / GOAL) * 100;

  return (
    <div className="min-h-screen bg-background">
      <LanguageSelector />

      {/* BLOCO 1 - HERO */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(43 75% 49% / 0.3), transparent 70%)"
        }} />
        <div className="relative max-w-5xl mx-auto px-3 sm:px-4 pt-10 sm:pt-16 pb-8 text-center">
          <p className="text-gold font-body text-lg sm:text-xl font-bold uppercase tracking-[0.2em] mb-4 animate-fade-up">
            {t("int.hero.badge")}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black mb-4 animate-fade-up" style={{ color: "hsl(0 0% 95%)" }}>
            {t("int.hero.title")} <span className="text-gold">DIAMOND</span>
          </h1>
          <p className="font-body text-xl sm:text-2xl max-w-2xl mx-auto mb-2" style={{ color: "hsl(0 0% 70%)" }}>
            {t("int.hero.sub1")}
          </p>
          <p className="font-body text-xl sm:text-2xl max-w-2xl mx-auto mb-6" style={{ color: "hsl(0 0% 70%)" }}>
            {t("int.hero.sub2")}
          </p>

          <img src={bmwHero} alt="BMW 320i + Prêmios" className="w-full max-w-4xl mx-auto rounded-sm mb-6" />

          <p className="text-gold font-heading text-lg sm:text-xl font-bold mb-4">{t("int.hero.prize")}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto mb-8">
            <div className="prize-card">
              <Trophy className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-lg font-bold uppercase tracking-wide text-gold">1º</p>
              <p className="text-xl font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>BMW 320i</p>
            </div>
            <div className="prize-card">
              <Laptop className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-lg font-bold uppercase tracking-wide text-gold">2º</p>
              <p className="text-xl font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>MacBook Pro</p>
            </div>
            <div className="prize-card">
              <Smartphone className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-lg font-bold uppercase tracking-wide text-gold">3º</p>
              <p className="text-xl font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>iPhone</p>
            </div>
            <div className="prize-card">
              <Palmtree className="mx-auto mb-2 text-gold" size={28} />
              <p className="text-lg font-bold uppercase tracking-wide text-gold">4º e 5º</p>
              <p className="text-xl font-bold mt-1" style={{ color: "hsl(0 0% 90%)" }}>Resort Pago</p>
            </div>
          </div>

          <p className="text-gold font-bold text-xl uppercase tracking-wide mb-3">{t("int.hero.support")}</p>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg">
            <MessageCircle size={16} />
            {t("int.hero.support.btn")}
          </a>
        </div>
      </section>

      {/* BLOCO 2 - TERMÔMETRO */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {t("int.b2.title")}:
          </h2>
          <p className="text-gold font-heading text-2xl sm:text-3xl font-black mb-6">{t("int.b2.goal")}</p>
          <div className="gold-divider mx-auto mb-8" />

          {/* Thermometer */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="flex justify-between text-lg font-bold mb-2">
              <span className="text-muted-foreground">{Math.round(progress)}%</span>
              <span className="text-gold">100%</span>
            </div>
            <div className="relative h-6 w-full overflow-hidden rounded-full" style={{ background: "hsl(0 0% 15%)" }}>
              <div
                className="h-full rounded-full transition-all duration-1000 animate-shimmer"
                style={{
                  width: `${Math.max(progress, 2)}%`,
                  background: "linear-gradient(90deg, hsl(43 75% 38%), hsl(43 75% 49%), hsl(43 60% 65%), hsl(43 75% 49%))",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
          </div>

          <p className="font-body text-xl text-muted-foreground leading-relaxed mb-6">
            {t("int.b2.desc")}
          </p>

          <a href="#" className="btn-gold text-lg">
            {t("int.b2.regulation")}
          </a>
        </div>
      </section>

      {/* BLOCO 3 - RANKING */}
      <section className="section-dark py-12 sm:py-20 px-3 sm:px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
            {t("int.b3.title")}
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-body text-xl mb-2" style={{ color: "hsl(0 0% 70%)" }}>{t("int.b3.desc")}</p>
          <p className="font-body text-xl mb-8" style={{ color: "hsl(0 0% 70%)" }}>{t("int.b3.sub")}</p>

          <div className="border border-border rounded-sm p-12" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
            <Target className="mx-auto mb-4 text-gold" size={40} />
            <p className="text-gold font-bold text-xl uppercase tracking-wide">{t("int.b3.soon")}</p>
          </div>
        </div>
      </section>

      {/* BLOCO 4 - PONTUAÇÃO */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              {t("int.b4.title")}
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-gold font-bold text-xl uppercase tracking-wide">{t("int.b4.layers")}</p>
          </div>

          <Accordion type="multiple" className="space-y-3">
            {/* CAMADA 1 */}
            <AccordionItem value="camada1" className="border border-border rounded-sm overflow-hidden" style={{ borderColor: "hsl(43 75% 49% / 0.3)" }}>
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline text-left">
                <span className="font-heading text-base sm:text-lg font-bold">{t("int.c1.title")}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6">
                <p className="text-xl text-muted-foreground mb-3">{t("int.c1.desc")}</p>
                <p className="text-lg text-muted-foreground mb-4 italic">{t("int.c1.obs")}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: t("int.c1.sma"), pts: "80" },
                    { label: t("int.c1.diamond"), pts: "120" },
                    { label: t("int.c1.stratify"), pts: "220" },
                  ].map((item) => (
                    <div key={item.label} className="border border-border rounded-sm p-3 text-center" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
                      <p className="text-lg font-bold mb-1 leading-tight">{item.label}</p>
                      <p className="text-gold font-black text-xl">{item.pts}</p>
                      <p className="text-lg text-muted-foreground">PONTOS</p>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-sm p-3 mb-3">
                  <p className="text-lg font-bold text-gold mb-1">{t("int.c1.important")}</p>
                </div>
                <div className="bg-muted/30 rounded-sm p-3 mb-3">
                  <p className="text-lg font-bold mb-1">{t("int.c1.proof.title")}</p>
                  <p className="text-lg text-muted-foreground">{t("int.c1.proof.desc")}</p>
                </div>
                <p className="text-lg text-muted-foreground mb-1">{t("int.c1.affiliate")}</p>
                <p className="text-lg text-muted-foreground">{t("int.c1.affiliate.bonus")}</p>
              </AccordionContent>
            </AccordionItem>

            {/* CAMADA 2 */}
            <AccordionItem value="camada2" className="border border-border rounded-sm overflow-hidden" style={{ borderColor: "hsl(43 75% 49% / 0.3)" }}>
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline text-left">
                <span className="font-heading text-base sm:text-lg font-bold">{t("int.c2.title")}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6">
                <p className="text-xl text-muted-foreground mb-3">{t("int.c2.desc")}</p>
                <p className="text-lg font-bold mb-1">{t("int.c2.sub")}</p>
                <p className="text-lg text-muted-foreground mb-3">{t("int.c2.sub.desc")}</p>
                <p className="text-lg text-muted-foreground mb-3">{t("int.c2.pts.label")}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: t("int.c1.sma"), pts: "10" },
                    { label: t("int.c1.diamond"), pts: "25" },
                    { label: t("int.c1.stratify"), pts: "40" },
                  ].map((item) => (
                    <div key={item.label} className="border border-border rounded-sm p-3 text-center" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
                      <p className="text-lg font-bold mb-1 leading-tight">{item.label}</p>
                      <p className="text-gold font-black text-xl">{item.pts}</p>
                      <p className="text-lg text-muted-foreground">PONTOS/VENDA</p>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-sm p-3 mb-3">
                  <p className="text-lg font-bold mb-1">{t("int.c2.rules.title")}</p>
                  <ul className="text-lg text-muted-foreground space-y-1 list-disc list-inside">
                    <li>{t("int.c2.rule1")}</li>
                    <li>{t("int.c2.rule2")}</li>
                    <li>{t("int.c2.rule3")}</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-sm p-3 mb-4">
                  <p className="text-lg font-bold mb-1">{t("int.c2.proof.title")}</p>
                  <p className="text-lg text-muted-foreground">{t("int.c2.proof.desc")}</p>
                </div>

                {/* Bônus faturamento */}
                <div className="border-t border-border pt-4 mt-4">
                  <p className="font-heading text-xl font-bold mb-3">{t("int.c2.bonus.title")}</p>
                  <p className="text-lg text-muted-foreground mb-3">{t("int.c2.bonus.desc")}</p>
                  <div className="space-y-2 mb-3">
                    {[
                      { range: "R$10.000", pts: "+150" },
                      { range: "R$20.000", pts: "+250" },
                      { range: "R$30.000", pts: "+350" },
                      { range: "R$50.000", pts: "+600" },
                      { range: "R$100.000", pts: "+1.500" },
                    ].map((b) => (
                      <div key={b.range} className="flex justify-between items-center border border-border rounded-sm px-4 py-2" style={{ borderColor: "hsl(43 75% 49% / 0.15)" }}>
                        <span className="text-lg font-bold">Acima de {b.range}</span>
                        <span className="text-gold font-black text-xl">{b.pts} pts</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-1">{t("int.c2.bonus.cumulative")}</p>
                  <p className="text-lg text-muted-foreground mb-3">{t("int.c2.bonus.refund")}</p>
                  <div className="bg-muted/30 rounded-sm p-3">
                    <p className="text-lg font-bold mb-1">{t("int.c2.bonus.proof.title")}</p>
                    <p className="text-lg text-muted-foreground">{t("int.c2.bonus.proof.desc")}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* CAMADA 3 */}
            <AccordionItem value="camada3" className="border border-border rounded-sm overflow-hidden" style={{ borderColor: "hsl(43 75% 49% / 0.3)" }}>
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline text-left">
                <span className="font-heading text-base sm:text-lg font-bold">{t("int.c3.title")}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6">
                <p className="text-xl text-muted-foreground mb-2">{t("int.c3.desc")}</p>
                <p className="text-lg text-muted-foreground mb-2 italic">{t("int.c3.products")}</p>
                <p className="text-lg text-muted-foreground mb-4">{t("int.c3.more")}</p>

                {/* Tabela permanência */}
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-lg border-collapse">
                    <thead>
                      <tr style={{ background: "hsl(43 75% 49% / 0.1)" }}>
                        <th className="border border-border px-3 py-2 text-left font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{t("int.c3.col.product")}</th>
                        <th className="border border-border px-3 py-2 text-center font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{t("int.c3.col.monthly")}</th>
                        <th className="border border-border px-3 py-2 text-center font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{t("int.c3.col.semester")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Comunidade SMA", monthly: "+10", semester: "+100" },
                        { name: "Mentoria Diamond", monthly: "+30", semester: "+150" },
                        { name: "Consultoria Stratify", monthly: "+35", semester: "+170" },
                        { name: "Fox Leads", monthly: "+20", semester: "+100" },
                        { name: "Oráculo", monthly: "+10", semester: "+100" },
                      ].map((row) => (
                        <tr key={row.name}>
                          <td className="border border-border px-3 py-2 font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{row.name}</td>
                          <td className="border border-border px-3 py-2 text-center text-gold font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{row.monthly}</td>
                          <td className="border border-border px-3 py-2 text-center text-gold font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{row.semester}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-muted/30 rounded-sm p-3 mb-3">
                  <p className="text-lg font-bold text-destructive mb-1">{t("int.c3.exit.warning")}</p>
                  <p className="text-lg text-muted-foreground">{t("int.c3.exit.example")}</p>
                </div>
                <div className="bg-muted/30 rounded-sm p-3 mb-4">
                  <p className="text-lg font-bold mb-1">{t("int.c3.proof.title")}</p>
                  <p className="text-lg text-muted-foreground">{t("int.c3.proof.desc")}</p>
                </div>

                {/* Avanço */}
                <div className="border-t border-border pt-4 mt-4">
                  <p className="font-heading text-xl font-bold mb-3">{t("int.c3.advance.title")}</p>
                  <p className="text-lg text-muted-foreground mb-3">{t("int.c3.advance.desc")}</p>
                  <div className="space-y-2 mb-3">
                    {[
                      { path: "Comunidade → Diamond", pts: "+300" },
                      { path: "Diamond → Consultoria", pts: "+300" },
                      { path: "Comunidade → Consultoria", pts: "+300" },
                    ].map((a) => (
                      <div key={a.path} className="flex justify-between items-center border border-border rounded-sm px-4 py-2" style={{ borderColor: "hsl(43 75% 49% / 0.15)" }}>
                        <span className="text-lg font-bold">{a.path}</span>
                        <span className="text-gold font-black text-xl">{a.pts} pts</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-3">{t("int.c3.advance.note")}</p>
                  <p className="text-lg text-muted-foreground mb-2">{t("int.c3.advance.proof")}</p>
                  <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gold text-lg font-bold underline">
                    {t("int.c3.advance.cta")}
                  </a>
                </div>

                {/* Ativação ferramenta */}
                <div className="border-t border-border pt-4 mt-4">
                  <p className="font-heading text-xl font-bold mb-3">{t("int.c3.tool.title")}</p>
                  <div className="space-y-2 mb-3">
                    {[
                      { name: "Ativar Oráculo", pts: "+40" },
                      { name: "Ativar FoxLeads", pts: "+80" },
                    ].map((tool) => (
                      <div key={tool.name} className="flex justify-between items-center border border-border rounded-sm px-4 py-2" style={{ borderColor: "hsl(43 75% 49% / 0.15)" }}>
                        <span className="text-lg font-bold">{tool.name}</span>
                        <span className="text-gold font-black text-xl">{tool.pts} pts</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-3">{t("int.c3.tool.proof")}</p>
                  <div className="bg-muted/30 rounded-sm p-3">
                    <p className="text-lg font-bold text-gold mb-1">{t("int.c3.email.warning")}</p>
                    <p className="text-lg text-muted-foreground">{t("int.c3.email.change")}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* CAMADA 4 */}
            <AccordionItem value="camada4" className="border border-border rounded-sm overflow-hidden" style={{ borderColor: "hsl(43 75% 49% / 0.3)" }}>
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline text-left">
                <span className="font-heading text-base sm:text-lg font-bold">{t("int.c4.title")}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6">
                <p className="text-xl text-muted-foreground mb-4">{t("int.c4.desc")}</p>

                {/* Tables per level */}
                {[
                  { level: "COMUNIDADE SMA", storie: "+10", text: "+10", video: "+30" },
                  { level: "MENTORIA DIAMOND", storie: "+10", text: "+20", video: "+40" },
                  { level: "CONSULTORIA STRATIFY", storie: "+10", text: "+30", video: "+50" },
                ].map((lvl) => (
                  <div key={lvl.level} className="mb-4">
                    <p className="text-lg font-bold text-gold mb-2 uppercase tracking-wide">{lvl.level}</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-lg border-collapse mb-2">
                        <thead>
                          <tr style={{ background: "hsl(43 75% 49% / 0.1)" }}>
                            <th className="border border-border px-3 py-2 text-left font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{t("int.c4.storie")}</th>
                            <th className="border border-border px-3 py-2 text-center font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{t("int.c4.depo")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border px-3 py-2 text-center text-gold font-bold" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>{lvl.storie} pts</td>
                            <td className="border border-border px-3 py-2" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
                              <div className="text-center">
                                <span className="block">{t("int.c4.text")}: <span className="text-gold font-bold">{lvl.text} pts</span></span>
                                <span className="block">{t("int.c4.video")}: <span className="text-gold font-bold">{lvl.video} pts</span></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                <div className="bg-muted/30 rounded-sm p-3 mb-3">
                  <p className="text-lg font-bold mb-2">{t("int.c4.proof.title")}</p>
                  <p className="text-lg text-muted-foreground mb-2">{t("int.c4.storie.rules")}</p>
                  <p className="text-lg text-muted-foreground">{t("int.c4.depo.rules")}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* BLOCO 5 - BÔNUS TURBOS */}
      <section className="section-dark py-12 sm:py-20 px-3 sm:px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: "hsl(0 0% 95%)" }}>
              {t("int.b5.title")}
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-xl mb-4" style={{ color: "hsl(0 0% 70%)" }}>{t("int.b5.desc")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
            {[t("int.b5.ex1"), t("int.b5.ex2"), t("int.b5.ex3"), t("int.b5.ex4"), t("int.b5.ex5")].map((ex) => (
              <div key={ex} className="prize-card py-3 px-3">
                <Zap className="mx-auto mb-1 text-gold" size={16} />
                <p className="text-lg font-bold text-center" style={{ color: "hsl(0 0% 85%)" }}>{ex}</p>
              </div>
            ))}
          </div>

          <p className="text-lg mb-8" style={{ color: "hsl(0 0% 50%)" }}>{t("int.b5.rules")}</p>

          {/* Embaixadores */}
          <div className="border rounded-sm p-6" style={{ borderColor: "hsl(43 75% 49% / 0.3)" }}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-gold" size={24} />
              <h3 className="font-heading text-lg font-bold" style={{ color: "hsl(0 0% 95%)" }}>{t("int.b5.ambassador.title")}</h3>
            </div>
            <p className="text-lg mb-3" style={{ color: "hsl(0 0% 70%)" }}>{t("int.b5.ambassador.desc")}</p>
            <p className="text-lg font-bold text-gold mb-2">{t("int.b5.ambassador.fox")}</p>
            <p className="text-lg mb-3" style={{ color: "hsl(0 0% 60%)" }}>{t("int.b5.ambassador.fox.desc")}</p>
            <p className="text-lg mb-3" style={{ color: "hsl(0 0% 60%)" }}>{t("int.b5.ambassador.how")}</p>
            <p className="text-lg mb-3" style={{ color: "hsl(0 0% 60%)" }}>{t("int.b5.ambassador.proof")}</p>
            <p className="text-lg font-bold mb-2" style={{ color: "hsl(0 0% 85%)" }}>{t("int.b5.ambassador.sales")}</p>
            <div className="bg-muted/10 rounded-sm p-3 mt-3">
              <p className="text-lg font-bold text-gold">{t("int.b5.ambassador.important")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 6 - REGRAS OFICIAIS */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              {t("int.b6.title")}
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-xl text-muted-foreground mb-2">{t("int.b6.intro")}</p>
            <a href="#" className="text-gold text-xl font-bold underline">{t("int.b6.regulation")}</a>
          </div>

          <div className="space-y-6">
            {/* Período */}
            <div className="border border-border rounded-sm p-5" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="text-gold" size={20} />
                <h3 className="font-heading text-base font-bold">{t("int.b6.period.title")}</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-1">{t("int.b6.period.start")}</p>
              <p className="text-lg text-muted-foreground">{t("int.b6.period.end")}</p>
            </div>

            {/* BMW */}
            <div className="border border-border rounded-sm p-5" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="text-gold" size={20} />
                <h3 className="font-heading text-base font-bold">{t("int.b6.bmw.title")}</h3>
              </div>
              <p className="text-lg text-muted-foreground">{t("int.b6.bmw.desc")}</p>
            </div>

            {/* Quem pode */}
            <div className="border border-border rounded-sm p-5" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-gold" size={20} />
                <h3 className="font-heading text-base font-bold">{t("int.b6.who.title")}</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-2">{t("int.b6.who.desc")}</p>
              <ul className="text-lg text-muted-foreground space-y-1 list-disc list-inside mb-2">
                <li>Comunidade SMA</li>
                <li>Mentoria Diamond</li>
                <li>Consultoria Stratify</li>
                <li>FoxLeads</li>
              </ul>
              <p className="text-lg text-muted-foreground">{t("int.b6.who.note")}</p>
            </div>

            {/* Ranking e Controle */}
            <div className="border border-border rounded-sm p-5" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-gold" size={20} />
                <h3 className="font-heading text-base font-bold">{t("int.b6.ranking.title")}</h3>
              </div>
              <ul className="text-lg text-muted-foreground space-y-1 list-disc list-inside">
                <li>{t("int.b6.ranking.r1")}</li>
                <li>{t("int.b6.ranking.r2")}</li>
                <li>{t("int.b6.ranking.r3")}</li>
              </ul>
            </div>

            {/* Integridade */}
            <div className="border border-border rounded-sm p-5" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="text-gold" size={20} />
                <h3 className="font-heading text-base font-bold">{t("int.b6.integrity.title")}</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-2">{t("int.b6.integrity.desc")}</p>
              <p className="text-lg font-bold mb-1">{t("int.b6.integrity.prohibited")}</p>
              <ul className="text-lg text-muted-foreground space-y-1 list-disc list-inside mb-2">
                <li>{t("int.b6.integrity.p1")}</li>
                <li>{t("int.b6.integrity.p2")}</li>
                <li>{t("int.b6.integrity.p3")}</li>
              </ul>
              <p className="text-lg text-destructive font-bold">{t("int.b6.integrity.penalty")}</p>
            </div>

            {/* Direito de Ajuste */}
            <div className="border border-border rounded-sm p-5" style={{ borderColor: "hsl(43 75% 49% / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="text-gold" size={20} />
                <h3 className="font-heading text-base font-bold">{t("int.b6.adjust.title")}</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-1">{t("int.b6.adjust.desc")}</p>
              <p className="text-lg text-muted-foreground">{t("int.b6.adjust.note")}</p>
            </div>

            {/* Regra Final */}
            <div className="border-2 rounded-sm p-6 text-center" style={{ borderColor: "hsl(43 75% 49% / 0.5)", background: "hsl(43 75% 49% / 0.05)" }}>
              <h3 className="font-heading text-xl font-black mb-2">{t("int.b6.final.title")}</h3>
              <p className="font-body text-2xl font-bold mb-1">{t("int.b6.final.desc")}</p>
              <p className="text-gold font-black text-xl uppercase tracking-widest">{t("int.b6.final.motto")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interna;
