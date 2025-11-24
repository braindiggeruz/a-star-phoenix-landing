import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, BarChart3, ShieldCheck, PenTool, BrainCircuit, ArrowUpRight, Plus } from 'lucide-react';

const agents = [
  {
    icon: <ShoppingBag />,
    title: "ИИ-Продавец",
    description: "Автоматически обрабатывает заявки и закрывает сделки 24/7.",
    color: "text-blue-400"
  },
  {
    icon: <MessageCircle />,
    title: "ИИ-Консультант",
    description: "Мгновенные ответы на вопросы клиентов без ожидания оператора.",
    color: "text-green-400"
  },
  {
    icon: <BarChart3 />,
    title: "ИИ-Аналитик",
    description: "Глубокий анализ продаж и трендов для принятия верных решений.",
    color: "text-purple-400"
  },
  {
    icon: <ShieldCheck />,
    title: "ИИ-Модератор",
    description: "Чистота и порядок в ваших чатах и комментариях. Никакого спама.",
    color: "text-red-400"
  },
  {
    icon: <PenTool />,
    title: "ИИ-Контентщик",
    description: "Генерация постов и описаний товаров, которые продают.",
    color: "text-pink-400"
  },
  {
    icon: <BrainCircuit />,
    title: "ИИ-Мозг",
    description: "Центральный координатор всех процессов вашей цифровой команды.",
    color: "text-amber-400"
  }
];

export const Agents = () => {
  return (
    <section className="py-32 bg-[#05080F] relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Выберите своего <span className="text-gradient-gold">агента</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Соберите идеальную цифровую команду. Каждый агент — эксперт в своей области.
            </p>
          </div>
          <button className="btn btn-glass group whitespace-nowrap hidden md:flex items-center gap-2 px-6 py-3">
            Смотреть всех агентов
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#0A0F1C] border border-white/5 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col min-h-[320px]"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="text-amber-500" />
              </div>

              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 ring-1 ring-white/5 group-hover:ring-amber-400/30 ${agent.color}`}>
                <div className="w-7 h-7 [&>svg]:w-full [&>svg]:h-full">
                    {agent.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                {agent.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-base">
                {agent.description}
              </p>
              
              <button className="w-full py-3.5 rounded-xl border border-white/10 bg-transparent hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all font-medium text-gray-300 text-sm flex items-center justify-center gap-2 group/btn mt-auto">
                Добавить в команду
                <ArrowUpRight size={16} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
            <button className="btn btn-glass w-full group flex items-center justify-center gap-2">
            Смотреть всех агентов
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
