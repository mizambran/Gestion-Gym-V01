import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/pages/Home'
import Menu from './components/shared/Menu'
import Footer from './components/shared/Footer'
import Dashboard from './components/pages/Dashboard'
import ListaDeClientes from './components/pages/Login/ListaDeClientes'
import Musica from './components/pages/Musica'
import RegistrarClientes from './components/pages/Login/RegistrarClientes'
import { useEffect, useState } from 'react'


function App() {

  const clientesLocalStorage = JSON.parse(localStorage.getItem("clientesKey")) || [];
  
      const [clientes, setClientes] = useState(clientesLocalStorage);
  
      useEffect(() => {
          localStorage.setItem("clientesKey", JSON.stringify(clientes))
      }, [clientes])

  return (
    <>
    
    <BrowserRouter>
    <Menu></Menu>
    <main>
      <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/musica' element={<Musica />} ></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/clientes' element={<ListaDeClientes clientes={clientes} />}></Route>
    <Route path='/registrarClientes' element={<RegistrarClientes clientes={clientes} setClientes={setClientes} />}></Route>
    </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    
    </>
  )
}

export default App
