export function Solucion() {
  const steps = [
    {
      number: '01',
      title: 'La consulta no se queda sin atención',
      body: 'Cuando entra una llamada o consulta, no queda desatendida por el simple hecho de que el equipo esté ocupado, fuera de horario o centrado en otra prioridad operativa.',
    },
    {
      number: '02',
      title: 'La interacción se encauza desde el primer momento',
      body: 'La persona que contacta recibe una atención inicial adecuada, y la oportunidad no se enfría mientras el equipo recupera capacidad de atención.',
    },
    {
      number: '03',
      title: 'El equipo retoma con contexto',
      body: 'La información relevante queda preparada para que el equipo pueda continuar la interacción con más contexto y menos fricción.',
    },
    {
      number: '04',
      title: 'La operación gana continuidad',
      body: 'Menos consultas perdidas, menos demoras evitables y más capacidad para proteger oportunidades de reserva sin exigir disponibilidad constante.',
    },
  ];

  return (
    <section id="solucion" className="py-20 lg:py-28" style={{ backgroundColor: '#F7F6F2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: '#3F5A4F', fontWeight: 600, letterSpacing: '0.15em' }}
        >
          Cómo lo resolvemos
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: '#17202A', fontWeight: 700 }}
        >
          Damos continuidad a la atención cuando vuestro equipo no puede atender en ese momento.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: '#4B5563', lineHeight: '1.7' }}
        >
          Atención Activa está pensada para que una llamada o consulta de reserva no dependa
          exclusivamente de que alguien del equipo pueda contestar al instante. Ayuda a recibir,
          responder y encauzar las interacciones entrantes de forma consistente, incluso cuando la
          operativa diaria no da margen.
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6">
              <div
                className="text-4xl flex-shrink-0"
                style={{ color: '#C9A97A', fontWeight: 700, lineHeight: '1' }}
              >
                {step.number}
              </div>
              <div>
                <h3
                  className="text-xl lg:text-2xl mb-3 leading-tight"
                  style={{ color: '#17202A', fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#4B5563', lineHeight: '1.7' }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
