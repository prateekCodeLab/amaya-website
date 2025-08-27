// src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './App';

// Create router with proper future flags configuration
export const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
  }
});