import ReactDOM from 'react-dom'
import { FC, ReactNode } from 'react'
import './modal.css'

export type Parameters = {
    children: ReactNode;
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<Parameters> = ({children, setViewModal}) => {

    const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (event.currentTarget.className === 'modal-background') {
            setViewModal(false)
        }
    }

    const modalRoot = document.getElementById('modal')
    return modalRoot ? 
    ReactDOM.createPortal(
        <div className="modal-background" onClick={handleClick}>
            {children} 
        </div>
        , modalRoot )
    : null
}

export { Modal }