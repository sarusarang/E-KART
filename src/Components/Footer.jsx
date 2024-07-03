import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (


    <>

      <div className='bg-dark p-5'>

        <div className=' container '>

          <div className='row'>



            <div className='col-md-3 col-12 mt-3'>

              <h3>E-Kart</h3>
              <p style={{ textAlign: 'justify' }}>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>


            <div className='col-md-3 col-12 text-center  mt-3'>

              <h3>Links</h3>

              <Link to={'/wish'} className='d-block mb-3 mt-3' style={{ textDecoration: 'none' }}>WISHLIST</Link>
              <Link to={'/cart'} style={{ textDecoration: 'none' }}>CART</Link>



            </div>


            <div className='col-md-3 col-12  mt-3'>

              <h3>References</h3>
              <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: 'none' }} className='d-block mt-3 mb-3'>React Bootstrap</a>
              <a href="https://react.dev/" className='d-block mt-3' style={{ textDecoration: 'none' }}>React</a>
              <a href="https://redux-toolkit.js.org/" className='d-block mt-3' style={{ textDecoration: 'none' }}>Redux</a>

            </div>


            <div className='col-md-3 col-12  mt-3'>

              <h3>Contact Us</h3>
              <p>Submit Your Email,so we can contact You...</p>

              <input type="email" placeholder='Enter Email' className='form-control' />
              <button type="button" class="btn btn-outline-secondary mt-2">SUBMIT</button>


            </div>

          </div>

        </div>

        <div className='mt-5'>

        <h6 className='text-center'>E-Kart 2024 &copy; All rights reserved.</h6>

        </div>

       

      </div>


    </>




  )
}

export default Footer