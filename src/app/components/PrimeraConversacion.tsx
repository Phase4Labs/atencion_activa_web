export function PrimeraConversacion() {
  const steps = [
    {
      number: '01',
      title: 'Entender cómo se os escapan hoy las consultas',
      body: 'Revisamos de forma simple qué ocurre cuando entra una llamada o consulta y el equipo no puede atender en ese momento.',
    },
    {
      number: '02',
      title: 'Ver si existe un punto real de fuga',
      body: 'Buscamos identificar si hay pérdida por llamadas no atendidas, demoras de respuesta, fuera de horario o saturación operativa.',
    },
    {
      number: '03',
      title: 'Valorar si tiene sentido aplicar Atención Activa',
      body: 'Si vemos encaje, os mostramos cómo podría adaptarse a vuestra operación sin añadir complejidad innecesaria. Si no lo hay, os lo diremos con claridad.',
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
          Primera conversación
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: '#17202A', fontWeight: 700 }}
        >
          La primera conversación es simple: entender si estáis perdiendo oportunidades evitables
          y si tiene sentido resolverlo.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: '#4B5563', lineHeight: '1.7' }}
        >
          No planteamos una conversación comercial genérica. La primera llamada está pensada para
          entender cómo entran hoy las consultas, dónde se corta la atención y si Atención Activa
          encaja de forma realista en vuestra operativa.
        </p>

        {/* Steps */}
        <div className="max-w-4xl space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6">
              <div
                className="text-5xl flex-shrink-0"
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
