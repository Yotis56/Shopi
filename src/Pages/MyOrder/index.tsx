import { useParams } from 'react-router-dom'
import { useApplicationContext } from '../../Context'
import { OrderTable } from '../../components/OrderTable'

const MyOrder = () => {
    const { orders } = useApplicationContext()
    const params = useParams()
    const id = params.id ?? ''
    
    const order = id === 'last' ? orders.slice(-1)[0] : orders.find( item => item.orderNumber === parseInt(id))
   

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