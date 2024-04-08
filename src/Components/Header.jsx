import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const {Wishlist} = useSelector(state=>state.WishlistReducer)
  const cart = useSelector(state => state.CartReducer)

  return (

    <>




      <Navbar expand="lg" className="bg-body-tertiary">

        <Container fluid>

          <Navbar.Brand href="#" style={{ fontWeight: 'bold' }}>

            <Link to={'/'} className='text-decoration-none'>

              <ShoppingCart color="#000000" />E-KART

            </Link>

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link href="#action1">Home</Nav.Link>

              <Nav.Link href="#action2">Link</Nav.Link>

              <Nav.Link href="#action2">Link</Nav.Link>



            </Nav>



            <Link to={'/cart'} className='text-decoration-none'> <Button variant="outline-dark me-3"><ShoppingCart color="#ffffff" />CART<span class="badge rounded-pill bg-dark">{cart.length}</span></Button></Link>
            <Link to={'/wish'} className='text-decoration-none'> <Button variant="outline-dark me-5"><Heart color="#ff1414" />WISHLIST<span class="badge rounded-pill bg-dark">{Wishlist.length}</span></Button></Link>



          </Navbar.Collapse>

        </Container>

      </Navbar>






    </>


  )
}

export default Header