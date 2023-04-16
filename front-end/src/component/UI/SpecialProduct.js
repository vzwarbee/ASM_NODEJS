import React, { useEffect } from 'react'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../../feature/product/productSlice'

const SpecialProduct = () => {
    const dispatch = useDispatch()
    const getProducts = () => {
        dispatch(getAllProducts())
    }
    useEffect(() => {
        getProducts()
    }, [])

    const productState = useSelector((state) => state.product.products)
    return (
        <>
            <div className='col-6 mb-4'>
                <div className='special-product-card'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img src={productState[0]?.image[0]?.url} className='img-fluid rounded' alt='watch' />
                        </div>
                        <div className='special-product-content w-50'>
                            <h5 className='brand'>{productState[0]?.title}</h5>
                            <h6 className='title' dangerouslySetInnerHTML={{ __html: productState[0]?.description }}>

                            </h6>
                            {/* <ReactStars count={5} size={25} value={ } edit={false} activeColor="#ffd700" /> */}
                            {/* <p className='price'>
                            <span className='red-p'>$100</span> &nbsp; <strike>$200</strike>
                        </p> */}
                            {/* <div className='discount-till d-flex align-align-items-center gap-10'>
                            <p className='mb-0'>
                                <strong>5</strong>&nbsp;days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>
                            </div>
                        </div> */}
                            <div className='prod-count mt-3'>
                                <p ><strong>Brand:</strong> {productState[0]?.brand}</p>
                                <p ><strong>Category:</strong> {productState[0]?.prodCategory}</p>
                                <p ><strong>View:</strong> 123</p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <Link className='button mt-3'>Xem</Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className='col-6 mb-4'>
                <div className='special-product-card'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img src={productState[1]?.image[0]?.url} style={{ height: "333px" }} className='img-fluid rounded' alt='watch' />
                        </div>
                        <div className='special-product-content w-50'>
                            <h5 className='brand'>{productState[1]?.title}</h5>
                            <h6 className='title' dangerouslySetInnerHTML={{ __html: productState[1]?.description }}>

                            </h6>
                            {/* <ReactStars count={5} size={25} value={ } edit={false} activeColor="#ffd700" /> */}
                            {/* <p className='price'>
                            <span className='red-p'>$100</span> &nbsp; <strike>$200</strike>
                        </p> */}
                            {/* <div className='discount-till d-flex align-align-items-center gap-10'>
                            <p className='mb-0'>
                                <strong>5</strong>&nbsp;days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>
                            </div>
                        </div> */}
                            <div className='prod-count mt-3'>
                                <p ><strong>Brand:</strong> {productState[1]?.brand}</p>
                                <p ><strong>Category:</strong> {productState[1]?.prodCategory}</p>
                                <p ><strong>View:</strong> 123</p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <Link className='button mt-3'>Xem</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default SpecialProduct