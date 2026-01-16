"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image"; // <--- Importante

const articles = [
  {
    category: "Direito Trabalhista",
    title: "Mudanças na CLT: O que muda para o home office em 2024?",
    excerpt: "Entenda as novas regras sobre ajuda de custo, controle de ponto e direitos do trabalhador remoto.",
    date: "12 Mar, 2024",
    author: "Dr. Carlos Silva",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" // Reduzi o w=2000 para w=800
  },
  {
    category: "Família e Sucessões",
    title: "Planejamento Sucessório: Como proteger o patrimônio da família",
    excerpt: "Descubra como holdings familiares e testamentos podem evitar brigas e reduzir impostos no futuro.",
    date: "05 Mar, 2024",
    author: "Dra. Julia Mendes",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Direito Empresarial",
    title: "Recuperação de Crédito Tributário para Pequenas Empresas",
    excerpt: "Sua empresa pode ter dinheiro a receber da Receita Federal. Veja como identificar créditos ocultos.",
    date: "28 Fev, 2024",
    author: "Dr. Carlos Silva",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Conteúdo Jurídico
            </h2>
            <p className="text-slate-600">
              Informação é poder. Mantenha-se atualizado sobre seus direitos com nossos artigos e análises.
            </p>
          </div>
          
          <a href="#" className="hidden md:flex items-center gap-2 text-accent font-bold hover:text-accent-hover transition-colors group">
            Ver todos os artigos 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Container da Imagem Otimizado */}
              <div className="relative overflow-hidden rounded-xl aspect-video mb-6 bg-slate-100">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
                
                {/* AQUI ESTÁ A MÁGICA DO SEO E PERFORMANCE */}
                <Image 
                  src={post.image} 
                  alt={`Imagem do artigo: ${post.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-primary uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Resto do conteúdo mantido igual... */}
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3 font-serif group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center text-sm font-bold text-accent mt-auto group-hover:underline underline-offset-4">
                Ler artigo completo
              </span>
            </motion.article>
          ))}
        </div>
        {/* ...Botão mobile mantido... */}
         <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-accent font-bold">
            Ver todos os artigos 
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}