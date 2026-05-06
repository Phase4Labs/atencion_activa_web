export function CoberturaPractica() {
  const cards = [
    {
      title: 'Atender llamadas cuando el equipo no puede cogerlas',
      body: 'Cuando entra una llamada y no hay capacidad inmediata para atenderla, la interacción no tiene por qué terminar en silencio, espera o pérdida de la oportunidad.',
    },
    {
      title: 'Dar una primera respuesta a consultas de reserva',
      body: 'Una nueva consulta puede recibir una atención inicial adecuada que mantenga viva la interacción mientras el equipo recupera capacidad para continuarla.',
    },
    {
      title: 'Cubrir momentos fuera de horario o de alta carga operativa',
      body: 'La atención puede mantenerse activa también cuando el equipo está fuera de horario, resolviendo incidencias, coordinando entradas y salidas o absorbiendo picos de trabajo.',
    },
    {
      title: 'Encauzar la interacción hacia el siguiente paso',
      body: 'La persona que contacta no solo recibe respuesta: la interacción puede quedar orientada de forma clara para facilitar continuidad, seguimiento y recuperación posterior por parte del equipo.',
    },
    {
      title: 'Ayudar al equipo a retomar con más contexto',
      body: 'Cuando el equipo vuelve a tomar la interacción, no necesita empezar desde cero ni reconstruir a ciegas qué ha ocurrido. Eso reduce fricción y mejora continuidad.',
    },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F7F6F2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: '#3F5A4F', fontWeight: 600, letterSpacing: '0.15em' }}
        >
          Cobertura práctica
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: '#17202A', fontWeight: 700 }}
        >
          Qué puede cubrir Atención Activa en tu operativa diaria
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: '#4B5563', lineHeight: '1.7' }}
        >
          Atención Activa está pensada para cubrir momentos en los que una llamada o consulta —por
          teléfono o mensajería— no debería quedar desatendida aunque el equipo no pueda responder
          personalmente en ese instante. Estas son algunas de las situaciones donde puede aportar
          continuidad real.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl"
              style={{
                backgroundColor: '#FFFEFB',
                border: '1px solid #DDD9CF',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
              }}
            >
              <h3
                className="text-lg lg:text-xl mb-3 leading-tight"
                style={{ color: '#17202A', fontWeight: 600 }}
              >
                {card.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#4B5563', lineHeight: '1.7' }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
