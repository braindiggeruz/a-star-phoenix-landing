import { Zap, Send, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#020408] border-t border-white/5 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold font-heading text-white">
                A-Star <span className="text-amber-400">Phoenix</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Возрождаем бизнес через технологии. Ваша цифровая команда, которая работает 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-base">Платформа</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">ИИ-Агенты</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Интеграции</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Безопасность</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Цены</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-base">Компания</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">О нас</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Кейсы</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Блог</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Контакты</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-base">Контакты</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="tel:+998901234567" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                    <Phone size={16} className="text-amber-500" /> 
                    <span>+998 90 123 45 67</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@astar-phoenix.uz" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                    <Mail size={16} className="text-amber-500" />
                    <span>hello@astar-phoenix.uz</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-500 mt-0.5" />
                <span>Ташкент, ул. Амира Темура, 107</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            © 2025 A-Star Phoenix. Все права защищены.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
