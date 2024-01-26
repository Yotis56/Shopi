import React, {createContext, useContext, useState, FC, ReactNode} from 'react'

export type contextType = {
    count: number, 
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ShoppingCartContext = createContext<contextType>({} as contextType)

export const ShoppingCartProvider: FC<{children: ReactNode}> = ({children}) => {
    const [count, setCount] = useState(0)
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext)
}