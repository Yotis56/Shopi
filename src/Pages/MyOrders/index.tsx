import { Link } from "react-router-dom"
import { useApplicationContext } from "../../Context"

const MyOrders = () => {
    const { orders } = useApplicationContext()
    return (
        <>
            <table className="w-[700px] my-12 mx-auto text-left">
                <thead>
                    <tr className="h-12 border-b border-slate-400">
                        <th className="font-semibold pl-5">Order Number</th>
                        <th className="font-semibold">Order Date</th>
                        <th className="font-semibold">Total Price</th>
                        <th className="font-semibold">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map( order => (
                            <tr key={order.orderNumber} className="h-12 border-b border-slate-400 text-sm text-slate-700">
                                <td className="pl-5">{order.orderNumber}</td>
                                <td>{order.date.toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}</td>
                                <td>${order.summaryInformation.totalNetPrice.toFixed(2)}</td>
                                <td className="text-cyan-600">
                                    <Link to={`/my-order/${order.orderNumber}`}>See details</Link>
                                </td>
                            </tr>
                        ))
                    }
                    <tr></tr>
                </tbody>
            </table>
        </>
    )
}

export { MyOrders }