import { motion } from 'framer-motion';

const cases = [
  {
    company: "ORZU Travel",
    metric: "+35%",
    description: "повторных заказов",
    detail: "ИИ-консультант автоматически предлагал туры на основе истории поездок.",
    bg: "from-emerald-500/10 to-emerald-500/5",
    text: "text-emerald-400"
  },
  {
    company: "Bean&Joy",
    metric: "-18%",
    description: "расходов на закупки",
    detail: "ИИ-аналитик оптимизировал складские запасы, исключив порчу продуктов.",
    bg: "from-blue-500/10 to-blue-500/5",
    text: "text-blue-400"
  },
  {
    company: "OnlineShop.uz",
    metric: "+20%",
    description: "выручки ночью",
    detail: "ИИ-продавец обрабатывал заказы и консультировал клиентов 24/7.",
    bg: "from-purple-500/10 to-purple-500/5",
    text: "text-purple-400"
  }
];

export const Cases = () => {
  return (
    <section className="py-32 bg-[#0A0F1C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Результаты <span className="text-gray-400">говорят за себя</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Реальные цифры внедрения ИИ-агентов в бизнесах Узбекистана
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-3xl border border-white/5 bg-gradient-to-b ${item.bg} hover:border-white/10 transition-all duration-500 group flex flex-col h-full`}
            >
              <div className="text-sm font-semibold text-gray-400 mb-8 uppercase tracking-wide flex items-center justify-between">
                {item.company}
                <div className={`w-2 h-2 rounded-full ${item.text.replace('text-', 'bg-')}`} />
              </div>
              
              <div className={`text-5xl lg:text-6xl font-bold ${item.text} mb-4 tracking-tighter`}>
                {item.metric}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">
                {item.description}
              </h3>
              
              <p className="text-gray-400 leading-relaxed border-t border-white/10 pt-6 text-base mt-auto">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
