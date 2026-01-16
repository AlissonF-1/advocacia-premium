"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "A consulta inicial é cobrada?",
    answer: "A análise preliminar do seu caso é gratuita. Entendemos a necessidade de verificar a viabilidade jurídica antes de qualquer compromisso financeiro. Após essa análise, apresentamos uma proposta transparente de honorários."
  },
  {
    question: "Quanto tempo demora o meu processo?",
    answer: "O tempo varia conforme a complexidade e a comarca. Porém, nossa estratégia foca em celeridade: buscamos liminares (decisões rápidas) sempre que possível e acordos vantajosos para evitar anos de espera no judiciário."
  },
  {
    question: "Vocês atendem online ou apenas presencialmente?",
    answer: "Atendemos em todo o Brasil. Nosso escritório é 100% digitalizado, permitindo reuniões por vídeo, assinatura de contratos eletrônica e acompanhamento do processo pelo WhatsApp, sem que você precise sair de casa."
  },
  {
    question: "Como funcionam os honorários?",
    answer: "Trabalhamos com flexibilidade. Dependendo do caso, podemos atuar com honorários de êxito (pagamento ao final, se ganhar), valor fixo parcelado ou um mix dos dois. Tudo é acordado em contrato antes de iniciarmos."
  },
  {
    question: "Meu caso é muito complexo, vocês aceitam?",
    answer: "Somos especialistas em casos de alta complexidade. Nossa equipe multidisciplinar analisa cada detalhe. Se o caso for viável juridicamente, teremos total capacidade técnica para defendê-lo."
  }
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-600">
            Respostas diretas para que você tome sua decisão com segurança.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                activeIndex === index 
                ? "bg-white border-accent/50 shadow-md" 
                : "bg-white border-slate-200 hover:border-accent/30"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${activeIndex === index ? "text-accent" : "text-primary"}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? "bg-accent text-white" : "bg-slate-100 text-slate-500"}`}>
                  {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Pós-FAQ */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Ainda tem alguma dúvida específica?</p>
          <a 
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-primary rounded-lg hover:bg-slate-800 transition-colors"
          >
            Falar com um Advogado Agora
          </a>
        </div>

      </div>
    </section>
  );
}