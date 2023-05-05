import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CurrentUserContextProvider } from './context/context';
import * as Sentry from '@sentry/react';
import About from './pages/About';
import App from './App';
import Contact from './pages/Contact';
import Details from './components/Details';
import ErrorPage from './components/Errors/ErrorPage';
import Home from './pages/Home';

import './main.css';

Sentry.init({
  dsn: 'https://5710d19531e847fbadc449a48503a024@o4505036527042560.ingest.sentry.io/4505036529598464',
  environment: window.location.hostname === 'localhost' ? 'development' : 'production',
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  release: 'javascript-react',
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 1.0,
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home />, errorElement: <ErrorPage /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '/details/:id', element: <Details /> },
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CurrentUserContextProvider>
        <RouterProvider router={router} />
      </CurrentUserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
