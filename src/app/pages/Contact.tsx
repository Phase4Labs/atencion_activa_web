import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Mail, MessageCircle, Send, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  propiedades: string;
  mensaje: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    // Here you would typically send the data to your backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  const whatsappNumber = '34634097542'; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent('Hola, estoy interesado en Atención Activa y me gustaría recibir más información.');
  const email = 'contacto@atencionactiva.es';

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#F7F6F2' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F7F6F2' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: '#3F5A4F', fontWeight: 600, letterSpacing: '0.15em' }}
            >
              Contacto
            </div>
            <h1
              className="text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight"
              style={{ color: '#17202A', fontWeight: 700 }}
            >
              Hablemos de vuestra operativa
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: '#4B5563', lineHeight: '1.7' }}
            >
              Estamos aquí para entender vuestras necesidades y ver si Atención Activa puede ayudaros a proteger vuestras oportunidades de reserva.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div
                className="p-8 lg:p-10 rounded-2xl"
                style={{
                  backgroundColor: '#FFFEFB',
                  border: '1px solid #DDD9CF',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                <h2
                  className="text-2xl lg:text-3xl mb-6"
                  style={{ color: '#17202A', fontWeight: 700 }}
                >
                  Solicitar una conversación inicial
                </h2>
                <p
                  className="text-base mb-8 leading-relaxed"
                  style={{ color: '#4B5563', lineHeight: '1.7' }}
                >
                  Completad este formulario y nos pondremos en contacto para programar una primera conversación sin compromiso.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm mb-2"
                        style={{ color: '#17202A', fontWeight: 600 }}
                      >
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        {...register('nombre', { required: 'Este campo es obligatorio' })}
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: '#F7F6F2',
                          borderColor: errors.nombre ? '#d4183d' : '#DDD9CF',
                          color: '#17202A',
                        }}
                        placeholder="Vuestro nombre"
                      />
                      {errors.nombre && (
                        <p className="text-sm mt-1" style={{ color: '#d4183d' }}>
                          {errors.nombre.message}
                        </p>
                      )}
                    </div>

                    {/* Empresa */}
                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-sm mb-2"
                        style={{ color: '#17202A', fontWeight: 600 }}
                      >
                        Empresa *
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        {...register('empresa', { required: 'Este campo es obligatorio' })}
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: '#F7F6F2',
                          borderColor: errors.empresa ? '#d4183d' : '#DDD9CF',
                          color: '#17202A',
                        }}
                        placeholder="Nombre de vuestra empresa"
                      />
                      {errors.empresa && (
                        <p className="text-sm mt-1" style={{ color: '#d4183d' }}>
                          {errors.empresa.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2"
                        style={{ color: '#17202A', fontWeight: 600 }}
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', {
                          required: 'Este campo es obligatorio',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email no válido',
                          },
                        })}
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: '#F7F6F2',
                          borderColor: errors.email ? '#d4183d' : '#DDD9CF',
                          color: '#17202A',
                        }}
                        placeholder="email@empresa.com"
                      />
                      {errors.email && (
                        <p className="text-sm mt-1" style={{ color: '#d4183d' }}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm mb-2"
                        style={{ color: '#17202A', fontWeight: 600 }}
                      >
                        Teléfono *
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        {...register('telefono', { required: 'Este campo es obligatorio' })}
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: '#F7F6F2',
                          borderColor: errors.telefono ? '#d4183d' : '#DDD9CF',
                          color: '#17202A',
                        }}
                        placeholder="+34634097542"
                      />
                      {errors.telefono && (
                        <p className="text-sm mt-1" style={{ color: '#d4183d' }}>
                          {errors.telefono.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Número de propiedades */}
                  <div>
                    <label
                      htmlFor="propiedades"
                      className="block text-sm mb-2"
                      style={{ color: '#17202A', fontWeight: 600 }}
                    >
                      Número de propiedades que gestionáis
                    </label>
                    <select
                      id="propiedades"
                      {...register('propiedades')}
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: '#F7F6F2',
                        borderColor: '#DDD9CF',
                        color: '#17202A',
                      }}
                    >
                      <option value="">Seleccionar rango</option>
                      <option value="1-5">1-5 propiedades</option>
                      <option value="5-20">5-20 propiedades</option>
                      <option value="20-50">20-50 propiedades</option>
                      <option value="50+">Más de 50 propiedades</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm mb-2"
                      style={{ color: '#17202A', fontWeight: 600 }}
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      {...register('mensaje')}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none"
                      style={{
                        backgroundColor: '#F7F6F2',
                        borderColor: '#DDD9CF',
                        color: '#17202A',
                      }}
                      placeholder="Contadnos brevemente vuestra situación actual y qué os gustaría mejorar..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full px-8 py-4 rounded-lg text-base transition-all hover:opacity-90 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: submitted ? '#C9A97A' : '#3F5A4F',
                      color: '#FFFEFB',
                      fontWeight: 600,
                      opacity: submitted ? 0.8 : 1,
                    }}
                  >
                    {submitted ? (
                      <>
                        <span>Mensaje enviado</span>
                        <Send className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <span>Enviar solicitud</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Options - Takes 1 column */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#3F5A4F',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FFFEFB' }}
                  >
                    <MessageCircle className="w-6 h-6" style={{ color: '#3F5A4F' }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ color: '#FFFEFB', fontWeight: 600 }}
                    >
                      WhatsApp
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#F7F6F2', lineHeight: '1.6' }}
                    >
                      Hablemos directamente. Contactad por WhatsApp para una respuesta rápida.
                    </p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: '#FFFEFB',
                  border: '1px solid #DDD9CF',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#3F5A4F' }}
                  >
                    <Mail className="w-6 h-6" style={{ color: '#FFFEFB' }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ color: '#17202A', fontWeight: 600 }}
                    >
                      Email
                    </h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm break-all hover:underline"
                      style={{ color: '#3F5A4F', fontWeight: 500 }}
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              {/*<div
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: '#FFFEFB',
                  border: '1px solid #DDD9CF',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#3F5A4F' }}
                  >
                    <Phone className="w-6 h-6" style={{ color: '#FFFEFB' }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ color: '#17202A', fontWeight: 600 }}
                    >
                      Teléfono
                    </h3>
                    <a
                      href="tel:+34634097542"
                      className="text-sm hover:underline"
                      style={{ color: '#3F5A4F', fontWeight: 500 }}
                    >
                      +34 634 097 542
                    </a>
                  </div>
                </div>
              </div>*/}

              {/* Location */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: '#FFFEFB',
                  border: '1px solid #DDD9CF',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#3F5A4F' }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: '#FFFEFB' }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ color: '#17202A', fontWeight: 600 }}
                    >
                      Ubicación
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#4B5563', lineHeight: '1.6' }}
                    >
                      Costa del Sol, España
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
