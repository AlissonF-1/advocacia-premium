"use client";

import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect, useRef } from "react"; // <--- Adicionei useRef

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  
  // Criamos uma referência para a "jaula" (limites da tela)
  const constraintsRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const phoneNumber = "5511999999999"; 
  const message = encodeURIComponent("Olá, vi o site e gostaria de agendar uma consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (!isVisible) return null;

  return (
    <>
      {/* 1. "JAULA" INVISÍVEL:
        Define os limites. Usamos 'inset-4' para dar uma margem de segurança
        para o botão não ficar colado demais na borda da tela.
        'pointer-events-none' garante que você consiga clicar no site atrás dela.
      */}
      <div 
        ref={constraintsRef}
        className="fixed inset-4 z-50 pointer-events-none h-[calc(100vh-2rem)] w-[calc(100vw-2rem)]"
      />

      <motion.div
        drag
        dragConstraints={constraintsRef} // <--- AQUI ESTÁ A TRAVA
        dragElastic={0.1} // Resistência elástica se tentar puxar pra fora
        dragMomentum={false}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        // Mudamos para 'absolute' pois agora ele vive dentro da 'jaula' fixa
        // 'pointer-events-auto' reativa os cliques no botão
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 cursor-grab touch-none pointer-events-auto"
      >
        
        {/* Balão de Texto (Tooltip) */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white px-4 py-2 rounded-lg shadow-xl border border-slate-100 mb-2 flex items-center gap-3 relative max-w-[200px]"
          >
            <p className="text-sm font-bold text-primary leading-tight select-none">
              Precisa de ajuda urgente?
            </p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              onPointerDown={(e) => e.stopPropagation()} 
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
            
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 transform border-r border-b border-slate-100" />
          </motion.div>
        )}

        {/* Botão Principal */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onDragStart={(e) => e.preventDefault()} 
          className="relative group draggable-cancel"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
          
          <div className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-green-500/30 transition-shadow duration-300">
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
          </div>

          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">1</span>
          </div>
        </motion.a>
      </motion.div>
    </>
  );
}