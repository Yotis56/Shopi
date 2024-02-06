import { FC } from "react";
import { ShippingInformation } from "../../models/Order.model";

interface Props {
    setShippingPrice: React.Dispatch<React.SetStateAction<number>>;
    setShippingInformation: React.Dispatch<React.SetStateAction<ShippingInformation>>,
    shippingInformation: ShippingInformation;
}

export const CheckoutInformation: FC<Props> = ({ setShippingPrice, setShippingInformation, shippingInformation}) => {
    
    const today = new Date()
    today.setDate(today.getDate() + 2)
    const deliveryDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement
        setShippingPrice(parseFloat(target.value))
        setShippingInformation({
            ...shippingInformation, 
            delivery: target.value === '5.99' ? 'standard' : 'express'
        })
    }
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = event.target
        setShippingInformation({
            ...shippingInformation,
            [target.name]: target.value, 
        })
    }

    return (
        <form className="mt-2.5 ml-16 w-7/12">
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold pb-2 border-b border-solid border-slate-700 ">Shipping Information</h3>
                <div className="name-container mt-2.5 flex justify-between gap-3 h-14">
                    <div className="input-container flex flex-col w-3/6">
                        <label htmlFor="firstName" className="text-sm">First Name</label>
                        <input  id="firstName" name="firstName" type="text" className="border border-solid border-slate-400 rounded h-9 flex-1 pl-3.5" value={shippingInformation.firstName} onChange={handleFormChange} />
                    </div>
                    <div className="input-container flex flex-col w-3/6">
                        <label htmlFor="lastName" className="text-sm">Last Name</label>
                        <input  id="lastName" name="lastName" type="text" className="border border-solid border-slate-400 rounded h-9 flex-1 pl-3.5" value={shippingInformation.lastName} onChange={handleFormChange}/>
                    </div>
                </div>
                <div className="mt-2.5 flex w-full h-14 gap-3">
                    <div className="flex flex-col w-3/6">
                        <label htmlFor="country" className="text-sm">Country</label>
                        <select name="country" id="country" className="border border-solid border-slate-400 rounded h-9 flex-1 pl-3.5" value={shippingInformation.country} onChange={handleFormChange}>
                            <option value="" ></option>
                            <option value="colombia">Colombia</option>
                            <option value="ecuador">Ecuador</option>
                            <option value="peru">Perú</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-3/6">
                        <label htmlFor="city" className="text-sm">City</label>
                        <input  id="city" name="city" type="text" className="border border-solid border-slate-400 rounded h-9 flex-1 pl-3.5" value={shippingInformation.city} onChange={handleFormChange}/>
                    </div>
                </div>
                <div className="input-container mt-2.5 flex flex-col w-full h-14">
                    <label htmlFor="address" className="text-sm">Address</label>
                    <input  id="address" name="address" type="text" className="border border-solid border-slate-400 rounded h-9 flex-1 pl-3.5" value={shippingInformation.address} onChange={handleFormChange}/>
                </div>
                <div className="input-container mt-2.5 flex flex-col w-full h-14">
                    <label htmlFor="phone" className="text-sm">Phone</label>
                    <input  id="phone" name="phone" type="tel" className="border border-solid border-slate-400 rounded h-9 flex-1 pl-3.5" value={shippingInformation.phone} onChange={handleFormChange}/>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold pb-2 border-b border-solid border-slate-700 mt-10">Delivery</h3>
                <div className="flex h-[75px] mt-4 items-center border border-solid border-slate-400 rounded-t-lg px-4">
                    <input type="radio" id="standard-shipping" name="shipping" value={5.99} className="w-6 h-6 mr-4 " onChange={handleInputChange}/>
                    <label htmlFor="standard-shipping" className="ms-2 text-base font-medium text-gray-900 flex-1">Standard Shipping</label>
                    <span className="text-xl font-semibold mr-3">$5.99</span>
                </div>
                <div className="flex h-[75px] items-center border border-solid border-slate-400 rounded-b-lg px-4">
                    <div className="">
                        <input type="radio" id="express-shipping" name="shipping" value={10.99} className="w-6 h-6 mr-4" onChange={handleInputChange}/>
                    </div>
                    <div className="ms-2 flex-1">
                        <label htmlFor="express-shipping" className="text-base font-medium text-gray-900">Express Shipping</label>
                        <p className="text-sm">{`Est. Delivery: ${deliveryDate}`}</p>
                    </div>
                    <span className="text-xl font-semibold mr-3">$10.99</span>
                </div>
            </div>
        </form>
    )
}

//tengo que poner una función handleClick, en donde si hago click sobre un input o sobre el label correspondiente, guarde en el estado el valor del envío.