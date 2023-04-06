import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CurrentUserContextProvider } from './context/context';
import About from './pages/About';
import App from './App';
import Contact from './pages/Contact';
import Details from './components/Details';
import ErrorPage from './components/Errors/ErrorPage';
import Home from './pages/Home';

import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
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
