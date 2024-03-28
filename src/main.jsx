import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'




import OperationsContextProvider from './context/CartContext.jsx';
import ContextProvider from './context/ItemListContext.jsx'


import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <OperationsContextProvider>
          <App />
        </OperationsContextProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
