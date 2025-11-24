

export function FinalCTA() {
  return (
    <section className="py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent pointer-events-none" />
      <div className="container-custom relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Готовы освободить время?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Запустите команду ИИ-агентов за 1 день и освободите до 80 часов в месяц.
        </p>
        <button className="btn btn-primary text-lg px-10 py-5 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300">
          Начать бесплатно
        </button>
      </div>
    </section>
  );
}
