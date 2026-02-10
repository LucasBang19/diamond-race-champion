import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQSectionProps {
  onParticipate: () => void;
}

const FAQSection = ({ onParticipate }: FAQSectionProps) => {
  const { t } = useLanguage();

  const faqs = Array.from({ length: 13 }, (_, i) => ({
    q: t(`faq.${i + 1}.q`),
    a: t(`faq.${i + 1}.a`),
  }));

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
          {t("faq.title")}
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
            {t("cta.participate")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
