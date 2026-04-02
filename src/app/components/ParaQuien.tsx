export function ParaQuien() {
  const cards = [
    {
      title: "Equipos que gestionan múltiple propiedades",
      body: "Operaciones donde ya existe un volumen suficiente de llamadas y consultas como para que una respuesta tardía empiece a costar oportunidades, pero no siempre la estructura suficiente como para atender todo al momento.",
    },
    {
      title:
        "Equipos donde la atención comercial compite con la operativa",
      body: "Negocios en los que el mismo equipo que responde consultas también coordina check-ins, gestiona incidencias, atiende huéspedes y resuelve el día a día.",
    },
    {
      title:
        "Operaciones con demanda irregular o fuera de horario",
      body: "Entornos donde las consultas pueden entrar en momentos de alta carga, fuera del horario habitual o cuando no hay capacidad inmediata para atender bien cada contacto.",
    },
    {
      title: "Gestores que quieren una solución realista",
      body: "Empresas que saben que están perdiendo oportunidades por falta de respuesta o por demora, pero no quieren resolverlo con más complejidad, más herramientas inconexas o más dependencia de disponibilidad constante.",
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
          Para quién está pensado
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: "#17202A", fontWeight: 700 }}
        >
          Pensado para gestores de alquiler vacacional con
          equipos pequeños y operación intensa.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: "#4B5563", lineHeight: "1.7" }}
        >
          Atención Activa está diseñada para property managers y
          gestores de alquiler vacacional que necesitan proteger
          la atención comercial sin añadir más presión a un
          equipo ya cargado de operativa. Encaja especialmente
          bien en estructuras donde vender, coordinar y resolver
          ocurren al mismo tiempo.
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