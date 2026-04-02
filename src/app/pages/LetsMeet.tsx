import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { Calendar, Clock, Users } from 'lucide-react';

export function LetsMeet() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.letsMeet.title}</h1>
          <p className="text-xl text-red-100">{t.letsMeet.subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">{t.letsMeet.description}</p>
            </div>

            {/* Meeting Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === 'en' ? 'Flexible Scheduling' : 'Programación Flexible'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'en'
                    ? 'Choose a time that works best for you'
                    : 'Elija un horario que funcione mejor para usted'}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === 'en' ? '30-60 Minutes' : '30-60 Minutos'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'en'
                    ? 'Quick but comprehensive consultation'
                    : 'Consulta rápida pero completa'}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === 'en' ? 'Expert Team' : 'Equipo Experto'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'en'
                    ? 'Meet with our specialized consultants'
                    : 'Reúnase con nuestros consultores especializados'}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-md transition-colors text-lg font-medium">
              {t.letsMeet.cta}
            </button>

            <p className="mt-6 text-sm text-gray-500">
              {language === 'en'
                ? 'We typically respond within 24 hours'
                : 'Normalmente respondemos dentro de 24 horas'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
