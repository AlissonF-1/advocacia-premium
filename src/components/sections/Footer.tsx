"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
      {/* Parte Superior Principal */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Coluna 1: Sobre e Redes */}
          <div className="space-y-6">
            <h4 className="text-2xl font-serif font-bold text-white">
              Silva & <span className="text-accent">Associados</span>
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Compromisso inegociável com a defesa dos seus direitos. Atuação estratégica em tribunais superiores e consultoria preventiva para empresas e famílias.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Links Rápidos</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre o Escritório</a></li>
              <li><a href="#areas" className="hover:text-accent transition-colors">Áreas de Atuação</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">Artigos Jurídicos</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Agendar Consulta</a></li>
            </ul>
          </div>

          {/* Coluna 3: Áreas de Atuação (SEO) */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Especialidades</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Direito Trabalhista</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Direito de Família</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Direito Criminal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Direito Empresarial</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Planejamento Sucessório</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato e Mapa */}
          <div className="space-y-6">
            <h5 className="text-white font-bold mb-6 text-lg">Contato</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>contato@silvaadv.com.br</span>
              </li>
            </ul>
            
            {/* Mapa Incorporado (Placeholder) */}
            <div className="w-full h-32 bg-slate-800 rounded-lg overflow-hidden border border-slate-700 opacity-80 hover:opacity-100 transition-opacity">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098170220641!2d-46.65451992382103!3d-23.56491766172288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709667000000!5m2!1spt-BR!2sbr" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 loading="lazy"
                 className="grayscale hover:grayscale-0 transition-all duration-500"
               ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Parte Inferior: Copyright e Legal */}
     {/* Parte Inferior: Copyright e Legal + Créditos Dev */}
    <div className="border-t border-slate-900 bg-slate-950/50">
    <div className="container px-4 py-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        
        <div className="flex flex-col md:flex-row items-center gap-2">
        <p>© {currentYear} Silva & Associados. Todos os direitos reservados.</p>
        {/* SEUS CRÉDITOS AQUI - Discreto e elegante */}
        <span className="hidden md:inline text-slate-700">|</span>
        <p>
            Desenvolvido por <a href="https://seu-portfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors font-medium">Alisson Flaynn</a>
        </p>
        </div>

        <div className="flex gap-6">
        <span>OAB/SP 123.456</span>
        <a href="#" className="hover:text-slate-300">Política de Privacidade</a>
        <a href="#" className="hover:text-slate-300">Termos de Uso</a>
        </div>
    </div>
    </div>
    </footer>
  );
}