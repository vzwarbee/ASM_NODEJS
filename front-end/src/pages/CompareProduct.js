import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import '../style/CompareProduct.css'
const CompareProduct = () => {
    return (
        <>
            <Helmet>
                <title>Comprare product</title>
            </Helmet>
            <BreadCrumb title={"Comprare product"} />
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>

                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image '>
                                    <img src='images/watch.jpg' alt='watch' />
                                </div>
                                <div className='product-card-detail mb-2'>
                                    <h5 className='title'>
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 INCH WITH Wi-fi+3G Tablet
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                </div>
                                <div className='product-detail'>
                                    <div >
                                        <h5>Brand: </h5>
                                        <p>Havel</p>
                                    </div>
                                    <div>
                                        <h5>Type: </h5>
                                        <p>Watch</p>
                                    </div>
                                    <div>
                                        <h5>Availablity: </h5>
                                        <p>In stock</p>
                                    </div>
                                    <div>
                                        <h5>Size: </h5>
                                        <p className='d-flex align-items-center justify-content-between gap-3'>
                                            <span>M</span>
                                            <span>L</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image '>
                                    <img src='images/watch.jpg' alt='watch' />
                                </div>
                                <div className='product-card-detail mb-2'>
                                    <h5 className='title'>
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 INCH WITH Wi-fi+3G Tablet
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                </div>
                                <div className='product-detail'>
                                    <div >
                                        <h5>Brand: </h5>
                                        <p>Havel</p>
                                    </div>
                                    <div>
                                        <h5>Type: </h5>
                                        <p>Watch</p>
                                    </div>
                                    <div>
                                        <h5>Availablity: </h5>
                                        <p>In stock</p>
                                    </div>
                                    <div>
                                        <h5>Size: </h5>
                                        <p className='d-flex align-items-center justify-content-between gap-3'>
                                            <span>M</span>
                                            <span>L</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image '>
                                    <img src='images/watch.jpg' alt='watch' />
                                </div>
                                <div className='product-card-detail mb-2'>
                                    <h5 className='title'>
                                        Honor T1 7.0 1 GB RAM 8GB ROM 7 INCH WITH Wi-fi+3G Tablet
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                </div>
                                <div className='product-detail'>
                                    <div >
                                        <h5>Brand: </h5>
                                        <p>Havel</p>
                                    </div>
                                    <div>
                                        <h5>Type: </h5>
                                        <p>Watch</p>
                                    </div>
                                    <div>
                                        <h5>Availablity: </h5>
                                        <p>In stock</p>
                                    </div>
                                    <div>
                                        <h5>Size: </h5>
                                        <p className='d-flex align-items-center justify-content-between gap-3'>
                                            <span>M</span>
                                            <span>L</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct