import { Link, useLocation } from 'react-router';
import logoImage from 'figma:asset/cab6972422575801fd909214e76f7ce2b90ef409.png';

export function Navigation() {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFEFB] border-b border-[#DDD9CF] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logoImage} alt="Atención Activa" className="h-10 w-auto" />
            <div className="flex flex-col">
              <div className="text-2xl tracking-tight" style={{ color: '#17202A' }}>
                <span style={{ fontWeight: 700 }}>Atención Activa</span>
              </div>
              <div className="text-xs tracking-wide" style={{ color: '#6B7280' }}>
                una solución de Phase4 Systems
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('problema')}
              className="text-sm tracking-wide transition-colors hover:opacity-70"
              style={{ color: '#4B5563', fontWeight: 500 }}
            >
              Problema
            </button>
            <button
              onClick={() => scrollToSection('solucion')}
              className="text-sm tracking-wide transition-colors hover:opacity-70"
              style={{ color: '#4B5563', fontWeight: 500 }}
            >
              Solución
            </button>
            <button
              onClick={() => scrollToSection('encaje')}
              className="text-sm tracking-wide transition-colors hover:opacity-70"
              style={{ color: '#4B5563', fontWeight: 500 }}
            >
              Encaje
            </button>
            <Link
              to="/contacto"
              className="px-6 py-2.5 rounded-lg text-sm transition-all hover:opacity-90"
              style={{
                backgroundColor: '#3F5A4F',
                color: '#FFFEFB',
                fontWeight: 600,
              }}
            >
              Solicitar una conversación inicial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}