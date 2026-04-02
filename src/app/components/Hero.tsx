import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, PhoneIncoming, MessageSquare, GitBranch, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F7F6F2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div>
            {/* Logo Badge */}
            <div className="flex items-center gap-3 mb-6">
              <img src='/imgs/logo_01.png' alt="Atención Activa" className="h-8 w-auto opacity-80" />
              {/* Eyebrow */}
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: '#3F5A4F', fontWeight: 600, letterSpacing: '0.15em' }}
              >
                Continuidad de atención para alquiler vacacional
              </div>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight"
              style={{ color: '#17202A', fontWeight: 700 }}
            >
              No dejéis perder reservas por no poder responder a tiempo.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg lg:text-xl mb-8 leading-relaxed"
              style={{ color: '#4B5563', lineHeight: '1.7' }}
            >
              Continuidad de atención para gestores de alquiler vacacional que necesitan seguir
              dando respuesta a llamadas y consultas aunque el equipo esté ocupado, fuera de
              horario o centrado en la operativa diaria.
            </p>

            {/* Benefit Chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Menos llamadas perdidas', 'Menos respuestas tardías', 'Menos oportunidades que se enfrían'].map(
                (chip, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm"
                    style={{
                      backgroundColor: '#FFFEFB',
                      color: '#3F5A4F',
                      border: '1px solid #DDD9CF',
                      fontWeight: 500,
                    }}
                  >
                    {chip}
                  </div>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="px-8 py-4 rounded-lg text-base transition-all hover:opacity-90 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#3F5A4F',
                  color: '#FFFEFB',
                  fontWeight: 600,
                }}
              >
                Solicitar una conversación inicial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                className="px-8 py-4 rounded-lg text-base transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#FFFEFB',
                  color: '#3F5A4F',
                  border: '2px solid #3F5A4F',
                  fontWeight: 600,
                }}
              >
                Ver cómo funciona
              </button>
            </div>
          </div>

          {/* Right Column - Hybrid Composition */}
          <div className="relative">
            {/* Background Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652882861012-95f3263cab63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYXBhcnRtZW50JTIwaW50ZXJpb3IlMjBuYXR1cmFsJTIwbGlnaHQlMjBkZXNrfGVufDF8fHx8MTc3NDU2NzUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Operational workspace"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Overlaid Flow Panel */}
            <div
              className="absolute bottom-8 left-8 right-8 p-6 rounded-xl shadow-2xl"
              style={{
                backgroundColor: '#FFFEFB',
                border: '1px solid #DDD9CF',
              }}
            >
              <p
                className="text-sm mb-6 italic leading-relaxed"
                style={{ color: '#6B7280', fontWeight: 500 }}
              >
                La atención comercial no puede depender de que alguien esté libre justo en ese momento.
              </p>

              {/* Flow Steps */}
              <div className="space-y-3">
                {[
                  { icon: PhoneIncoming, text: 'Entra llamada o consulta' },
                  { icon: MessageSquare, text: 'Recibe atención inicial' },
                  { icon: GitBranch, text: 'La interacción se encauza' },
                  { icon: CheckCircle2, text: 'El equipo retoma con contexto' },
                ].map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#3F5A4F' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: '#FFFEFB' }} />
                      </div>
                      <span className="text-sm" style={{ color: '#17202A', fontWeight: 500 }}>
                        {step.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}