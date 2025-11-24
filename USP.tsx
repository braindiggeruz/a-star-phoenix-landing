import { motion } from 'framer-motion';
import { Clock, Shield, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-amber-400" />,
    title: "Быстрое внедрение",
    description: "5 минут, без кода. Подключаем агентов мгновенно."
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-400" />,
    title: "Безопасно",
    description: "Ваши данные под защитой. Полный контроль доступа."
  },
  {
    icon: <Wallet className="w-8 h-8 text-amber-400" />,
    title: "Доступно",
    description: "Окупается с первого дня. От 1 000 000 сум."
  }
];

export const USP = () => {
  return (
    <section className="py-24 bg-[#05080F] relative overflow-hidden">
       {/* Divider */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
       
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#0A0F1C] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-amber-900/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
