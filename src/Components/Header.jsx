import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Link, json } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Serach } from '../Redux/slice/ProductSlice'
import { useDispatch } from 'react-redux';

function Header() {

  const { Wishlist } = useSelector(state => state.WishlistReducer)
  const cart = useSelector(state => state.CartReducer)


  // to set the product deatils form local storage
  const [data, setData] = useState([])


  useEffect(() => {

    setData( JSON.parse(localStorage.getItem("response")))

  }, [])


  console.log(data);

  // Handle Search
  const handleSearch = (e) => {

    const searchTerm = e.target.value

    const res = data.filter(item => item.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()));

    dispatch(Serach(res))

  }

  const dispatch = useDispatch()

  return (

    <>

      <Navbar expand="lg" className="bg-body-tertiary p-3 position-fixed w-100" style={{ zIndex: '1000' }}>

        <Container fluid>

          <Navbar.Brand href="#" style={{ fontWeight: 'bold' }}>

            <Link to={'/'} className='text-decoration-none'>

              <ShoppingCart color="#000000" />  E-KART

            </Link>

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>

            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Link to={'/'} className='nav-link'>Home</Link>

              <Link to={'/cart'} className='nav-link'>Cart</Link>

              <Link to={'/wish'} className='nav-link'>WishList</Link>

            </Nav>

            <div style={{ width: '40%' }}>

              <input onChange={(e) => {handleSearch(e)}} type="text" placeholder='Search Your Product' className='form-control w-100' />

            </div>


            <div>

              <Link to={'/cart'} className='text-decoration-none'> <Button variant="outline-dark me-3"><ShoppingCart color="#ffffff" />CART<span class="badge rounded-pill bg-dark">{cart.length}</span></Button></Link>
              <Link to={'/wish'} className='text-decoration-none'> <Button variant="outline-dark me-5"><Heart color="#ff1414" />WISHLIST<span class="badge rounded-pill bg-dark">{Wishlist.length}</span></Button></Link>


            </div>






          </Navbar.Collapse>

        </Container>

      </Navbar>






    </>


  )
}

export default Header