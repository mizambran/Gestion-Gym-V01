import Table from 'react-bootstrap/Table';
import ItemClientes from './ItemClientes';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListaDeClientes = ({clientes}) => {
  return (
    <div className='container my-5'>
        <div className='mb-4'>
        <h2>Listado de Clientes</h2>
        <p>Aqui puedes ver todos tus clientes</p>
        </div>
        <div className='mb-3 '>
          <Button variant='success' className='me-3' as={Link} to={'/registrarClientes'} >➕ Agregar</Button>  
          <Button variant='warning'  >🍃 Importar</Button>
        </div>
        <Form className='mt-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Control placeholder='Ej: Juan Carlos' className='w-25' />
                <Button>Buscar</Button>
            </Form.Group>
        </Form>
      <Table striped bordered hover className='mt-4'>
      <thead>
        <tr >
          <th className='bg-primary'>ID</th>
          <th className='bg-primary'>Nombre</th>
          <th className='bg-primary'>Correo</th>
          <th className='bg-primary'>Vto</th>
          <th className='bg-primary'>Edición</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => <ItemClientes key={cliente.id} cliente={cliente}></ItemClientes>)}
      </tbody>
    </Table>
    </div>
  )
}

export default ListaDeClientes
