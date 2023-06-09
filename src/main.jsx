import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthProvider from './Context/AuthProvider'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
    <App />
    <Toaster></Toaster>
  </React.StrictMode>
  </AuthProvider>
  ,
)
