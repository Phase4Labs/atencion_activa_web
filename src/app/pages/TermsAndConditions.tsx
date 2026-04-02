import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#F7F6F2' }}>
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:opacity-70"
          style={{ color: '#3F5A4F', fontWeight: 500 }}
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl mb-8" style={{ color: '#17202A', fontWeight: 700 }}>
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg" style={{ color: '#4B5563' }}>
          <p className="mb-6">
            <strong>Fecha de última actualización:</strong> 2 de abril de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              1. Información general
            </h2>
            <p className="mb-4">
              Este sitio web es propiedad de Phase4 Systems y proporciona información sobre Atención Activa, nuestra solución de gestión de alojamientos vacacionales.
            </p>
            <p className="mb-4">
              <strong>Titular:</strong> Phase4 Systems<br />
              <strong>Email:</strong> info@phase4systems.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              2. Objeto
            </h2>
            <p className="mb-4">
              Estos Términos y Condiciones regulan el acceso y uso de este sitio web. Al acceder y utilizar este sitio, aceptas estar vinculado por estos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              3. Uso del sitio web
            </h2>
            <p className="mb-4">
              Te comprometes a utilizar este sitio web de manera lícita y conforme a estos Términos y Condiciones. Queda prohibido:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Utilizar el sitio para fines ilegales o no autorizados</li>
              <li>Transmitir virus, malware o cualquier código dañino</li>
              <li>Intentar acceder sin autorización a áreas restringidas del sitio</li>
              <li>Realizar actividades que puedan dañar, sobrecargar o deteriorar el funcionamiento del sitio</li>
              <li>Recopilar datos de otros usuarios sin su consentimiento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              4. Propiedad intelectual
            </h2>
            <p className="mb-4">
              Todos los contenidos de este sitio web, incluyendo pero no limitándose a textos, gráficos, logotipos, imágenes, código fuente y software, son propiedad de Phase4 Systems o de sus licenciantes y están protegidos por las leyes de propiedad intelectual españolas e internacionales.
            </p>
            <p className="mb-4">
              Queda prohibida la reproducción, distribución, modificación o comunicación pública de los contenidos sin autorización expresa de Phase4 Systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              5. Servicios
            </h2>
            <p className="mb-4">
              Este sitio web es informativo y permite solicitar información sobre nuestros servicios. La contratación de los servicios de Atención Activa estará sujeta a condiciones contractuales específicas que se proporcionarán en el momento oportuno.
            </p>
            <p className="mb-4">
              Nos reservamos el derecho de modificar, suspender o interrumpir cualquier aspecto del sitio web en cualquier momento sin previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              6. Enlaces externos
            </h2>
            <p className="mb-4">
              Este sitio web puede contener enlaces a sitios web de terceros. Phase4 Systems no controla ni se hace responsable del contenido, políticas de privacidad o prácticas de sitios web de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              7. Limitación de responsabilidad
            </h2>
            <p className="mb-4">
              Phase4 Systems no garantiza la disponibilidad continua e ininterrumpida del sitio web. No seremos responsables de:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Interrupciones técnicas o caídas del servicio</li>
              <li>Errores u omisiones en el contenido</li>
              <li>Virus o elementos dañinos que puedan afectar a tu equipo</li>
              <li>Daños derivados del uso o imposibilidad de uso del sitio web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              8. Protección de datos
            </h2>
            <p className="mb-4">
              El tratamiento de datos personales se rige por nuestra{' '}
              <Link to="/privacidad" style={{ color: '#3F5A4F', textDecoration: 'underline' }}>
                Política de Privacidad
              </Link>
              , que forma parte integrante de estos Términos y Condiciones.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              9. Modificaciones
            </h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor desde su publicación en el sitio web. Te recomendamos revisar periódicamente estos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              10. Legislación aplicable y jurisdicción
            </h2>
            <p className="mb-4">
              Estos Términos y Condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del usuario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              11. Contacto
            </h2>
            <p className="mb-4">
              Para cualquier consulta relacionada con estos Términos y Condiciones, puedes contactarnos en:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@phase4systems.com<br />
              <strong>WhatsApp:</strong> +34 611 22 33 44
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
