import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Product } from '../../models/Product.model'
import { ProductsDetails } from '../../components/ProductDetails'
import { Modal } from '../../components/Modal'


const Home = () => {
    const [data, setData] = useState<Product[]>([])
    const [viewModal, setViewModal] = useState<boolean>(false)

    useEffect(  () => {
        const retrieveData = async() => {
            const rawData = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            const jsonData: Product[] = await rawData.json()
            setData(jsonData)
        }
        retrieveData()
    }, [])

    return (
        <>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mx-auto my-20'>
                {
                    data?.map( item => (
                        <Card key={item.id} title={item.title} price={item.price} categoryName={item.category.name} imageUrl={item.images} setViewModal={setViewModal}/>
                    ))
                }
            </div>
            {viewModal && 
                <Modal setViewModal={setViewModal}>
                    <ProductsDetails />
                </Modal>
            }
        </>
        
    )
}

export { Home }

// si la api falla, podría usar esta: https://fakestoreapi.com/