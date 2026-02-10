import { useLanguage, Lang } from "@/contexts/LanguageContext";

const flags: Record<Lang, { emoji: string; label: string }> = {
  pt: { emoji: "🇧🇷", label: "Português" },
  es: { emoji: "🇪🇸", label: "Español" },
};

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex gap-1 bg-background/90 backdrop-blur-sm border border-border rounded-full p-1 shadow-lg">
      {(Object.keys(flags) as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`text-xl px-2 py-1 rounded-full transition-all ${
            lang === l ? "bg-gold/20 scale-110" : "opacity-50 hover:opacity-80"
          }`}
          title={flags[l].label}
        >
          {flags[l].emoji}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
