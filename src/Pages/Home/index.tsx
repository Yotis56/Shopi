import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Product } from '../../models/Product.model'
import { ProductsDetails } from '../../components/ProductDetails'
import { Modal } from '../../components/Modal'
import { useApplicationContext } from '../../Context'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'


const Home = () => {
    const [data, setData] = useState<Product[]>([])
    const [viewModal, setViewModal] = useState<boolean>(false)
    const { setViewCart } = useApplicationContext()

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
                        <Card key={item.id} product={item} setViewModal={setViewModal}/>
                    ))
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