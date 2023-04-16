import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Home.css"
import Marquee from "react-fast-marquee";
// import BlogCard from "../component/UI/BlogCard"
import ProductCrad from '../component/UI/ProductCard';
import SpecialProduct from '../component/UI/SpecialProduct';
import { useSelector } from 'react-redux';

const Home = () => {

    const productState = useSelector((state) => state.product.products)

    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                <img src="images/product/1.jpg" alt="main-banner" className='img-fluid rounded-3' />
                                <div className='main-banner-content position-absolute'>
                                    <h4>Đang chiếu khởi chiếu</h4>
                                    <h5>Boruto</h5>
                                    <p>Bản quyền chỉ có Mỳ Anime</p>
                                    <Link className='button'>Xem ngay</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 d-flex flex-wrap gap-2 justify-content-between align-items-center'>
                            <div className='small-banner position-relative '>
                                <img src="images/product/small4.webp" alt="small-banner" className='img-fluid rounded-3' />
                                <div className='small-banner-content content-title position-absolute'>
                                    <h4 className='text-white fw-bold fs-4'>Hành Động</h4>

                                </div>
                            </div>
                            <div className='small-banner position-relative '>
                                <img src="images/product/thamtu.jpg" alt="small-banner" className='img-fluid rounded-3' />
                                <div className='small-banner-content content-title position-absolute'>
                                    <h4 className='text-white fw-bold fs-4'>Trinh Thám</h4>
                                </div>
                            </div>
                            <div className='small-banner position-relative '>
                                <img src="images/product/8417764.jpg" alt="small-banner" className='img-fluid rounded-3' />
                                <div className='small-banner-content content-title position-absolute'>
                                    <h4 className='text-white fw-bold fs-5'>Chuyển Sinh</h4>
                                </div>
                            </div>
                            <div className='small-banner position-relative '>
                                <img src="images/product/03634bea9c4e8316c2c94e218aa4ff6b.png" alt="small-banner" className='img-fluid rounded-3' />
                                <div className='small-banner-content content-title position-absolute '>
                                    <h4 className='text-white fw-bold fs-4'>Lãng Mạng</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="images/service.png" alt="services" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders orver $5</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="images/service-02.png" alt="services" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save to 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="images/service-03.png" alt="services" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="images/service-04.png" alt="services" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory Default Price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="images/service-05.png" alt="services" />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className='mb-0'>100% Protected Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>

                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>music and gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>Tv</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>watch</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>music and gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>Tv</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap-4 align-items-center'>
                                    <div>
                                        <h6>watch</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
            {/* <section className='featured-wrapper home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='section-heading'>Featured Collection</div>
                        <ProductCrad />
                        <ProductCrad />
                        <ProductCrad />
                        <ProductCrad />
                    </div>
                </div>
            </section> */}
            <section className='famous-wrapper py-5 home-wrapper-2 '>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card bg-black position-relative'>
                                <img src='images/product/sub.jpg' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='fs-6'> Your Name</h5>
                                    <h6>Mang đến nhiều cảm xúc</h6>
                                    <p className='fw-bold'>Trãi nghiệm màu sắc mới</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card bg-black position-relative'>
                                <img src='images/product/na.jpg' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='fs-6'> Naruto Shippuden</h5>
                                    <h6>Nhập vai cùng Naruto</h6>
                                    <p className='fw-bold'>Hành trình và nhiều cảm xúc</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card bg-black position-relative'>
                                <img src='images/product/dra.jpg' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute '>
                                    <h5 className='fs-6'> Dragon Ball super</h5>
                                    <h6 className='fs-5' style={{ color: "#be00ff" }}>Những pha combat lôi cuốn</h6>
                                    <p className='fw-bold' >Chiến đấu bảo vệ hành tinh</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card bg-black position-relative'>
                                <img src='images/product/oneP.jpg' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='fs-6 text-dark'>One Piece</h5>
                                    <h6 className='text-dark'>Hành trình khám phá</h6>
                                    <p className='text-dark fw-bold'>Tìm kiếm kho báu và những hòn đảo mới</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Special Products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <SpecialProduct />
                    </div>
                </div>
            </section>

            <section className='marquee-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/1.png" alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/2.png" alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/3.png" alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/4.png" alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/5.png" alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/6.png" alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/7.png" alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/logo/8.png" alt='brand' />
                                    </div>

                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='section-heading'>Our Popular Products</div>

                    </div>
                    <div className='row'>
                        <ProductCrad data={productState ? productState : []} />
                    </div>
                </div>
            </section>
            {/* <section className='blog-wrapper home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='section-heading'>Our laster Blogs</div>
                        <div className='row mb-4'>
                            <div className='col-3'>
                                <BlogCard />
                            </div>
                            <div className='col-3'>
                                <BlogCard />
                            </div>
                            <div className='col-3'>
                                <BlogCard />
                            </div>
                            <div className='col-3'>
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Home