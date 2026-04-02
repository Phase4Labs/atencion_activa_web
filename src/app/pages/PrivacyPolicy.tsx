import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function PrivacyPolicy() {
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
          Política de Privacidad
        </h1>

        <div className="prose prose-lg" style={{ color: '#4B5563' }}>
          <p className="mb-6">
            <strong>Fecha de última actualización:</strong> 2 de abril de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              1. Responsable del tratamiento
            </h2>
            <p className="mb-4">
              <strong>Identidad:</strong> Phase4 Systems<br />
              <strong>Finalidad:</strong> Gestionar la información y servicios de Atención Activa<br />
              <strong>Email de contacto:</strong> info@phase4systems.com<br />
              <strong>WhatsApp:</strong> +34 611 22 33 44
            </p>
            <p className="mb-4">
              Phase4 Systems es el responsable del tratamiento de los datos personales que nos proporciones a través de este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              2. Datos que recopilamos
            </h2>
            <p className="mb-4">
              Recopilamos los siguientes tipos de datos personales cuando utilizas nuestro sitio web:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Datos de contacto:</strong> Nombre, apellidos, email, teléfono, empresa</li>
              <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia</li>
              <li><strong>Datos de comunicación:</strong> Contenido de los mensajes que nos envías a través de formularios de contacto</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              3. Finalidad del tratamiento
            </h2>
            <p className="mb-4">Utilizamos tus datos personales para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Gestionar tu solicitud de información sobre nuestros servicios</li>
              <li>Responder a tus consultas y solicitudes de contacto</li>
              <li>Mejorar nuestro sitio web y la experiencia de usuario</li>
              <li>Realizar análisis estadísticos agregados y anónimos</li>
              <li>Cumplir con obligaciones legales aplicables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              4. Base legal del tratamiento
            </h2>
            <p className="mb-4">El tratamiento de tus datos se basa en:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consentimiento:</strong> Al enviar el formulario de contacto, consientes expresamente el tratamiento de tus datos</li>
              <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y realizar análisis estadísticos</li>
              <li><strong>Ejecución de contrato:</strong> Para gestionar la relación comercial si decides contratar nuestros servicios</li>
              <li><strong>Obligación legal:</strong> Para cumplir con las obligaciones legales aplicables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              5. Conservación de datos
            </h2>
            <p className="mb-4">
              Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Datos de contacto:</strong> Se conservarán mientras no solicites su supresión y durante los plazos legales de prescripción aplicables</li>
              <li><strong>Datos de navegación:</strong> Se conservarán durante el tiempo estrictamente necesario para las finalidades estadísticas y de seguridad</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              6. Destinatarios de los datos
            </h2>
            <p className="mb-4">
              Tus datos personales no serán cedidos a terceros, salvo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cuando sea necesario para la prestación del servicio (proveedores de servicios tecnológicos, hosting)</li>
              <li>Cuando exista una obligación legal</li>
              <li>Cuando hayas dado tu consentimiento expreso</li>
            </ul>
            <p className="mb-4">
              En caso de compartir datos con proveedores de servicios, estos actuarán como encargados del tratamiento y estarán obligados contractualmente a mantener la confidencialidad y seguridad de los datos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              7. Transferencias internacionales
            </h2>
            <p className="mb-4">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En estos casos, garantizamos que se adoptan las medidas adecuadas para proteger tus datos, incluyendo cláusulas contractuales tipo aprobadas por la Comisión Europea o mecanismos equivalentes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              8. Tus derechos
            </h2>
            <p className="mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Acceso:</strong> Conocer qué datos personales tratamos sobre ti</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado y transmitirlos a otro responsable</li>
              <li><strong>Revocación del consentimiento:</strong> Retirar el consentimiento prestado en cualquier momento</li>
            </ul>
            <p className="mb-4">
              Para ejercer estos derechos, puedes contactarnos en <strong>info@phase4systems.com</strong> o a través de WhatsApp al <strong>+34 611 22 33 44</strong>. Deberás acreditar tu identidad mediante documento válido.
            </p>
            <p className="mb-4">
              Además, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que el tratamiento de tus datos vulnera la normativa vigente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              9. Medidas de seguridad
            </h2>
            <p className="mb-4">
              Hemos implementado medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la pérdida, destrucción o alteración, incluyendo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cifrado de comunicaciones mediante SSL/TLS</li>
              <li>Control de acceso a los sistemas de información</li>
              <li>Procedimientos de backup y recuperación de datos</li>
              <li>Formación del personal en protección de datos</li>
              <li>Auditorías periódicas de seguridad</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              10. Cookies
            </h2>
            <p className="mb-4">
              Este sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de usuario y analizar el tráfico web. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.
            </p>
            <p className="mb-4">
              <strong>Tipos de cookies que utilizamos:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web</li>
              <li><strong>Cookies analíticas:</strong> Para analizar el uso del sitio web y mejorar su rendimiento</li>
            </ul>
            <p className="mb-4">
              Puedes configurar tu navegador para rechazar las cookies, aunque esto puede afectar a la funcionalidad del sitio web. Para más información sobre cómo gestionar las cookies, consulta la sección de ayuda de tu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              11. Menores de edad
            </h2>
            <p className="mb-4">
              Este sitio web no está dirigido a menores de 18 años. No recopilamos conscientemente datos personales de menores. Si eres padre o tutor y crees que tu hijo nos ha proporcionado datos personales, contacta con nosotros para que podamos eliminarlos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              12. Modificaciones de la política de privacidad
            </h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos tus datos.
            </p>
            <p className="mb-4">
              En caso de cambios sustanciales, te informaremos mediante aviso en el sitio web o, si disponemos de tu email, mediante comunicación directa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              13. Legislación aplicable
            </h2>
            <p className="mb-4">
              Esta Política de Privacidad se rige por la legislación española y europea aplicable en materia de protección de datos, en particular:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD)</li>
              <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</li>
              <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4" style={{ color: '#17202A', fontWeight: 600 }}>
              14. Contacto
            </h2>
            <p className="mb-4">
              Para cualquier cuestión relacionada con esta Política de Privacidad o el tratamiento de tus datos personales, puedes contactarnos:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@phase4systems.com<br />
              <strong>WhatsApp:</strong> +34 611 22 33 44
            </p>
            <p className="mb-4">
              También puedes consultar nuestros{' '}
              <Link to="/terminos" style={{ color: '#3F5A4F', textDecoration: 'underline' }}>
                Términos y Condiciones
              </Link>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
