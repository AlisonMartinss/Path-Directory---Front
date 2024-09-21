/* MINHAS IMPORTAÇÕES */
import Home from '../src/Pages/Home/Home'
import Login from '../src/Pages/Login/Login'

/* ROTAAS */
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'

import './Estiloapp/estiloDoApp.css'
import '../src/App.css'

import { useState } from 'react'

const browserRouter = 
createBrowserRouter(createRoutesFromElements(
<Route path="/">
  <Route index element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>

</Route>
))





function App() {
  const [count, setCount] = useState(0)
  return (
    <RouterProvider router={browserRouter}/> 
    
  )
}

export default App
