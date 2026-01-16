"use client";
import { motion } from "framer-motion";
import { Scale, Users, Briefcase, Building2, Gavel, ShieldAlert } from "lucide-react";

const areas = [
  { icon: Briefcase, title: "Direito Trabalhista", desc: "Defesa de direitos em rescisões, assédio e acidentes." },
  { icon: Users, title: "Direito de Família", desc: "Divórcios, guarda, pensão e inventários com humanidade." },
  { icon: ShieldAlert, title: "Direito Criminal", desc: "Defesa técnica especializada em inquéritos e processos." },
  { icon: Building2, title: "Direito Empresarial", desc: "Consultoria preventiva e contencioso para empresas." },
  { icon: Scale, title: "Direito Civil", desc: "Contratos, indenizações e responsabilidade civil." },
  { icon: Gavel, title: "Direito Tributário", desc: "Recuperação de créditos e planejamento fiscal." },
];

export function PracticeAreas() {
  return (
    <section id="areas" className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
            Especialidades Jurídicas
          </h2>
          <p className="text-slate-600 text-lg">
            Atuação focada em resultados e na excelência técnica em diversas áreas do direito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform group-hover:bg-accent group-hover:text-white text-primary">
                <area.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-serif">
                {area.title}
              </h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                {area.desc}
              </p>
              <a href="#" className="text-accent font-semibold text-sm hover:underline decoration-accent underline-offset-4">
                Saiba mais &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}