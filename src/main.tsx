import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/nhsuk-frontend/dist/nhsuk.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
