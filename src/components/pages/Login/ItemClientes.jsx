

const ItemClientes = ({cliente}) => {
  return (
    <>
      <tr>
          <td>{cliente.id} </td>
          <td>{cliente.nombre} </td>
          <td>{cliente.email} </td>
          <td> {cliente.vencimiento} </td>
          <td> 👁️✏️❌</td>
        </tr>
    </>
  )
}

export default ItemClientes
