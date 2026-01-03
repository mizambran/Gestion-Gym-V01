import Card from 'react-bootstrap/Card';


const Dashboard = () => {
  return (
    <>
    <div className='container d-flex justify-content-evenly align-items-center my-5'>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Clientes</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Cobrado</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Pendiente Cobrar</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Dashboard
