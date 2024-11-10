/* MINHAS IMPORTAÇÕES */
import Home from '../src/Pages/Home/Home'
import Login from '../src/Pages/Login/Login'
import Loby from '../src/Pages/Loby/Loby'
import StarButton from './Pages/FunçõesGlobais/favorito/favorito'
import Curso from './Pages/curso/curso'
import Path from '../src/Pages/Path/Path'
import Criarmodulo from './Pages/CriarModulo/Criarmodulo'
import Conteudo from './Pages/Conteudo/Conteudo'



/* ROTAAS */
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import './Estiloapp/estiloDoApp.css'
import '../src/App.css'

import { useState } from 'react'

const browserRouter = 
createBrowserRouter(createRoutesFromElements(
<Route path="/">
  <Route index element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/loby" element={<Loby/>}/>
  <Route path="/star" element={<StarButton/>}/>
  <Route path="/loby/curso" element={<Curso/>}/>
  <Route path="/loby/path" element={<Path/>}/>
  <Route path="/loby/modulo" element={<Criarmodulo/>}/>
  <Route path="/loby/modulo/conteudo" element={<Conteudo/>}/>
</Route>
))





function App() {
  const [count, setCount] = useState(0)
  return (
    <RouterProvider router={browserRouter}/> 
    
  )
}

export default App
