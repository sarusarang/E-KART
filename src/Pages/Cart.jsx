import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromcart } from '../Redux/slice/Cartslice'
import { useNavigate } from 'react-router-dom'
import { emptyCart } from '../Redux/slice/Cartslice'

function Cart() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector(state => state.CartReducer)

  const handlecheckout = () => {

    dispatch(emptyCart())
    navigate('/')

  }

  let totalprice = 0

  cart.map(item => {


    totalprice = totalprice + item.price * item.quantity;

  })

  return (
    <>

      <div className='container p-5'>

        <Row className='mt-5 p-5'>

          <Col sm={12} md={8} >

            <h3>Cart Summary</h3>

            <table className='table table-border shadow'>

              <thead>

                <tr>

                  
                  <th>Product name</th>
                  <th>Product image</th>
                  <th>Product price</th>
                  <th>Quantity</th>

                </tr>

              </thead>

              <tbody>

                {

                  cart?.map(item => (



                    <tr>

                      
                      <td>{item.title}</td>
                      <td><img src={item.thumbnail} height={'180px'} width={'200px'} alt="" /></td>
                      <td>{item.price}$</td>
                      <td>{item?.quantity}</td>
                      <td><button className='btn' onClick={() => { dispatch(removeFromcart(item?.id)) }}><i className='fa-solid fa-trash' style={{ color: 'red' }}></i></button></td>


                    </tr>

                  ))

                }




              </tbody>

            </table>

          </Col>

          <Col sm={12} md={4}>

            <div className='border shadow p-5 mt-5'>

              <h3>Total Product:<span className='text-info'>{cart.length}</span></h3>
              <h5>Total Price:<span className='text-warning'>{totalprice}</span></h5>

            </div>

            <div className='d-grid mt-5'>

              <button onClick={handlecheckout} className='btn btn-block btn-success'>Check Out</button>

            </div>

          </Col>

        </Row>

      </div>


    </>
  )
}

export default Cart