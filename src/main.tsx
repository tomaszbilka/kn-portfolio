import React, { lazy, Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { client } from './graphql/client';
import { CurrentUserContextProvider } from './context/context';
import * as Sentry from '@sentry/react';
import App from './App';
import Details from './components/Details';
import ErrorPage from './components/Errors/ErrorPage';
import Graphql from './pages/Graphql';
import Home from './pages/Home';
import OptimisticQuery from './pages/OptimisticQuery';

const Tasks = lazy(() => import('./pages/Tasks'));
const Websocket = lazy(() => import('./pages/Websocket'));

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
      {
        path: '/tasks',
        element: (
          <Suspense fallback={<p>Lazy loading...</p>}>
            <Tasks />
          </Suspense>
        ),
      },
      { path: '/optimisticquery', element: <OptimisticQuery /> },
      { path: '/details/:id', element: <Details /> },
      { path: '/graphql', element: <Graphql /> },
      {
        path: '/websocket',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Websocket />
          </Suspense>
        ),
      },
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <CurrentUserContextProvider>
          <RouterProvider router={router} />
        </CurrentUserContextProvider>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
