import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './Pages/App/App.tsx'
import { ApplicationContextProvider } from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <RouterProvider router={App}/>
    </ApplicationContextProvider>
  </React.StrictMode>,
)
