import { FC } from "react"
import { CartProduct } from "../../models/Product.model"

export const SummaryCard: FC<{product: CartProduct}> = ({ product }) => {
    return (
        <div className="flex justify-between my-2">
            <figure className="h-20 w-20">
                <img src={product.images[0]} alt={product.title} className="w-full h-full rounded-lg object-cover border border-solid border-slate-400 " />
            </figure>
            <div className="text-container max-w-[70%] w-[70%]">
                <p className="text-slate-500 text-sm">{product.title}</p>
                <p className="font-semibold text-md">{`PRICE: $${product.price * product.quantity} (QTY: ${product.quantity})`}</p>
            </div>
        </div>
    )
}