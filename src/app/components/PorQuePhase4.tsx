export function PorQuePhase4() {
  const cards = [
    {
      title:
        "No partimos de una idea abstracta, sino de un cuello de botella real",
      body: "Atención Activa nace de un problema muy concreto: oportunidades que se pierden cuando la demanda entra y el equipo no puede responder en ese momento.",
    },
    {
      title:
        "Diseñamos para operativa real, no para procesos ideales",
      body: "La solución está planteada para equipos con prioridades cambiantes, interrupciones frecuentes y ventanas de atención limitadas.",
    },
    {
      title: "Capacidad de ejecución, no solo de diagnóstico",
      body: "Phase4 Systems aporta la capacidad de convertir esta lógica en algo útil y aplicable, no en una recomendación teórica que termina quedándose en una presentación.",
    },
    {
      title: "Una oferta concreta con respaldo serio detrás",
      body: "Atención Activa está pensada como una solución enfocada y útil. Phase4 Systems aporta el criterio técnico y operativo para sostenerla y hacer que encaje en una operación real.",
    },
  ];

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F2F1EC" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="text-xs uppercase tracking-widest mb-4"
          style={{
            color: "#3F5A4F",
            fontWeight: 600,
            letterSpacing: "0.15em",
          }}
        >
          Por qué Phase4 Systems
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: "#17202A", fontWeight: 700 }}
        >
          Atención Activa está respaldada por capacidad real de
          diseño e implementación.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: "#4B5563", lineHeight: "1.7" }}
        >
          Phase4 Systems está detrás de Atención Activa para
          convertir un problema operativo concreto en una
          solución útil y pensada para el día a día del cliente.
          No se trata de añadir tecnología por añadirla, sino de
          resolver un punto de fuga real en la atención
          comercial cuando la operación no da margen.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl"
              style={{
                backgroundColor: "#FFFEFB",
                border: "1px solid #DDD9CF",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3
                className="text-xl lg:text-2xl mb-4 leading-tight"
                style={{ color: "#17202A", fontWeight: 600 }}
              >
                {card.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4B5563", lineHeight: "1.7" }}
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