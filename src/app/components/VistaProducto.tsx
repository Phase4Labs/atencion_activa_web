import { Link } from 'react-router';

export function VistaProducto() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#17202A" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="text-xs uppercase tracking-widest mb-4"
          style={{
            color: "#C9A97A",
            fontWeight: 600,
            letterSpacing: "0.15em",
          }}
        >
          La plataforma en detalle
        </div>

        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl mb-6 leading-tight max-w-4xl"
          style={{ color: "#FFFEFB", fontWeight: 700 }}
        >
          Una herramienta pensada para quien atiende y para quien gestiona.
        </h2>

        {/* Intro */}
        <p
          className="text-lg lg:text-xl mb-16 leading-relaxed max-w-3xl"
          style={{ color: "#A8B5B0", lineHeight: "1.7" }}
        >
          Cada perfil tiene lo que necesita: el equipo, una bandeja unificada
          para gestionar todas las conversaciones; los gestores, métricas claras
          sobre tiempos de respuesta y calidad de atención.
        </p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Members / Team view */}
          <div className="flex flex-col gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(63, 90, 79, 0.35)",
                  color: "#6EAA8F",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#6EAA8F" }}
                />
                Para el equipo
              </div>
              <h3
                className="text-xl lg:text-2xl mb-3 leading-tight"
                style={{ color: "#FFFEFB", fontWeight: 600 }}
              >
                Bandeja de entrada unificada
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#A8B5B0", lineHeight: "1.7" }}
              >
                Llamadas, mensajes, WhatsApp y correos en un solo lugar. El
                equipo tiene contexto completo de cada conversación y puede
                retomar sin empezar desde cero.
              </p>
            </div>

            {/* Screenshot */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 64px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src="/imgs/scene-04.png"
                alt="Vista del equipo – bandeja de entrada unificada con mensajes, llamadas y WhatsApp"
                className="w-full h-auto block"
                style={{ display: "block" }}
              />
            </div>
          </div>

          {/* Managers / Analytics view */}
          <div className="flex flex-col gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(201, 169, 122, 0.18)",
                  color: "#C9A97A",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#C9A97A" }}
                />
                Para el gestor
              </div>
              <h3
                className="text-xl lg:text-2xl mb-3 leading-tight"
                style={{ color: "#FFFEFB", fontWeight: 600 }}
              >
                Análisis de rendimiento y SLA
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#A8B5B0", lineHeight: "1.7" }}
              >
                Tiempos de respuesta, cumplimiento de SLA y distribución por
                canal. Visibilidad real sobre cómo se está atendiendo cada
                contacto y dónde hay margen de mejora.
              </p>
            </div>

            {/* Screenshot */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 64px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src="/imgs/scene-08-spanish.png"
                alt="Vista del gestor – panel de análisis con tiempos de respuesta, SLA y métricas por canal"
                className="w-full h-auto block"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-200"
            style={{
              backgroundColor: "#C9A97A",
              color: "#17202A",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.01em",
              boxShadow: "0 4px 24px rgba(201, 169, 122, 0.35)",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#D9BB91";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 32px rgba(201, 169, 122, 0.5)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A97A";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(201, 169, 122, 0.35)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Hablemos de cómo puede encajar en tu operativa
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <p style={{ color: "#5A6E68", fontSize: "0.875rem" }}>
            Sin compromiso. Una conversación para ver si tiene sentido.
          </p>
        </div>

      </div>
    </section>
  );
}
