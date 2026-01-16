"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, BookOpen } from "lucide-react";
import Image from "next/image"; // Importante para otimização

const credentials = [
  { icon: Award, text: "Mestre em Direito pela UFPI" },
  { icon: CheckCircle2, text: "Especialista em Processo Civil" },
  { icon: BookOpen, text: "Autor de 3 Livros Jurídicos" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-accent uppercase border border-accent/20 rounded-full bg-accent/5">
              Sobre o Fundador
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Advocacia é sobre proteger <span className="text-accent underline decoration-accent/30 underline-offset-4">legados</span>.
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Olá, sou o <strong>Dr. Carlos Silva</strong>. Minha trajetória jurídica começou não apenas nos livros, mas na vontade de equilibrar a balança da justiça para quem se vê desamparado diante de grandes corporações ou do Estado.
              </p>
              <p>
                Com mais de 15 anos de atuação, fundei este escritório com um pilar inegociável: <strong>atendimento artesanal</strong>. Aqui, você não é um número de processo. Você é uma história que merece ser ouvida e defendida com a máxima ferocidade técnica.
              </p>
              <p>
                Não prometo milagres, prometo a melhor técnica jurídica disponível no mercado aliada a uma estratégia incansável.
              </p>
            </div>

            {/* Credenciais Rápidas */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-slate-50 text-accent">
                    <cred.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{cred.text}</span>
                </div>
              ))}
            </div>

            {/* Assinatura Visual (Simulação) */}
            <div className="mt-10 font-serif text-3xl text-primary opacity-80 italic">
              Carlos Silva
            </div>
          </motion.div>

          {/* Coluna Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Elemento Decorativo de Fundo */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
              {/* Substitua o src pela foto real do advogado */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Foto do Dr. Carlos Silva"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              
              {/* Card Flutuante de Experiência */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur shadow-lg p-4 rounded-lg border-l-4 border-accent max-w-[200px]">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-slate-600 font-medium">Anos de experiência em tribunais superiores</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}