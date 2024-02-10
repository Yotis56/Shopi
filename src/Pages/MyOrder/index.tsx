import { useParams } from 'react-router-dom'
import { useApplicationContext } from '../../Context'
import { OrderTable } from '../../components/OrderTable'

const MyOrder = () => {
    const { orders } = useApplicationContext()
    const params = useParams()
    const id = params.id ?? ''

    const order = orders.find( item => item.orderNumber === parseInt(id))
   
    return (
        <>
            <div className="">
               { order && <OrderTable order={order}/>

               }
            </div>
        </>
    )
}

export { MyOrder }

/* orderid es number (creo, revisar) pero params.id es string. Si no logro la conversión de ambos a number, podría convertir orderId a string. O comparar con doble == 

La idea sería tenr un encabezado con: ´Número de pedido, Fecha del pedido y tal vez el estado
luego una tabla con: Foto del producto, información del producto (product title, no podría poner más), cantidad, precio y total de ese producto. 
Luego una tabla con el detalle del envío. Nombre, teléfono, dirección, ciudad, país y demás,
Por último un resumen del pedido con el subtotal, los taxes, el precio del envío y el valor total. 



*/
