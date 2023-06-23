import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/components/Layout/Admin/admin.css'
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootRoutes } from './components/routes';
import 'bootstrap/dist/js/bootstrap.bundle'

const router = createBrowserRouter(RootRoutes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
