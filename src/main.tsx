import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  release: 'javascript-react',
  dsn: 'https://5710d19531e847fbadc449a48503a024@o4505036527042560.ingest.sentry.io/4505036529598464',
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
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

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <RouterProvider router={router} />
    </CurrentUserContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
