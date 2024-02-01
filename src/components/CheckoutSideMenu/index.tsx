import { FC } from 'react'

import { useApplicationContext } from '../../Context'
import {OrderCard } from '../OrderCard'
import { IconContext } from 'react-icons'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import './styles.css'

export const CheckoutSideMenu: FC<{setViewCart: React.Dispatch<React.SetStateAction<boolean>>}> = ({setViewCart}) => {
    const { viewCart, shoppingCart } = useApplicationContext()
    return (
        <aside className={`side_menu${viewCart? '-open': ''} flex flex-col fixed right-0 bg-white border border-black rounded-lg h-screen top-0`}>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-meduim text-xl'>Shopping cart</h2>
                <IconContext.Provider value={{size: "1.5em"}}>
                    <div className="cursor-pointer">
                        <IoIosCloseCircleOutline onClick={() => setViewCart(false)}/>
                    </div>
                </IconContext.Provider>
            </div>
            <div className="flex flex-col px-6">
                { shoppingCart.length > 0?
                    shoppingCart.map( item => (
                        <OrderCard key={item.id} product={item}/>
                    ))
                    : 
                    <p>There's no articles in your cart</p>
                }
            </div>
        </aside>
    )
}