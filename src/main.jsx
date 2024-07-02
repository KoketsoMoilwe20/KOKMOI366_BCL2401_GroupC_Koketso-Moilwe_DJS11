import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoadingProvider } from './components/LoadingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoadingProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </LoadingProvider>
  
)
