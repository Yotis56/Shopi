import { FC } from "react";
import { useShoppingCartContext } from "../../Context";

interface Props {
    key: number;
    categoryName: string;
    title: string;
    price: number;
    imageUrl: string[],
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Card: FC<Props> = ({categoryName, title, price, imageUrl, setViewModal}) => {
   const context = useShoppingCartContext()

    const handleClick = (event: React.MouseEvent<HTMLAreaElement, MouseEvent>) => {
        const target = event.target as HTMLElement
        if (target.id === 'counter') {
            context.setCount(context.count + 1)
        } else if (target.id === 'figure') {
            console.log('entró en el if')
            setViewModal(true)
        }
    }
    return (
        <div className="bg-white cursor-pointer w-56 h-60" >
            <figure className="relative mb-2 w-full h-4/5" onClick={handleClick}>
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{categoryName}</span>
                <img src={imageUrl[0]} alt={title} className="w-full h-full object-cover rounded-lg" id="figure" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" id='counter'>+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">{`$${price}`}</span>
            </p>
        </div>
    )
}