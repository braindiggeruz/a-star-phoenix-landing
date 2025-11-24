import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';

export const Pricing = () => {
  return (
    <section className="py-32 bg-[#05080F] relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Прозрачные <span className="text-gradient-gold">тарифы</span>
          </h2>
          <p className="text-xl text-gray-400">
            Инвестируйте в рост, а не в расходы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Start Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-[#0A0F1C] border border-amber-500/30 flex flex-col shadow-2xl shadow-amber-900/10"
          >
            <div className="absolute -top-3 left-8 px-3 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/20">
              Рекомендуем
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-400 mb-2">Старт</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">1 000 000</span>
                <span className="text-gray-500">сум / мес</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Идеально для малого бизнеса</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "1 ИИ-агент на выбор",
                "Подключение к Telegram",
                "Базовая аналитика",
                "Поддержка 24/7",
                "До 1000 диалогов в месяц"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-amber-500" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-accent w-full py-4 text-base font-bold shadow-lg shadow-amber-500/20">
              Начать бесплатно
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              7 дней пробный период. Отмена в любой момент.
            </p>
          </motion.div>

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col hover:bg-white/[0.04] transition-colors"
          >
            <div className="mb-8">
               <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-400">Кастом</h3>
                  <Shield size={18} className="text-gray-500" />
               </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">Индивидуально</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Для банков, холдингов и госкомпаний</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Неограниченное кол-во агентов",
                "Интеграция с CRM и ERP",
                "Развертывание на ваших серверах",
                "Персональный менеджер",
                "SLA гарантии"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-glass w-full py-4 text-base font-bold hover:bg-white/10">
              Связаться с отделом продаж
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Ответим в течение 15 минут
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
