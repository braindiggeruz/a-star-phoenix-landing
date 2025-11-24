import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { USP } from './components/USP';
import { Agents } from './components/Agents';
import { Cases } from './components/Cases';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#05080F] text-white overflow-x-hidden font-body selection:bg-amber-500/30">
      <Header />
      <main>
        <Hero />
        <USP />
        <Agents />
        <Cases />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
