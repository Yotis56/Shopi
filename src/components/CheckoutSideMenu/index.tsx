import { FC } from 'react'

import { useApplicationContext } from '../../Context'
import {OrderCard } from '../OrderCard'
import { NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import './styles.css'

export const CheckoutSideMenu: FC<{setViewCart: React.Dispatch<React.SetStateAction<boolean>>}> = ({setViewCart}) => {
    const { viewCart, shoppingCart } = useApplicationContext()
    const total = shoppingCart.reduce( (a, b) => a + (b.price * b.quantity), 0)

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
            <div className="flex flex-col flex-1 px-6 overflow-y-scroll">
                { shoppingCart.length > 0?
                    shoppingCart.map( item => (
                        <OrderCard key={item.id} product={item}/>
                    ))
                    : 
                    <p>There's no articles in your cart</p>
                }
            </div>
            {
                total > 0 ? 
                <div className="p-6">
                    <NavLink to='/checkout'>
                        <button className='py-2.5 w-full bg-[#2f4f4f] text-neutral-100 rounded-lg'>{`Checkout: $${total}`}</button>
                    </NavLink>
                </div>
                : <></>
            }
        </aside>
    )
}