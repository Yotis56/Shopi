import { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";

import { Card } from '../../components/Card'
import { Product } from '../../models/Product.model'
import { ProductsDetails } from '../../components/ProductDetails'
import { Modal } from '../../components/Modal'
import { useApplicationContext } from '../../Context'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
import { IconContext } from 'react-icons';
import { useParams } from 'react-router-dom';
import { Categories } from '../../models/Category.model';


const Home = () => {
    const [data, setData] = useState<Product[]>([])
    const [viewModal, setViewModal] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const { setViewCart } = useApplicationContext()
    const params = useParams()
    let  categoryId: number | undefined
    if (!params.category) {
        categoryId = 0
    } else {
        categoryId = Categories[params.category as keyof typeof Categories]
    }

    const getDataFromApi = async (url: string) => {
        const rawData = await fetch(url)
        const jsonData: Product[] = await rawData.json()
        setData(jsonData)
    }

    //debería pensar en filtrar tanto por categoría, como por título. Una función que me arme la query dependiendo de lo que <tenga className=""></tenga>
    useEffect(  () => {
        getDataFromApi('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    }, [])

    useEffect( () => {
        if (categoryId !== undefined) {
            if (categoryId === 0) {
                getDataFromApi('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            } else {
                getDataFromApi(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}&offset=0&limit=20`)
            }
        }
    }, [categoryId])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        const value = event.target.value
        setSearch(value)
    }
    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            submitSearch()
        }
    }
    const submitSearch = ( ) => {
        getDataFromApi(`https://api.escuelajs.co/api/v1/products/?title=${search}&offset=0&limit=20`)
    }

    return (
        <>
            <div className="w-full flex justify-center">
                <input type="text" placeholder='Search...' className='rounded-lg border border-slate-400 w-2/5 p-3 mb-2 focus:outline-none' value={search} onChange={ handleInputChange} onKeyDown={handleEnterPress }/>
                <IconContext.Provider value={{ 'size': '25px', 'color': '#aeacac'}}>
                    <GoSearch className='relative right-[35px] top-[11px] cursor-pointer' onClick={submitSearch}/>
                </IconContext.Provider>
            </div>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mx-auto my-10'>
                {
                    data.length > 0 ? 
                    data?.map( item => (
                        <Card key={item.id} product={item} setViewModal={setViewModal}/>
                    ))
                    : 
                    <p>No products were found</p>
                }
            </div>
            <Modal setCloseModal={setViewCart} isShoppingCart={true}>
                <CheckoutSideMenu setViewCart={setViewCart} />
            </Modal>
            {viewModal && 
                <Modal setCloseModal={setViewModal}>
                    <ProductsDetails setViewModal={setViewModal} />
                </Modal>
            }
                

        </>
        
    )
}

export { Home }

// si la api falla, podría usar esta: https://fakestoreapi.com/