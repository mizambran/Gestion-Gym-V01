import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'
import Swal from 'sweetalert2';
/* Importo libreria date-fns */
import {add, sub, format, parseISO, isValid} from 'date-fns'
import ListaDeClientes from './ListaDeClientes';

const RegistrarClientes = ({clientes, setClientes}) => {

    

    const {register, handleSubmit, reset, formState:{errors}, watch ,setValue} = useForm()

    const fechaMinima = format(sub(new Date(), {months: 1}), 'yyyy-MM-dd')

    const fechaInicioWatch = watch("fechaInicioCliente");
    const planWatch = watch("planSeleccionado")

    
useEffect(() => {
  if (fechaInicioWatch && planWatch) {
    let mesesASumar = 0;
    
    // Definimos cuántos meses sumar según el plan
    switch (planWatch) {
      case "Mensual": mesesASumar = 1; break;
      case "Trimestral": mesesASumar = 3; break;
      case "Semestral": mesesASumar = 6; break;
      case "Anual": mesesASumar = 12; break;
      default: mesesASumar = 0;
    }

    if (mesesASumar > 0) {
      // Calculamos la fecha
      const fechaObj = parseISO(fechaInicioWatch);
      const nuevaFecha = add(fechaObj, { months: mesesASumar });
      
      if(isValid(nuevaFecha)){
        // INYECTAMOS el valor en el input de vencimiento
      setValue("fechaVencimientoCliente", format(nuevaFecha, 'yyyy-MM-dd'));
      }
    }
  }
}, [fechaInicioWatch, planWatch, setValue]);

    /* Create */
    const crearCliente = (data) => {
        const nuevoCliente = {
            id: uuidv4(),
            nombreCliente: data.nombreCliente,
            emailCliente: data.emailCliente,
            celularCliente: data.celularCliente,
            fechaInicioCliente: data.fechaInicioCliente,
            fechaVencimientoCliente: data.fechaVencimientoCliente,
            observacionCliente: data.observacionCliente
        };

        setClientes([...clientes, nuevoCliente])
        reset()

        Swal.fire(
            {
                title:"Cliente creado!",
                text:`El cliente "${data.nombreCliente}" se creo con exito.`,
                icon:"success"
            }
        )
    }

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
        <h3 className='my-4 '>Registrar Cliente</h3>
      <Form className='mb-5 col-10 col-md-5 col-lg-3 ' onSubmit={handleSubmit(crearCliente)}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ej: Juan Perez" {...register("nombreCliente", {
            required:"Este campo es obligatorio",
            minLength:{
                value:3,
                message:"Debe contener al menos 3 caracteres"
            },
            maxLength:{
                value:30,
                message: "No puede tener mas de 30 caracteres"
            }
        })} />
        <Form.Text className='text-danger'>{errors.nombreCliente?.message} </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ej: juanperez@gmail.com" {...register("emailCliente", {
            required:"Este campo es obligatorio",
            pattern:{
                value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El email debe ser un correo valido por ej: juanperez@gmail.com",
            }
        })} />
        <Form.Text className='text-danger'>{errors.emailCliente?.message} </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Celular</Form.Label>
        <Form.Control type="number" placeholder="Ej: 3816096533" {...register("celularCliente", {
            required:"Este campo es obligatorio",
            pattern:{
                value:/^[0-9]{10}$/,
                message:"No es un número valido"
            }
        })} />
        <Form.Text className='text-danger'>{errors.celularCliente?.message} </Form.Text>
      </Form.Group>  

      <Form.Group className="mb-3" >
        <Form.Label>Inicio</Form.Label>
        <Form.Control type="date" min={fechaMinima} {...register("fechaInicioCliente", {
            required:"Tiene que ingresar la fecha de inscripcion",
            
        })} />
        <Form.Text className='text-danger'>{errors.fechaInicioCliente?.message} </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Plan</Form.Label>
        <Form.Select {...register("planSeleccionado", {
            required:"Tenes que seleccionar una opción"
        })}>
            <option value="">Seleccionar Plan</option>
            <option value="Mensual">Mensual</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Semestral">Semestral</option>
            <option value="Anual">Anual</option>
        </Form.Select>
        <Form.Text className='text-danger'>{errors.planSeleccionado?.message} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Vencimiento</Form.Label>
        <Form.Control type="date" readOnly {...register("fechaVencimientoCliente", {
            
        })} />
        <Form.Text className='text-danger'>{errors.fechaVencimientoCliente?.message} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Observación</Form.Label>
        <Form.Control as="textarea" rows={3} {...register("observacionCliente")} />
      </Form.Group>
      <Button variant='success' type='submit'>Guardar</Button>
      <Button variant='secondary' className='ms-2' as={Link} to={'/Clientes'}>Cancelar</Button>
    </Form>
    </div>
  )
}

export default RegistrarClientes
