import { NavLink } from 'react-router-dom'
import { NavbarLinkModel } from '../../models/navbar.model'
const NavBar = () => {
    const activeStyle = 'underline'
    const menu1: NavbarLinkModel[] = [
        {
            to: '/',
            text: 'All',
            className: ''
        },
        {
            to: '/clothes',
            text: 'clothes',
            className: ''
        },
        {
            to: '/electronics',
            text: 'electronics',
            className: ''
        },
        {
            to: '/furnitures',
            text: 'furnitures',
            className: ''
        },
        {
            to: '/toys',
            text: 'toys',
            className: ''
        },
        {
            to: '/others',
            text: 'others',
            className: ''
        },
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
        {
            to: '/shoppcar',
            text: '🛒',
            className: ''
        },
    ]
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
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
            </ul>
        </nav>
    )
}

export { NavBar }

