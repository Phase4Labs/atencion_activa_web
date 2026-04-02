import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contacto',
    element: <Contact />,
  },
]);
