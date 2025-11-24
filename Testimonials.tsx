import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "ИИ-консультант снял с нас весь входящий поток. Теперь мы не теряем ни одного клиента, даже в выходные.",
    author: "Ботиржон",
    role: "Основатель, GreenTech",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    text: "Внедрение заняло буквально 10 минут. Я не программист, но разобралась сразу. Очень удобная панель.",
    author: "Мадина",
    role: "Директор, BeautyZone",
    image: "https://images.unsplash.com/photo-1573496359-136d4755f3dc?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    text: "Сначала сомневался, но цифры говорят сами за себя. Продажи выросли на 30%, а расходов на персонал стало меньше.",
    author: "Алишер",
    role: "CEO, LogisticPro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-[#05080F] relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Доверие <span className="text-gradient-gold">бизнеса</span>
          </h2>
        </div>

        {/* Desktop Grid / Mobile Snap Scroll */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 rounded-3xl bg-[#0A0F1C] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col h-full min-w-[85vw] md:min-w-0 snap-center"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-10 h-10 group-hover:text-amber-500/10 transition-colors" />
              
              <div className="flex gap-1.5 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400/90" />
                ))}
              </div>

              <p className="text-gray-300 mb-8 relative z-10 text-lg leading-relaxed flex-grow">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/5 group-hover:ring-amber-500/20 transition-all"
                />
                <div>
                  <div className="font-bold text-white group-hover:text-amber-400 transition-colors">{item.author}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
