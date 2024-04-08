import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproductThunk } from '../Redux/slice/ProductSlice'
import { useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { addtoWishList } from '../Redux/slice/Wishlistslice'
import { addTocart } from '../Redux/slice/Cartslice'

function Home() {

  const dispatch = useDispatch()

  const { product, loading, error } = useSelector((state) => state.productreducer)

  useEffect(() => {

    dispatch(fetchproductThunk())


  }, [])


  return (

    <>
      {/* <!-- Header--> */}

      <header className="bg-dark py-5">

        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">REDUX CART</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>

      </header>

      {/* <!-- Section--> */}

      <section className="py-5">

        <div className="container px-4 px-lg-5 mt-5">

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {

              loading ?
                <>

                  <Spinner animation="grow" variant="dark" />
                  <h2>Loading...</h2>

                </>

                :
                product.map(item => (


                  <div className="col mb-5">

                    <div className="card text-white bg-dark mb-3">

                      <Link to={`/details/${item?.id}`}>

                        <img className="card-img-top" height={'180px'} src={item?.thumbnail} alt="..." />

                      </Link>


                      <div className="card-body p-4">

                        <div className="text-center">

                          <h6 className="fw-bolder" style={{fontWeight:'bold'}}>{item.title}</h6>

                          {item?.price}₹
                        </div>

                        <div className='d-flex justify-content-center'>

                          <button type="button" onClick={()=>{dispatch(addtoWishList(item))}} class="btn btn-outline-dark me-4"><i className="fa-solid fa-heart-circle-plus" style={{ color: '#c91313' }}></i></button>
                          <button type="button" onClick={()=>{dispatch(addTocart(item))}} class="btn btn-outline-dark"><i className="fa-solid fa-cart-plus" style={{ color: ' #ffffff' }}></i></button>

                        </div>

                      </div>

                      {/* <!-- Product actions--> */}

                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>

                      </div>

                    </div>


                  </div>

                ))

            }


            



          </div>

        </div>

      </section>




    </>



  )
}

export default Home