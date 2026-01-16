"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "R$ 15Mi+", label: "Recuperados para Clientes" },
  { value: "96%", label: "Taxa de Sucesso (Cível)" },
  { value: "12+", label: "Anos de Experiência" },
  { value: "2.500+", label: "Consultas Realizadas" },
];

const testimonials = [
  {
    name: "Roberto M.",
    role: "Diretor Comercial",
    content: "A equipe foi impecável. O que parecia ser uma causa perdida foi revertida no tribunal superior graças à estratégia técnica do Dr. Carlos. Recuperamos o patrimônio da empresa.",
    stars: 5,
  },
  {
    name: "Ana Paula S.",
    role: "Cliente Família",
    content: "Mais do que advogados, foram parceiros num momento difícil do meu divórcio. A sensibilidade e a firmeza na negociação garantiram o futuro dos meus filhos.",
    stars: 5,
  },
  {
    name: "Construtora X",
    role: "Cliente Corporativo",
    content: "A consultoria preventiva reduziu nosso passivo trabalhista em 40% no primeiro ano. O retorno sobre o investimento nos honorários foi imediato.",
    stars: 5,
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern sutil */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container px-4 relative z-10">
        
        {/* Parte A: Estatísticas (Resultados) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-serif font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parte B: Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-slate-200 mb-6 leading-relaxed italic">
                "{item.content}"
              </p>
              
              <div>
                <p className="font-bold text-white font-serif">{item.name}</p>
                <p className="text-xs text-accent uppercase tracking-wider">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            * Resultados passados não garantem resultados futuros. Cada caso é analisado individualmente.
          </p>
        </div>
      </div>
    </section>
  );
}