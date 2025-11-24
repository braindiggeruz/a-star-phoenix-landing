import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden">
      {/* Aurora Background - Refined */}
      <div className="absolute inset-0 bg-[#05080F] pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-amber-400 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
        >
          <Sparkles size={14} className="fill-current" />
          <span className="tracking-wide uppercase text-xs font-semibold">AI Revolution 2.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.05] tracking-tight max-w-5xl"
        >
          Ваша цифровая команда <br />
          <span className="text-gradient-gold">
            уже готова
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-[560px] mx-auto leading-relaxed"
        >
          Интеллектуальные агенты на базе ИИ, которые работают 24/7. 
          <span className="text-gray-200 block sm:inline"> Без больничных. Без ошибок. Только результат.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button className="btn btn-accent w-full sm:w-auto group h-12 px-8 text-base shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300">
            Попробовать бесплатно
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors group h-12 px-8 w-full sm:w-auto border border-white/10 rounded-full hover:bg-white/5">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <PlayCircle size={14} className="fill-current" />
            </div>
            <span className="font-medium">Как это работает?</span>
          </button>
        </motion.div>

        {/* Dashboard Preview Mockup - Enlarged & Polished */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-6xl scale-105"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-amber-500/10 to-transparent rounded-3xl blur-2xl opacity-50" />
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0F1C]/90 backdrop-blur-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="ml-6 h-5 w-48 bg-white/5 rounded-md" />
            </div>
            
            {/* Dashboard Content Mockup */}
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="hidden md:block col-span-1 space-y-4">
                <div className="h-32 rounded-xl bg-white/5 animate-pulse" />
                <div className="h-16 rounded-xl bg-white/[0.02]" />
                <div className="h-16 rounded-xl bg-white/[0.02]" />
              </div>
              
              {/* Main Area */}
              <div className="col-span-1 md:col-span-2 h-full min-h-[300px] rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 p-8 relative overflow-hidden flex flex-col justify-end">
                 {/* Chat Interface Mockup */}
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex-shrink-0 flex items-center justify-center text-amber-500 text-xs font-bold">AI</div>
                        <div className="space-y-2 max-w-[80%]">
                            <div className="h-4 w-24 bg-white/10 rounded text-[10px] text-gray-500 flex items-center px-1">ИИ-Агент</div>
                            <div className="p-4 rounded-2xl rounded-tl-none bg-white/5 border border-white/5 text-sm text-gray-300">
                                Давайте начнем с вашего бизнеса. Какие задачи вы хотите автоматизировать в первую очередь?
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 flex-row-reverse">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center text-blue-500 text-xs font-bold">CL</div>
                        <div className="space-y-2 max-w-[80%] flex flex-col items-end">
                            <div className="h-4 w-24 bg-white/10 rounded text-[10px] text-gray-500 flex items-center justify-end px-1">Клиент</div>
                            <div className="p-4 rounded-2xl rounded-tr-none bg-blue-500/10 border border-blue-500/20 text-sm text-blue-100">
                                Хочу подключить бота для Telegram, чтобы он отвечал на вопросы клиентов 24/7.
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
