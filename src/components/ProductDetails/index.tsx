import { FC } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import { useApplicationContext } from "../../Context";
import { CartProduct } from "../../models/Product.model";
import './styles.css'

export const ProductsDetails: FC<{setViewModal: React.Dispatch<React.SetStateAction<boolean>>}> = ({setViewModal}) => {

    const {selectedProduct, addProductToCart} = useApplicationContext()
    const handleButtonClick = () => {
        addProductToCart(selectedProduct as CartProduct)
    }

    return (
        <aside className="product-details flex flex-col fixed bg-white border border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className='font-meduim text-xl'>Details</h2>
                <IconContext.Provider value={{size: "1.5em"}}>
                    <div className="cursor-pointer">
                        <IoIosCloseCircleOutline onClick={() => setViewModal(false)}/>
                    </div>
                </IconContext.Provider>
            </div>
            <figure className="px-6">
                <img className="h-full mx-auto max-h-64 my-auto rounded-lg" src={selectedProduct.images[0]} alt={selectedProduct.title} />
            </figure>
            <p className="flex flex-col p-6 ">
                <span className="font-medium text-2xl mb-2">$ {selectedProduct.price}</span>
                <span className="font-medium text-md">{selectedProduct.title}</span>
                <span className="font-light text-sm">{selectedProduct.description}</span>
            </p>
            <div className="my-6 mx-auto">
                <button className="py-2.5 px-14 rounded-lg bg-green-900 text-slate-300" onClick={handleButtonClick}>Add to Cart</button>
            </div>
        </aside>
    )
}