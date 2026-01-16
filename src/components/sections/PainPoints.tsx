"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileWarning, ArrowDown } from "lucide-react";

const pains = [
  {
    icon: AlertTriangle,
    title: "Medo de perder patrimônio",
    description: "A incerteza jurídica coloca em risco anos de trabalho e conquistas, gerando ansiedade sobre o futuro da sua família ou empresa."
  },
  {
    icon: Clock,
    title: "Processos travados",
    description: "A justiça é lenta para quem não tem uma estratégia ativa. Seu caso parece estar parado numa pilha de papéis sem previsão de fim."
  },
  {
    icon: FileWarning,
    title: "Burocracia incompreensível",
    description: "O 'juridiquês' e a complexidade dos documentos fazem você se sentir refém da situação, sem saber se seus direitos estão sendo realmente protegidos."
  }
];

export function PainPoints() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="container px-4 mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Você está passando por <span className="text-red-700/80">alguma dessas situações?</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Sabemos que um problema jurídico não é apenas um processo, é algo que tira o seu sono.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-red-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 text-red-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <pain.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-serif">
                {pain.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* A Transição para a Solução (Ponte) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-lg font-medium text-primary">
              Não deixe que isso defina o seu futuro. Nós temos o caminho.
            </p>
            <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}