

const ItemClientes = ({cliente}) => {
  return (
    <>
      <tr>
          <td>{cliente.id} </td>
          <td>{cliente.nombreCliente} </td>
          <td>{cliente.emailCliente} </td>
          <td> {cliente.fechaVencimientoCliente} </td>
          <td> 👁️✏️❌</td>
        </tr>
    </>
  )
}

export default ItemClientes
