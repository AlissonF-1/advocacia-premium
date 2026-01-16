"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Scale, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Consulta Inicial",
    description: "Alinhamento total. Entendemos sua situação e identificamos as urgências do caso.",
  },
  {
    icon: Search,
    title: "2. Análise Profunda",
    description: "Nossa equipe examina cada detalhe e provas para montar uma tese jurídica robusta.",
  },
  {
    icon: Scale,
    title: "3. Estratégia e Ação",
    description: "Atuação combativa no tribunal ou negociação, sempre buscando o melhor cenário.",
  },
  {
    icon: ShieldCheck,
    title: "4. Resultado e Proteção",
    description: "Acompanhamento até a resolução final e garantia dos seus direitos.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            A Trajetória do Seu Caso
          </h2>
          <p className="text-slate-600">
            Transparência total em cada etapa. Você nunca ficará sem saber o próximo passo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Seta de conexão entre cards (apenas desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-slate-200 -z-10 transform -translate-x-1/2">
                  <div className="absolute right-0 -top-[5px] text-slate-200">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-primary text-accent rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}