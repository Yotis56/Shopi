import { useState } from 'react'
import { CheckoutInformation } from '../../components/CheckoutInformation'
import { Summary } from '../../components/Summary'
import { useApplicationContext } from '../../Context'
import { ShippingInformation, SummaryInformation } from '../../models/Order.model'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [shippingPrice, setShippingPrice] = useState<number>(0)
    const [shippingInformation, setShippingInformation] = useState<ShippingInformation>({
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        phone: '',
        delivery: ''
    })
    const { shoppingCart, setShoppingCart, orders, setOrders, setViewCart } = useApplicationContext()
    // crear una interfaz para este tipo 
    const summary: SummaryInformation = {
        totalItems: shoppingCart.reduce( (a, b) => a + b.quantity, 0),
        totalPrice: shoppingCart.reduce( (a, b) => a + (b.price * b.quantity), 0),
        shippingPrice: shippingPrice, 
        taxes: 0,
        totalNetPrice: 0,
    }
    summary.taxes = (summary.totalPrice * 0.07)
    summary.totalNetPrice = summary.totalPrice + summary.taxes + summary.shippingPrice

    const navigate = useNavigate()

    const handleSubmit = () => {
        setOrders([...orders, {
            orderNumber: Math.ceil(Math.random() * 10000000),
            date: new Date(),
            client: 'ingyotis@gmail.com',
            items: shoppingCart,
            shippingInformation: shippingInformation,
            summaryInformation: summary,
        }])
        setShoppingCart([])
        setViewCart(false)
        navigate("/")
    }

    return (
        <>
            <div className='flex gap-9'>
                <CheckoutInformation setShippingPrice={setShippingPrice} setShippingInformation={setShippingInformation} shippingInformation={shippingInformation}/>
                <Summary summaryInformation={summary} />
            </div>
            <div className="my-10">
                <button className='w-[90%] mx-auto h-12 block bg-[#2f4f4f] text-neutral-100 rounded-lg' onClick={handleSubmit}>Continue to Pay</button>
            </div>
        </>
    )
}

export { Checkout }