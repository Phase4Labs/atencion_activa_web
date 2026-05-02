import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

type Status = 'loading' | 'success' | 'error' | 'invalid';

export default function Unsubscribe() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') ?? '';
  const [status, setStatus] = useState<Status>(email ? 'loading' : 'invalid');

  useEffect(() => {
    if (!email) return;

    async function unsubscribe() {
      try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/send-unsubscribe-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        setStatus(res.ok ? 'success' : 'error');
      } catch {
        setStatus('error');
      }
    }

    unsubscribe();
  }, [email]);

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#F7F6F2' }}>
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-lg mx-auto px-6 text-center">

          {/* Loading */}
          {status === 'loading' && (
            <div>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#d4e6df' }}>
                <Loader className="w-8 h-8 animate-spin" style={{ color: '#3f5a4f' }} />
              </div>
              <h1 className="text-2xl mb-3" style={{ color: '#17202A', fontWeight: 700 }}>
                Procesando tu solicitud...
              </h1>
              <p style={{ color: '#4B5563', fontSize: '15px' }}>
                Un momento, por favor.
              </p>
            </div>
          )}

          {/* Success */}
          {status === 'success' && (
            <div>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#d4e6df' }}>
                <CheckCircle className="w-8 h-8" style={{ color: '#3f5a4f' }} />
              </div>
              <h1 className="text-2xl lg:text-3xl mb-4" style={{ color: '#17202A', fontWeight: 700 }}>
                Te has dado de baja
              </h1>
              <p className="mb-6" style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.7' }}>
                Hemos registrado tu solicitud. La dirección{' '}
                <strong style={{ color: '#3f5a4f' }}>{email}</strong>{' '}
                no recibirá más comunicaciones comerciales de Atención Activa.
              </p>
              <p style={{ color: '#7a9488', fontSize: '13px' }}>
                Si tienes alguna duda, escríbenos a{' '}
                <a href="mailto:contacto@atencionactiva.es" style={{ color: '#3f5a4f' }}>
                  contacto@atencionactiva.es
                </a>
              </p>
            </div>
          )}

          {/* Error */}
          {status === 'error' && (
            <div>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#fdf0ee' }}>
                <XCircle className="w-8 h-8" style={{ color: '#e07340' }} />
              </div>
              <h1 className="text-2xl lg:text-3xl mb-4" style={{ color: '#17202A', fontWeight: 700 }}>
                Algo salió mal
              </h1>
              <p className="mb-6" style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.7' }}>
                No pudimos procesar tu solicitud. Por favor escríbenos directamente a{' '}
                <a href="mailto:contacto@atencionactiva.es" style={{ color: '#3f5a4f', fontWeight: 600 }}>
                  contacto@atencionactiva.es
                </a>{' '}
                y te damos de baja de inmediato.
              </p>
            </div>
          )}

          {/* Invalid — no email param */}
          {status === 'invalid' && (
            <div>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#fdf0ee' }}>
                <XCircle className="w-8 h-8" style={{ color: '#e07340' }} />
              </div>
              <h1 className="text-2xl lg:text-3xl mb-4" style={{ color: '#17202A', fontWeight: 700 }}>
                Enlace no válido
              </h1>
              <p className="mb-6" style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.7' }}>
                Este enlace no contiene una dirección de email válida. Para darte de baja escríbenos a{' '}
                <a href="mailto:contacto@atencionactiva.es" style={{ color: '#3f5a4f', fontWeight: 600 }}>
                  contacto@atencionactiva.es
                </a>
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
