import { IconContext } from 'react-icons'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import './styles.css'
import { FC } from 'react'
import { useApplicationContext } from '../../Context'

export const CheckoutSideMenu: FC<{setViewCart: React.Dispatch<React.SetStateAction<boolean>>}> = ({setViewCart}) => {
    const { viewCart } = useApplicationContext()
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
        </aside>
    )
}