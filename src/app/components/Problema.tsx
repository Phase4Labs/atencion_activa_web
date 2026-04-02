export function Problema() {
  const cards = [
    {
      title: 'Las consultas entran cuando el equipo no puede parar',
      body: 'Las llamadas y consultas no llegan cuando mejor encajan con la operativa. Llegan mientras el equipo está resolviendo incidencias, atendiendo huéspedes, coordinando entradas y salidas o fuera de horario.',
    },
    {
      title: 'Responder tarde también es perder',
      body: 'Muchas oportunidades no se pierden porque nadie responda nunca, sino porque la respuesta llega demasiado tarde. En este mercado, la rapidez de atención influye directamente en la probabilidad de convertir una consulta en reserva.',
    },
    {
      title: 'La captación no debería depender de que alguien esté libre',
      body: 'Cuando la atención depende de que una persona concreta pueda contestar justo en ese momento, la captación se vuelve frágil. Y en operaciones pequeñas, esa fragilidad aparece con frecuencia.',
    },
    {
      title: 'Añadir más carga al equipo no resuelve el problema',
      body: 'El problema no se arregla exigiendo más disponibilidad constante al equipo. Se arregla diseñando una forma de dar continuidad a la atención sin romper la operativa diaria.',
    },
  ];

  return (
    <section id="problema" className="py-20 lg:py-28" style={{ backgroundColor: '#F2F1EC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: '#3F5A4F', fontWeight: 600, letterSpacing: '0.15em' }}
        >
          El problema
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: '#17202A', fontWeight: 700 }}
        >
          El problema no suele ser la falta de demanda. Suele ser la falta de respuesta en el
          momento adecuado.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: '#4B5563', lineHeight: '1.7' }}
        >
          En equipos pequeños de alquiler vacacional, la atención comercial compite constantemente
          con la operativa diaria. Cuando el equipo está con huéspedes, incidencias, check-ins,
          coordinación o fuera de horario, responder a una nueva consulta no siempre es inmediato.
          Y cuando la respuesta se retrasa, la oportunidad se enfría o se pierde.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
                className="text-xl lg:text-2xl mb-4 leading-tight"
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
