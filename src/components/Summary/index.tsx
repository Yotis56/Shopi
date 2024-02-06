import { FC } from "react"
import { useApplicationContext } from "../../Context"
import { SummaryCard } from '../SummaryCard'
import { SummaryInformation } from "../../models/Order.model"

interface Props {
    summaryInformation: SummaryInformation;
}

export const Summary: FC<Props> = ({ summaryInformation }) => {
    const { shoppingCart } = useApplicationContext()
    
    return (
        <div className="summary flex flex-col flex-1 pl-2.5 pr-7 pt-3">
            <p className="text-xl font-semibold text-end border-b-2 border-slate-700 h-9">{`Your items (${summaryInformation.totalItems})`}</p>
            <div className="flex flex-col border-b border-slate-300">
                {
                    shoppingCart.map( product => (
                        <SummaryCard key={product.id} product={product}/>
                    ))
                }
            </div>
            <div className="input-container py-4 flex border-b border-slate-300">
                <input type="text" placeholder="Enter discount code or gift card" className=" flex-1 border border-solid border-slate-400 rounded h-9 pl-3.5 placeholder:text-sm"/>
                <button className="px-2 text-sm font-semibold">Apply</button>
            </div>
            <div className="subtotal-container mt-4">
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                    <span>Subtotal: </span>
                    <span>{`$${summaryInformation.totalPrice}`}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                    <span>Taxes: </span>
                    <span>{`$${(summaryInformation.taxes).toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                    <span>Shipping: </span>
                    <span>{`$${summaryInformation.shippingPrice}`}</span>
                </div>
                <div className="flex justify-between text-sm mt-2 font-semibold">
                    <span>Total Price: </span>
                    <span>{`$${(summaryInformation.totalNetPrice).toFixed(2)}`}</span>
                </div>
            </div>
        </div>
    )
}