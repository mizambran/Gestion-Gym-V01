import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/pages/Home'
import Menu from './components/shared/Menu'
import Footer from './components/shared/Footer'
import Dashboard from './components/pages/Dashboard'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Menu></Menu>
    <main>
      <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    
    </>
  )
}

export default App
