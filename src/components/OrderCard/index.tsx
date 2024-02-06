import { FC } from 'react'
import { CartProduct } from '../../models/Product.model'
import { useApplicationContext } from '../../Context'
import { FiTrash2 } from "react-icons/fi";


export const OrderCard: FC<{product: CartProduct}> = ({product}) => {

    const {
        decreaseCartQuantity, 
        increaseCartQuantity, 
        deleteProductFromCart
    } = useApplicationContext()

    const handleRemoveItemFromCart = () => {
        deleteProductFromCart(product.id)
    }
    const handleDecreaseQuantity = () => {
        decreaseCartQuantity(product.id)
    }
    const handleIncreaseQuantity = () => {
        increaseCartQuantity(product.id)
    }
    return (
        <div className="flex justify-between items-center mb-3 pr-2 bg-slate-100 rounded-lg">
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={product.images[0]} alt={product.title} />
            </figure>
            <div className="flex flex-col justify-between h-[90%]">
                <p className='text-sm font-light w-36 text-ellipsis'>{product.title}</p>
                <div className="pb-2 flex">
                    <button className='minus w-6 h-6 border border-slate-300 rounded-l-md bg-white' onClick={handleDecreaseQuantity}>-</button>
                    <span className='inline-block text-center w-6 h-6 border-y border-slate-200 text-xs leading-6'>{product.quantity}</span>
                    <button className='plus h-6 w-6 border border-slate-300 rounded-r-md bg-white' onClick={handleIncreaseQuantity}>+</button>
                </div>
            </div>
            <div className="flex flex-col justify-between h-[90%]">
                <p className='cursor-pointer pt-2 ml-auto' onClick={handleRemoveItemFromCart}>
                    <FiTrash2 />
                </p>
                <p className='text-lg font-medium'>{`$ ${product.quantity? product.price * product.quantity : 0}`}</p>
            </div>
        </div>
    )
}

// <div className="flex justify-between items-center mb-3">
//             <div className="flex items-center gap-2">
//                 <figure className='w-20 h-20'>
//                     <img className='w-full h-full rounded-lg object-cover' src={product.images[0]} alt={product.title} />
//                 </figure>
//                 <p className='text-sm font-light max-w-36'>{product.title}</p>
//             </div>
//             <div className="flex items-center gap-2">
//                 <p className='text-lg font-medium '>{`$ ${product.price}`}</p>
//                 <IconContext.Provider value={{size: "1.1em"}}>
//                     <div className="cursor-pointer">
//                         <IoIosCloseCircleOutline/>
//                     </div>
//                 </IconContext.Provider>
//             </div>
//         </div>