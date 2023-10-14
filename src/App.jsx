import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Diccionario from './components/Diccionario'
import Saludo from './components/Saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Diccionario/> 
    </>
  )
}

export default App
