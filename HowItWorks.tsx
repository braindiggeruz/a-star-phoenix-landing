import { motion } from 'framer-motion';
import { UserPlus, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus />,
    title: "Регистрация",
    description: "Создайте аккаунт за 1 минуту. Никаких сложных форм."
  },
  {
    icon: <Settings />,
    title: "Настройка",
    description: "Выберите агентов и добавьте информацию о вашем бизнесе."
  },
  {
    icon: <Rocket />,
    title: "Запуск",
    description: "Агенты начинают работать и приносить прибыль мгновенно."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-[#0A0F1C] relative border-t border-white/5">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Запуск за <span className="text-gradient-gold">3 простых шага</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#05080F] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:border-amber-500/30 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-amber-400 w-10 h-10 [&>svg]:w-full [&>svg]:h-full">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-xs text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
