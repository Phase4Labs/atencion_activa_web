import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Problema } from '../components/Problema';
import { Solucion } from '../components/Solucion';
import { ParaQuien } from '../components/ParaQuien';
import { EncajeOperativo } from '../components/EncajeOperativo';
import { Resultados } from '../components/Resultados';
import { CoberturaPractica } from '../components/CoberturaPractica';
import { PorQuePhase4 } from '../components/PorQuePhase4';
import { PrimeraConversacion } from '../components/PrimeraConversacion';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#F7F6F2' }}>
      <Navigation />
      <Hero />
      <Problema />
      <Solucion />
      <ParaQuien />
      <EncajeOperativo />
      <Resultados />
      <CoberturaPractica />
      <PorQuePhase4 />
      <PrimeraConversacion />
      <FinalCTA />
      <Footer />
    </div>
  );
}
