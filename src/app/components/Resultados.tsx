export function Resultados() {
  const cards = [
    'Menos consultas que se enfrían',
    'Menos contactos perdidos por falta de disponibilidad',
    'Más consistencia en la captación',
    'Mejor capacidad para proteger oportunidades de reserva',
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F2F1EC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: '#3F5A4F', fontWeight: 600, letterSpacing: '0.15em' }}
        >
          Resultados que ayuda a proteger
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: '#17202A', fontWeight: 700 }}
        >
          Protege resultados que ya dependen de vuestra capacidad de respuesta.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: '#4B5563', lineHeight: '1.7' }}
        >
          Atención Activa no crea demanda por sí sola. Lo que hace es ayudar a que la demanda que
          ya llega no se pierda por falta de respuesta, demora o discontinuidad en la atención. En
          operaciones pequeñas, esa diferencia puede ser muy relevante.
        </p>

        {/* Highlighted Statement */}
        <div
          className="p-10 rounded-2xl mb-12"
          style={{
            backgroundColor: '#FFFEFB',
            border: '2px solid #C9A97A',
          }}
        >
          <p
            className="text-2xl lg:text-3xl text-center leading-tight"
            style={{ color: '#17202A', fontWeight: 600, lineHeight: '1.4' }}
          >
            Lo que está en juego no es solo atender llamadas. Es proteger oportunidades de reserva.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: '#FFFEFB',
                border: '1px solid #DDD9CF',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
              }}
            >
              <p
                className="text-base leading-tight"
                style={{ color: '#17202A', fontWeight: 600 }}
              >
                {card}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
