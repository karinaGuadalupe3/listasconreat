import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Saludo from './components/Saludo.jsx'
import './index_old.css'
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Saludo />
  </React.StrictMode>,
)
