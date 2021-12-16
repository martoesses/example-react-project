import React from 'react';

import routesPaths from 'constants/routesPaths';
import HomePage from 'pages/HomePage';
import AuthenticationPage from 'pages/AuthenticationPage';
import NotFoundPage from 'pages/NotFoundPage';

const routes = [
  {
    path: routesPaths.index,
    component: <HomePage />,
    exact: true,
    private: true,
  },
  {
    path: routesPaths.login,
    component: <AuthenticationPage />,
  },
  {
    path: routesPaths.register,
    component: <AuthenticationPage />,
  },
  {
    component: <NotFoundPage />,
  },
];

export default routes;
