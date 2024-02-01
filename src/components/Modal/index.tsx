import ReactDOM from 'react-dom'
import { FC, ReactNode } from 'react'
import './modal.css'
import { useApplicationContext } from '../../Context';

//Creo un tipo de los parámetros que recibe mi elemento, para luego pasarlos al generico FC
export type Parameters = {
    children: ReactNode;
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
    isShoppingCart?: boolean;
}

const Modal: FC<Parameters> = ({isShoppingCart, children, setCloseModal}) => {

    //Acá cogí y puse el evento inline, dentro del mismo handleClick, y TS infirió el tipo de evento.
    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        // event.target es de tipo EventTarget, pero esa interfaz no contiene nada, ni clases, ni id, ni nada. Para trabajar con el target tengo que hacer una aserción de tipo, diciendole el tipo de elemento HTML 
        const target = event.target as HTMLElement
        if (target.classList.contains('modal-background')) {
            setCloseModal(false)
        }
    }
    const {viewCart} = useApplicationContext()

    const modalRoot = document.getElementById('modal')
    // getElementById puede retornar un HTMLElement, o null (si no encuentra el elemento). Tenemos que descartar la opción de null para que no nos bote error
    return modalRoot ? 
    ReactDOM.createPortal(
        <div className={`modal-background ${isShoppingCart? 'modal_shoppingCart' : ''}${viewCart? '-open' : ''} `} onClick={handleClick}>
            {children} 
        </div>
        , modalRoot )
    : null
}

export { Modal }