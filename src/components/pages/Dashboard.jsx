import Card from 'react-bootstrap/Card';


const Dashboard = () => {
  return (
    <>
    <div className='container'>
      <div className="container-dashboard-titulo mt-4">
        <h2>Dashboard</h2>
      <p>Resumen general de tu empresa</p>
      </div>

      <div className="container-dashboard-filtroFecha">
        <form action="" className='text-center d-flex justify-content-center'>
          <div>
            <label htmlFor="" className='me-2'>Desde</label>
          <input type="date" />
          </div>
          <div>
            <label htmlFor="" className='ms-5 me-2'>Hasta</label>
          <input type="date" />
          </div>
        </form>
      </div>
      <div className='d-flex flex-wrap justify-content-evenly col-12 col-md-12 mt-5 gap-5 text-center '>
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
          <Card.Title>320</Card.Title>
          <Card.Text>
            Vineron el último mes
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="warning" className='col-8 col-md-3' >
        <Card.Header className='bg-danger'>Clientes Inactivos</Card.Header>
        <Card.Body>
          <Card.Title>320</Card.Title>
          <Card.Text>
            No vienen hace mas de un mes
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div className='d-flex flex-wrap justify-content-evenly col-12 col-md-12 my-5 gap-5 text-center'>
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

      <Card border="warning" className='col-8 col-md-3' >
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
