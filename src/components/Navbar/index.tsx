import { NavLink } from 'react-router-dom'
import { NavbarLinkModel } from '../../models/navbar.model'
import { PiShoppingCart } from "react-icons/pi";

import { useApplicationContext } from '../../Context'
import { IconContext } from 'react-icons';
const NavBar = () => {

    const context = useApplicationContext()
    const activeStyle = 'underline'
    const menu1: NavbarLinkModel[] = [
        {
            to: '/',
            text: 'All',
            className: ''
        },
        {
            to: '/clothes',
            text: 'Clothes',
            className: ''
        },
        {
            to: '/electronics',
            text: 'Electronics',
            className: ''
        },
        {
            to: '/furnitures',
            text: 'Furnitures',
            className: ''
        },
        {
            to: '/shoes',
            text: 'Shoes',
            className: ''
        },
        {
            to: '/miscelaneous',
            text: 'Miscelaneous',
            className: ''
        }
    ]
    const menu2: NavbarLinkModel[] = [
        {
            to: '/email',
            text: 'ingyotis@gmail.com',
            className: 'text-black/60'
        },
        {
            to: '/my-orders',
            text: 'My orders',
            className: ''
        },
        {
            to: '/my-account',
            text: 'My Account',
            className: ''
        },
        {
            to: '/sign-in',
            text: 'Sign in',
            className: ''
        },
    ]
    const handleCartClick = () => {
        context.setViewCart(true)
    }

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                {menu1.map( item => (
                    <li className={item.className} key={item.text}>
                        <NavLink 
                            to={item.to}
                            className={ ({ isActive }) => isActive ? activeStyle : undefined} >
                                {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className='flex items-center gap-3'>
                {menu2.map( item => (
                    <li className={item.className} key={item.text}>
                        <NavLink to={item.to}>
                            {item.text}
                        </NavLink>
                    </li>
                ))}
                <li className='flex cursor-pointer' onClick={handleCartClick}>
                    <IconContext.Provider value={{ size: "1.5em"}}>
                        <PiShoppingCart />
                    </IconContext.Provider>
                    {
                        context.shoppingCart.length > 0 && 
                        <span className='bg-emerald-600 p-px rounded-full text-orange-50 text-xs/[13px] w-[15px] h-[15px] text-center'>
                                {` ${context.shoppingCart.reduce( (a, b) => a + b.quantity, 0)}`}
                        </span>
                    }
                </li>
            </ul>
        </nav>
    )
}

export { NavBar }

