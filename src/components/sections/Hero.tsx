"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <--- Importante

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary text-white pt-32 pb-20">
      
      {/* SOLUÇÃO DE PERFORMANCE: Trocar div com bg-url por Next Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
          alt="Escritório de Advocacia Premium"
          fill
          priority // <--- Isso diz ao navegador: "Carregue isso primeiro!"
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </div>
      
      {/* Gradiente reforçado para legibilidade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/40" />

      <div className="container relative z-20 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna de Texto */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Disponível para consultas urgentes
          </div>

          {/* Adicionando priority ao H1 para evitar layout shift */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Defendendo seu Patrimônio e sua <span className="text-accent">Liberdade</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-lg">
            Estratégias jurídicas personalizadas para casos complexos. Mais de 15 anos de experiência e 95% de taxa de sucesso em tribunais superiores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-accent hover:bg-accent-hover transition-colors rounded-lg shadow-lg shadow-accent/20"
            >
              Agende sua Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-slate-700 hover:bg-white/5 transition-colors rounded-lg"
            >
              Conheça o Escritório
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>OAB/SP 123.456</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>+1.500 Casos Ganhos</span>
            </div>
          </div>
        </motion.div>

        {/* Coluna Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative h-full min-h-[500px]"
        >
             <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-accent/20 to-transparent rounded-t-[100px] border-x border-t border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}