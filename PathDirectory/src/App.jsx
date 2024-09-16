/* MINHAS IMPORTAÇÕES */
import Home from '../src/Pages/Home/Home'


import './Estiloapp/estiloDoApp.css'
import '../src/App.css'

import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='cabecalhoA'><Home/></header>
    </>
  )
}

export default App
