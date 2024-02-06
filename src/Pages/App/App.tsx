//libraries
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
//components
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { Checkout } from '../Checkout'
import { MyOrders } from '../MyOrders'
import { MyOrder } from '../MyOrder'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Layout } from '../../components/Layout'
// styles
import './App.css'

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} /> 
      <Route path='/checkout' element={ <Checkout />}/>
      <Route path='/my-account' element={ <MyAccount />}/>
      <Route path='/my-order' element={ <MyOrder />}/>
      <Route path='/my-orders' element={ <MyOrders />}/>
      <Route path='/my-orders/last' element={ <MyOrders />}/>
      <Route path='/sign-in' element={ <SignIn />}/>
      <Route path='*' element={ <NotFound />}/>
    </Route >
  )
)

export default App
