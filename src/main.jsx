import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>,
)
