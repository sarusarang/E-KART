import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Wishlist from './Pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './bootstrap.min.css'
import { Toaster } from 'sonner'

function App() {


  return (
    <>

      <Header className = "postion-fixed"/>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Wish' element={<Wishlist />}></Route>

      </Routes>

      <Toaster richColors position='top-center'/>

      <Footer />
    </>
  )
}

export default App
