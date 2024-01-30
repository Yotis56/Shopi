import React, {createContext, useContext, useState, FC, ReactNode} from 'react'
import { Product } from '../models/Product.model';

// dentro del estado de la aplicación, los objetos pueden ser productos u objetos vacíos (inicio)
export type AppProduct = Product | Record<string, never>

// tipo para poner el en genérico de createContext
export type contextType = {
    shoppingCart: AppProduct[];
    addProductToShoppingcart: (newProduct: AppProduct) => void;
    selectedProduct: AppProduct;
    setSelectedProduct: React.Dispatch<React.SetStateAction<AppProduct>>;
    viewCart: boolean, 
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ApplicationContext = createContext<contextType>({} as contextType)

export const ApplicationContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState<AppProduct[]>([])
    const [selectedProduct, setSelectedProduct] = useState<AppProduct>({})
    const [viewCart, setViewCart] = useState<boolean>(false)


    const addProductToShoppingcart = (newProduct: AppProduct) => {
            setShoppingCart([...shoppingCart, newProduct])
    }
    return (
        <ApplicationContext.Provider value={{
            shoppingCart, 
            addProductToShoppingcart,
            selectedProduct,
            setSelectedProduct,
            viewCart,
            setViewCart
        }}>
            {children}
        </ApplicationContext.Provider>
    )
}
export const useApplicationContext = () => {
    return useContext(ApplicationContext)
}