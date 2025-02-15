// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './styles/index.css'
// import App from './App.tsx'
// import React from 'react'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './Routes/Routes.tsx'

// createRoot(document.getElementById('root')!).render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './Routes/Routes'; // Correct import path

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
