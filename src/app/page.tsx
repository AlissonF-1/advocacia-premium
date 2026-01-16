import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainPoints } from "@/components/sections/PainPoints";
import { AboutSection } from "@/components/sections/AboutSection";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { BlogSection } from "@/components/sections/BlogSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer"; // Componente Footer Novo
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative">
      
      {/* Header / Navegação */}
     
      <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-md transition-all duration-300">
        <div className="container px-4 py-4 flex justify-between items-center text-white">
          <span className="text-xl font-serif font-bold text-accent tracking-tight">
            Silva & Associados
          </span>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
            <a href="#sobre" className="text-slate-300 hover:text-accent transition-colors">Sobre</a>
            <a href="#areas" className="text-slate-300 hover:text-accent transition-colors">Atuação</a>
            <a href="#blog" className="text-slate-300 hover:text-accent transition-colors">Blog</a>
            
            <a 
              href="#contato" 
              className="px-5 py-2.5 bg-accent text-primary font-bold rounded hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Menu Hamburger Mobile (Simplificado Visualmente) */}
          <button 
            className="md:hidden text-white" 
            aria-label="Abrir menu de navegação" 
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* 1. Hero: Impacto e Promessa */}
      <Hero />
      
      {/* 2. Trust: Autoridade Passiva (Logos) */}
      <TrustBar />
      
      {/* 3. Dores: Conexão Emocional (PAS - Problema) */}
      <PainPoints />
      
      {/* 4. Sobre: Humanização e Autoridade Pessoal */}
      <AboutSection />
      
      {/* 5. Áreas: Soluções Técnicas */}
      <PracticeAreas />
      
      {/* 6. Processo: Redução de Ansiedade */}
      <HowItWorks />
      
      {/* 7. Prova Social: Validação Externa (Depoimentos + Números) */}
      <SocialProof />
      
      {/* 8. Blog: Educação e Autoridade de Conteúdo */}
      <BlogSection />
      
      {/* 9. FAQ: Quebra de Objeções Finais */}
      <FaqSection />
      
      {/* 10. Contato: Conversão (Action) */}
      <ContactForm />
      
      {/* 11. Footer Completo: Mapa do Site e Legal */}
      <Footer />

      {/* Extra: Botão Flutuante (Conversão Direta) */}
      <WhatsAppButton />

    </main>
  );
}