import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Database,
  Cloud,
  Lock,
  LineChart,
  Cpu,
  Settings,
} from 'lucide-react';

export function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [Database, LineChart, Cpu, Lock, Cloud, Settings];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h1>
          <p className="text-xl text-red-100">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => {
              const Icon = icons[idx];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {language === 'en' ? 'Ready to Get Started?' : '¿Listo para Comenzar?'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {language === 'en'
              ? 'Contact us today to discuss how we can help transform your business.'
              : 'Contáctenos hoy para discutir cómo podemos ayudar a transformar su negocio.'}
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md transition-colors">
            {t.nav.contact}
          </button>
        </div>
      </section>
    </div>
  );
}
