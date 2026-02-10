import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

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

interface FoundData {
  nome: string;
  produto: string;
  email: string;
}

const ParticipateModal = ({ open, onClose }: ParticipateModalProps) => {
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foundData, setFoundData] = useState<FoundData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const { t } = useLanguage();

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedProduct) return;

    setLoading(true);
    setFoundData(null);
    setNotFound(false);
    try {
      const { data, error } = await supabase.functions.invoke("send-webhook", {
        body: { email: email.trim(), product: selectedProduct },
      });
      if (error) {
        console.error("Webhook error:", error);
        setNotFound(true);
      } else if (data?.result && Array.isArray(data.result) && data.result.length > 0) {
        const entry = data.result[0];
        setFoundData({
          nome: entry["Nome"] || entry["nome"] || "",
          produto: entry["Nome do Produto"] || entry["produto"] || "",
          email: entry["Email"] || entry["email"] || "",
        });
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.error("Webhook error:", err);
      setNotFound(true);
    } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "hsla(0,0%,0%,0.7)" }}>
      <div className="relative w-full max-w-lg rounded-sm bg-background p-8 shadow-2xl animate-fade-up">
        <button
          onClick={() => { onClose(); setSubmitted(false); setEmail(""); setSelectedProduct(""); setFoundData(null); setNotFound(false); }}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            {foundData ? (
              <>
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="font-heading text-2xl font-bold mb-2">{t("modal.success.title")}</h3>
                <p className="text-foreground text-lg">
                  <span className="font-bold">{foundData.nome}</span>, {t("modal.found.msg1")} <span className="font-bold">{foundData.produto}</span> {t("modal.found.msg2")} <span className="font-bold">{foundData.email}</span>
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  {t("modal.success.msg")}
                </p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">😕</div>
                <h3 className="font-heading text-2xl font-bold mb-2">{t("modal.notfound.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("modal.notfound.msg")}
                </p>
                <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-sm">
                  <MessageCircle size={16} />
                  {t("modal.support")}
                </a>
              </>
            )}
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
