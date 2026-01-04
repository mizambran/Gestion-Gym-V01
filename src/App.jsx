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

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Menu></Menu>
    <main>
      <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/musica' element={<Musica />} ></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/clientes' element={<ListaDeClientes />}></Route>
    <Route path='/registrarClientes' element={<RegistrarClientes />}></Route>
    </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    
    </>
  )
}

export default App
