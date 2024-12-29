/* MINHAS IMPORTAÇÕES */
import Home from '../src/Pages/Home/Home'
import Login from '../src/Pages/Login/Login'
import Loby from '../src/Pages/Loby/Loby'
import StarButton from './Pages/FunçõesGlobais/favorito/favorito'
import Curso from './Pages/curso/curso'
import Path from '../src/Pages/Path/Path'
import Criarmodulo from './Pages/CriarModulo/Criarmodulo'
import Conteudo from './Pages/Conteudo/Conteudo'
import Duvidas from './Pages/FunçõesGlobais/Duvidas/Duvidas'
import PathExplorer from './Pages/PathsExplorer/PathExplorer'
import ConteudoPath from './Pages/ConteudoPath/ConteudoPath'



/* ROTAAS */
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import './Estiloapp/estiloDoApp.css'
import '../src/App.css'

import { useState } from 'react'
import { PathProvider } from './Providers/pathProvider'

const browserRouter = 
createBrowserRouter(createRoutesFromElements(
<Route path="/">
  <Route index element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/loby" element={<Loby/>}/>
  <Route path="/star" element={<StarButton/>}/>
  <Route path="/loby/curso" element={<Curso/>}/>
  <Route path="/loby/lab" element={<Duvidas/>}/>
  <Route path="/loby/PathExplorer" element={<PathExplorer/>}/>
  <Route path="/loby/PathExplorer/ConteudoPath" element={<ConteudoPath/>}/>

  {/* Envolvendo apenas as rotas relacionadas a "path" com o contexto */}
  <Route path="/loby/path" element={
    <PathProvider>
      <Path />
    </PathProvider>}/>

  <Route path="/loby/path/modulo" element={
    <PathProvider>
      <Criarmodulo />
    </PathProvider>}/>
  
  <Route path="/loby/path/modulo/conteudo" element={
    <PathProvider>
       <Conteudo />
    </PathProvider>}/>
</Route>
))





function App() {
  const [count, setCount] = useState(0)
  return (
    <RouterProvider router={browserRouter}/> 
    
  )
}

export default App
