import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';


const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'} className='me-2'>Gestión Gym <span className='btn btn-outline-light  ms-3'>V-01</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <NavLink to={'/'} className={"nav-link"} > Inicio</NavLink>
            <NavLink to={'/Musica'} className={"nav-link"} > Musica</NavLink>
            <NavLink to={'/Clientes'} className={"nav-link"} >Clientes</NavLink>
            <NavLink to={'/Dashboard'} className={"nav-link"} >Dashboard</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
