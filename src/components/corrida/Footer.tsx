import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-dark py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-heading text-xl font-bold text-gold mb-2">
          CORRIDA DIAMOND
        </p>
        <p className="text-sm" style={{ color: "hsl(0 0% 60%)" }}>
          {t("footer.sub")}
        </p>
        <div className="gold-divider mx-auto my-6" />
        <p className="text-xs" style={{ color: "hsl(0 0% 45%)" }}>
          {t("footer.copy")}
        </p>
        <p className="text-xs mt-1" style={{ color: "hsl(0 0% 35%)" }}>
          {t("footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
