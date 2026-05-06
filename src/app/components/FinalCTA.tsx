import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#2F463D' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight"
          style={{ color: '#FFFEFB', fontWeight: 700 }}
        >
          Si tu captación depende de que alguien tenga un hueco para responder en ese
          instante, probablemente ya existe un punto de fuga.
        </h2>

        {/* Body */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed"
          style={{ color: '#F7F6F2', lineHeight: '1.7' }}
        >
          Atención Activa está pensada para ayudaros a proteger llamadas y consultas de reserva
          sin añadir más complejidad a tu operación.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="px-8 py-4 rounded-lg text-base transition-all hover:opacity-90 flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#FFFEFB',
              color: '#2F463D',
              fontWeight: 600,
            }}
          >
            Solicitar una conversación inicial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            className="px-8 py-4 rounded-lg text-base transition-all hover:opacity-90"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFEFB',
              border: '2px solid #FFFEFB',
              fontWeight: 600,
            }}
          >
            Ver si encaja en tu operativa
          </button>
        </div>
      </div>
    </section>
  );
}