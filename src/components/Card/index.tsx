import { FC } from "react";
import { useApplicationContext } from "../../Context";
import { Product } from "../../models/Product.model";

interface Props {
    key: number;
    product: Product;
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Card: FC<Props> = ({product, setViewModal}) => {
   const context = useApplicationContext()

    const handleClick = (event: React.MouseEvent<HTMLAreaElement, MouseEvent>) => {
        const target = event.target as HTMLElement
        if (target.id === 'counter') {
            context.addProductToShoppingcart(product)
        } else if (target.id === 'figure') {
            setViewModal(true)
            context.setSelectedProduct(product)
        }
    }
    return (
        <div className="bg-white cursor-pointer w-56 h-60" >
            <figure className="relative mb-2 w-full h-4/5" onClick={handleClick}>
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{product.category.name}</span>
                <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover rounded-lg" id="figure" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" id='counter'>+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.title}</span>
                <span className="text-lg font-medium">{`$${product.price}`}</span>
            </p>
        </div>
    )
}