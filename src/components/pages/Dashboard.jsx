import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
  return (
    <>
    <div className='container'>
      <div className="container-dashboard-titulo mt-4">
        <h2>Dashboard</h2>
      <p>Resumen general de tu empresa</p>
      </div>

      <div className="dashboardFiltroFechaClientes">
        <Form className='d-flex justify-content-center gap-3'>
      <Form.Group className="mb-3 text-center" >
        <Form.Label>Desde</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
      <Form.Group className="mb-3 text-center" >
        <Form.Label>Hasta</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
    </Form>
      </div>
      <div className='d-flex flex-wrap justify-content-evenly col-12 col-md-12 mb-5 gap-5 text-center '>
        <Card border="primary" className='col-8 col-md-3' >
        <Card.Header className='bg-primary'>Clientes Totales</Card.Header>
        <Card.Body>
          <Card.Title>320</Card.Title>
          <Card.Text>
            Activos + Inactivos
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="success" className='col-8 col-md-3' >
        <Card.Header className='bg-success'>Clientes Activos</Card.Header>
        <Card.Body>
          <Card.Title>200</Card.Title>
          <Card.Text>
            Vineron el último mes
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="danger" className='col-8 col-md-3' >
        <Card.Header className='bg-danger'>Clientes Inactivos</Card.Header>
        <Card.Body>
          <Card.Title>120</Card.Title>
          <Card.Text>
            No vienen hace mas de un mes
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div className="dashboardFiltroFechaCuotas mt-5">
        <Form className='d-flex justify-content-center gap-3'>
      <Form.Group className="mb-3 text-center" >
        <Form.Label>Desde</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
      <Form.Group className="mb-3 text-center" >
        <Form.Label>Hasta</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
    </Form>
      </div>
      <div className='d-flex flex-wrap justify-content-evenly col-12 col-md-12 mb-5 gap-5 text-center'>
        <Card border="primary" className='col-8 col-md-3' >
        <Card.Header className='bg-primary'>Cuotas Totales</Card.Header>
        <Card.Body>
          <Card.Title>$150.000</Card.Title>
          <Card.Text>
            Cobradas + Pend Cobrar
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="success" className='col-8 col-md-3' >
        <Card.Header className='bg-success'>Cobradas</Card.Header>
        <Card.Body>
          <Card.Title>$110.000</Card.Title>
          <Card.Text>
            Pagos hasta hoy
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="danger" className='col-8 col-md-3' >
        <Card.Header className='bg-danger'>Pendiente Cobrar</Card.Header>
        <Card.Body>
          <Card.Title>$40.000</Card.Title>
          <Card.Text>
            Cuotas vencidas hasta hoy
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
    </>
  )
}

export default Dashboard
