import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PRODUCTS = [
  "Fox Leads",
  "Comunidade S.M.A",
  "Mentoria Diamond",
  "Consultoria Stratify",
];

const WPP_LINK = "https://wa.me/555197062246";

interface ParticipateModalProps {
  open: boolean;
  onClose: () => void;
}

const ParticipateModal = ({ open, onClose }: ParticipateModalProps) => {
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedProduct) return;

    setLoading(true);
    try {
      const form = new FormData();
      form.append("email", email.trim());
      form.append("product", selectedProduct);
      navigator.sendBeacon(
        "https://webhook.dev.stratifyacceleration.com/webhook/corridabmw",
        form
      );
    } catch (err) {
      console.error("Webhook error:", err);
    } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "hsla(0,0%,0%,0.7)" }}>
      <div className="relative w-full max-w-lg rounded-sm bg-background p-8 shadow-2xl animate-fade-up">
        <button
          onClick={() => { onClose(); setSubmitted(false); setEmail(""); setSelectedProduct(""); }}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="font-heading text-2xl font-bold mb-2">{t("modal.success.title")}</h3>
            <p className="text-muted-foreground">
              {t("modal.success.msg")}
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-2xl font-bold text-center mb-2">
              {t("modal.title")}
            </h3>
            <div className="gold-divider mx-auto mb-6" />

            <p className="text-sm text-muted-foreground text-center mb-4">
              {t("modal.member.q")}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {PRODUCTS.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedProduct(p)}
                  className={`px-3 py-3 rounded-sm text-xs font-bold uppercase tracking-wide transition-all duration-200 border ${
                    selectedProduct === p
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-gold/50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1 block">
                  {t("modal.email.label")}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("modal.email.placeholder")}
                  className="w-full rounded-sm border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-50">
                {loading ? "Enviando..." : t("modal.submit")}
              </button>
            </form>

            <div className="mt-6 space-y-3 border-t border-border pt-6">
              <p className="text-xs text-muted-foreground text-center">
                {t("modal.forgot")}
              </p>
              <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-xs">
                <MessageCircle size={16} />
                {t("modal.support")}
              </a>

              <p className="text-xs text-muted-foreground text-center">
                {t("modal.notmember")}
              </p>
              <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-dark w-full text-xs">
                <MessageCircle size={16} className="mr-2" />
                {t("modal.specialist")}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ParticipateModal;
