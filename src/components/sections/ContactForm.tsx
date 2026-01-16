"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

// Esquema de validação
const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  message: z.string().min(10, "Por favor, descreva brevemente seu caso"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Aqui você integraria com API (ex: EmailJS, API Route)
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulação
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section id="contato" className="py-20 bg-primary text-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Não perca seus direitos por falta de ação.
            </h2>
            <p className="text-slate-300 text-lg">
              O tempo pode ser o maior inimigo do seu processo. Agende agora uma análise preliminar do seu caso. Garantimos sigilo absoluto.
            </p>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-accent font-bold mb-2">Urgência Legal?</h4>
              <p className="text-sm text-slate-300 mb-4">
                Para casos de prisão, busca e apreensão ou liminares urgentes, utilize nosso plantão 24h.
              </p>
              <button className="flex items-center gap-2 text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Chamar no WhatsApp (Plantão)
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 font-serif text-primary">Solicite sua Consulta</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome Completo</label>
                  <input {...register("name")} className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent outline-none" placeholder="Seu nome" />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone/WhatsApp</label>
                  <input {...register("phone")} className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent outline-none" placeholder="(00) 00000-0000" />
                  {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input {...register("email")} type="email" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent outline-none" placeholder="seu@email.com" />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Relato Breve do Caso</label>
                <textarea {...register("message")} rows={4} className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent outline-none" placeholder="Descreva sua situação..." />
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:bg-accent-hover transition-colors shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Quero Minha Análise Gratuita"}
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                Seus dados estão protegidos pela LGPD e sigilo advogado-cliente.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}