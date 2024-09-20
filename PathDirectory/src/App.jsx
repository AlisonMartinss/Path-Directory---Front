/* MINHAS IMPORTAÇÕES */
import Home from '../src/Pages/Home/Home'
import Mainnn from '../src/Pages/Home2/main'

/* ROTAAS */
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'

import './Estiloapp/estiloDoApp.css'
import '../src/App.css'

import { useState } from 'react'

const browserRouter = 
createBrowserRouter(createRoutesFromElements(
<Route path="/">
  <Route index element={<Home/>}/>

</Route>
))





function App() {
  const [count, setCount] = useState(0)
  return (
    <RouterProvider router={browserRouter}/> 
    
  )
}

export default App
