import { Zap } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-lg group-hover:bg-amber-500/30 transition-all" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 border border-white/10">
              <Zap size={20} fill="currentColor" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-heading leading-none tracking-tight">
              A-Star <span className="text-amber-400">Phoenix</span>
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
              AI Agents Platform
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Возможности', 'Агенты', 'Кейсы', 'Цены'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button className="btn btn-primary text-sm px-5 py-2.5">
          Попробовать бесплатно
        </button>
      </div>
    </motion.header>
  );
};
