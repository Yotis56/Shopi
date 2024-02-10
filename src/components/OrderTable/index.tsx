import { FC } from 'react'
import { Order } from '../../models/Order.model'
import './styles.css'

export const OrderTable: FC<{order: Order}> = ({ order }) => {
    return (        
        <div className="order-container w-[85%] mx-auto">
            <div className="header flex text-sm w-6/12 justify-between mb-4 text-slate-800">
                <div className="">
                    <p className='font-semibold' >Order Number</p>
                    <p>{ order.orderNumber}</p>
                </div>
                <div className="">
                    <p className='font-semibold'>Order Date</p>
                    <p>{ order.date.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</p>
                </div>
                <div className="">
                    <p className='font-semibold'>Estatus</p>
                    <p>Pending</p>
                </div>
            </div>
            <div className="products-container">
                <h2 className='font-semibold text-lg pb-6'>Products</h2>
                <table className='products-table w-full border border-lg border-slate-200'>
                    <tbody>
                        <tr className='font-semibold h-12'>
                            <td className='table-padding'></td>
                            <td className='table-header'></td>
                            <td className='table-header'>Product</td>
                            <td className='table-header'>Quantity</td>
                            <td className='table-header'>Price</td>
                            <td className='table-header'>Total</td>
                            <td className='table-padding'></td>
                        </tr>
                        {order.items.map( item => (
                            <tr key={item.id} className='text-sm'>
                                <td className='table-padding'></td>
                                <td>
                                    <img src={item.images[0]} alt={item.title} className='w-20 h-20'/>
                                </td>
                                <td>
                                    <p>{item.title}</p>
                                </td>
                                <td>
                                    <p>{item.quantity}</p>
                                </td>
                                <td>
                                    <p>${item.price}</p>
                                </td>
                                <td>
                                    <p>${item.price * item.quantity}</p>
                                </td>
                                <td className='table-padding'></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="shipping-info mt-10 py-4 px-6 border border-slate-200">
                <h3 className='font-semibold text-lg pb-5 border-b border-slate-300'>Shipping Information</h3>
                <div className="flex text-sm gap-16 pt-4">
                    <div className="">
                        <h4 className='font-semibold mb-2'>Shipping Address</h4>
                        <p>{`${order.shippingInformation.firstName} ${order.shippingInformation.lastName}`}</p>
                        <p>{order.shippingInformation.phone}</p>
                        <p>{order.shippingInformation.address}</p>
                        <p>{order.shippingInformation.city}</p>
                        <p>{order.shippingInformation.country}</p>
                    </div>
                    <div className="">
                        <h4 className='font-semibold mb-2'>Shipping method</h4>
                        <p>{order.shippingInformation.delivery === 'express' ? 'Express Shipping' : 'Standard Shipping'}</p>
                    </div>
                </div>
            </div>
            <div className="summary-info  mt-10 py-4 px-6 border border-slate-200 mb-28">
                <h3 className='font-semibold text-lg pb-5 border-b border-slate-300'>Order Summary</h3>
                <div className="flex gap-52 text-sm pt-4 ">
                    <div className="">
                        <p>Subtotal</p>
                        <p>Shipping Cost</p>
                        <p>Taxes</p>
                        <p>Shipping Cost</p>
                    </div>
                    <div className="">
                        <p>${order.summaryInformation.totalPrice}</p>
                        <p>${order.summaryInformation.shippingPrice}</p>
                        <p>${order.summaryInformation.taxes.toFixed(2)}</p>
                        <p>${order.summaryInformation.totalNetPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

