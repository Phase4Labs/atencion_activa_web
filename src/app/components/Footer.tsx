import { Link } from 'react-router';
import logoImage from 'figma:asset/cab6972422575801fd909214e76f7ce2b90ef409.png';

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#17202A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-4">
              <img src={logoImage} alt="Atención Activa" className="h-10 w-auto opacity-90" />
              <div className="flex flex-col text-center md:text-left">
                <div className="text-xl tracking-tight" style={{ color: '#FFFEFB' }}>
                  <span style={{ fontWeight: 700 }}>Atención Activa</span>
                </div>
                <div className="text-xs tracking-wide" style={{ color: '#6B7280' }}>
                  una solución de Phase4 Systems
                </div>
              </div>
            </Link>

            {/* Copyright */}
            <div className="text-sm" style={{ color: '#6B7280' }}>
              © 2026 Phase4 Systems. Todos los derechos reservados.
            </div>
          </div>

          {/* Legal links */}
          <div className="flex justify-center gap-6 pt-4 border-t" style={{ borderColor: '#374151' }}>
            <Link
              to="/privacidad"
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: '#9CA3AF', fontWeight: 500 }}
            >
              Política de Privacidad
            </Link>
            <span style={{ color: '#4B5563' }}>|</span>
            <Link
              to="/terminos"
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: '#9CA3AF', fontWeight: 500 }}
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}