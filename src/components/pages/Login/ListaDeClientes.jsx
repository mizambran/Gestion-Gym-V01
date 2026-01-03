import Table from 'react-bootstrap/Table';
import ItemClientes from './ItemClientes';
import { Button } from 'react-bootstrap';

const ListaDeClientes = () => {
  return (
    <div className='container my-5'>
        <div className='mb-3'>
        <h2>Listado de Clientes</h2>
        <p>Aqui puedes ver todos tus clientes</p>
        </div>
        <div className='mb-3'>
          <Button variant='primary' className='me-3'  >➕ Agregar</Button>  
          <Button variant='warning'  >🍃 Importar</Button>  
        </div>
      <Table striped bordered hover className='mt-4'>
      <thead>
        <tr >
          <th className='bg-primary'>ID</th>
          <th className='bg-primary'>Nombre</th>
          <th className='bg-primary'>Correo</th>
          <th className='bg-primary'>Vto</th>
        </tr>
      </thead>
      <tbody>
        <ItemClientes />
      </tbody>
    </Table>
    </div>
  )
}

export default ListaDeClientes
