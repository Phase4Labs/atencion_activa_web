export function EncajeOperativo() {
  const principles = [
    "No depende de disponibilidad constante",
    "No obliga a rehacer la operativa",
    "Ayuda a recuperar continuidad y contexto",
    "Protege la captación sin añadir presión innecesaria",
  ];

  return (
    <section
      id="encaje"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F7F6F2" }}
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
          Encaje operativo
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight max-w-4xl"
          style={{ color: "#17202A", fontWeight: 700 }}
        >
          Diseñado para encajar en tu operativa y
          potenciarla, no para complicarla.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-12 leading-relaxed max-w-4xl"
          style={{ color: "#4B5563", lineHeight: "1.7" }}
        >
          Atención Activa es una herramienta práctica para
          proteger la atención comercial cuando el equipo no
          puede llegar a todo. La lógica es simple: mantener
          continuidad sin obligaros a estar siempre disponibles
          ni a reorganizar toda tu operación.
        </p>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Principles */}
          <div className="space-y-4">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-xl"
                style={{
                  backgroundColor: "#FFFEFB",
                  border: "1px solid #DDD9CF",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#3F5A4F" }}
                />
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#17202A", fontWeight: 500 }}
                >
                  {principle}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Thesis Block */}
          <div
            className="p-10 rounded-2xl flex items-center"
            style={{
              backgroundColor: "#3F5A4F",
            }}
          >
            <p
              className="text-2xl lg:text-3xl leading-tight"
              style={{
                color: "#FFFEFB",
                fontWeight: 600,
                lineHeight: "1.4",
              }}
            >
              No necesitáis una solución que te añada más
              trabajo. Necesitas una solución que te permita
              cubrir lo que hoy se te escapa, logrando mayor
              retención y conversión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}