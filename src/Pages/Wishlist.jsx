import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removefromwishlist, } from '../Redux/slice/Wishlistslice'
import { addTocart } from '../Redux/slice/Cartslice'



function Wishlist() {

  const dispatch = useDispatch()
  const { Wishlist } = useSelector((state) => state.WishlistReducer)


  return (

    <>


      <div className='container p-5'>


        <Row className='mt-5 p-5 justify-content-around'>


          {
            Wishlist?.length > 0 ?

              Wishlist.map(item => (



                <Col sm={12} md={4} lg={4} xl={2}>

                  <Card className='bg-dark p-3' style={{width:'18rem'}}>

                    <Card.Img height={'150px'} src={item.thumbnail}></Card.Img>

                    <Card.Body>

                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.price}</Card.Text>

                      <div className='d-flex justify-content-between'>

                        <button onClick={()=>{dispatch(removefromwishlist(item?.id))}} className='btn border'>

                          <i className='fa-solid fa-heart-circle-xmark' style={{ color: '#f90ba2' }}></i>

                        </button>

                        <button className='btn border' onClick={()=>{dispatch(addTocart(item))}} >

                          <i className='fa-solid fa-cart-plus' style={{ color: '#4dfd0d' }}></i>

                        </button>

                      </div>


                    </Card.Body>

                  </Card>


                </Col>



              ))

              :

              <h1>No Products</h1>
          }

        </Row>
      </div>




    </>


  )
}

export default Wishlist