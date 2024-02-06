import React, {createContext, useContext, useState, FC, ReactNode} from 'react'
import { AppProduct, Product, CartProduct } from '../models/Product.model';
import { Order } from '../models/Order.model';

// dentro del estado de la aplicación, los objetos pueden ser productos u objetos vacíos (inicio)

// tipo para poner el en genérico de createContext
export type contextType = {
    shoppingCart: CartProduct[];
    setShoppingCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
    addProductToCart: (newProduct: Product) => void;
    deleteProductFromCart: (productId: number) => void;
    increaseCartQuantity: (productId: number) => void;
    decreaseCartQuantity: (productId: number) => void;
    selectedProduct: AppProduct;
    setSelectedProduct: React.Dispatch<React.SetStateAction<AppProduct>>;
    viewCart: boolean, 
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
    orders: Order[];
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>
}

export const ApplicationContext = createContext<contextType>({} as contextType)

export const ApplicationContextProvider: FC<{children: ReactNode}> = ({children}) => {
    
    const [shoppingCart, setShoppingCart] = useState<CartProduct[]>([])
    const [selectedProduct, setSelectedProduct] = useState<AppProduct>({})
    const [viewCart, setViewCart] = useState<boolean>(false)
    const [orders, setOrders] = useState<Order[]>([])

    const addProductToCart = (newProduct: Product) => {
        const product = shoppingCart.find( item => newProduct.id === item.id)
        if (product) {
            increaseCartQuantity(newProduct.id)
        } else {
            setShoppingCart([...shoppingCart, {...newProduct, quantity: 1}])
        }
    }

    const increaseCartQuantity = (productId: number) => {
        const productIndex = shoppingCart.findIndex( item => item.id === productId)
        if (productIndex >= 0) {
            const newShoppingCart = [...shoppingCart]
            newShoppingCart[productIndex].quantity += 1
            setShoppingCart(newShoppingCart)
        }
    }

    const deleteProductFromCart = (productId: number) => {
        const productIndex = shoppingCart.findIndex( item => item.id === productId)
        if (productIndex >= 0) {
            const newShoppingCart = shoppingCart.filter( item => item.id !== productId)
            setShoppingCart(newShoppingCart)
        }
    }
    const decreaseCartQuantity = (productId: number) => {
        const productIndex = shoppingCart.findIndex( item => item.id === productId)
        if (productIndex >= 0) {
            if (shoppingCart[productIndex].quantity <= 1){
                deleteProductFromCart(productId)
            } else {
                const newShoppingCart = [...shoppingCart]
                newShoppingCart[productIndex].quantity -= 1
                setShoppingCart(newShoppingCart)
            }
        }
    }

    return (
        <ApplicationContext.Provider value={{
            shoppingCart,
            setShoppingCart,
            addProductToCart,
            deleteProductFromCart,
            increaseCartQuantity,
            decreaseCartQuantity,
            selectedProduct,
            setSelectedProduct,
            viewCart,
            setViewCart,
            orders, 
            setOrders
        }}>
            {children}
        </ApplicationContext.Provider>
    )
}
export const useApplicationContext = () => {
    return useContext(ApplicationContext)
}