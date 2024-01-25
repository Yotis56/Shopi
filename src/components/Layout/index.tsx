import { NavBar } from "../Navbar"
import { useOutlet } from "react-router-dom"


const Layout = () => {
    const outlet = useOutlet()
    return (
        <>
            <NavBar />
            <div className="mt-20">
                {outlet} 
            </div>
        </>
        
    )
}

export { Layout }