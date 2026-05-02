import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Unsubscribe from './pages/Unsubscribe';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contacto',
    element: <Contact />,
  },
  {
    path: '/privacidad',
    element: <PrivacyPolicy />,
  },
  {
    path: '/terminos',
    element: <TermsAndConditions />,
  },
  {
    path: '/unsubscribe',
    element: <Unsubscribe />,
  },
]);
