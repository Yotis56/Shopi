//libraries
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
//components
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
// styles
import './App.css'

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} /> 
      <Route path='my-account' element={ <MyAccount />}/>
      <Route path='my-order' element={ <MyOrder />}/>
      <Route path='my-orders' element={ <MyOrders />}/>
      <Route path='sign-in' element={ <SignIn />}/>
      <Route path='*' element={ <NotFound />}/>
    </>
  )
)

export default App
