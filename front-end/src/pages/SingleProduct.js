import React, { useEffect, useState } from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import Helmet from 'react-helmet'
import ProductCard from '../component/UI/ProductCard';
import "../style/Home.css"
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../style/SingleProduct.css"
import "../style/Contact.css"
import ReactImageZoom from 'react-image-zoom';
// import { BiGitCompare } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getAllProducts, getOneProduct } from '../feature/product/productSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { BsFillPencilFill } from 'react-icons/bs'


let schema = yup.object({
    star: yup.string().required("Trường này bắt buộc nhập!"),
    comment: yup.string().required("Trường này bắt buộc nhập!"),

});





const SingleProduct = () => {
    const getCustomerFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;
    const [orderedProduct, setOrderedProduct] = useState(true)
    const dispatch = useDispatch()

    const location = useLocation()
    const getIdProduct = location.pathname.split('/')[2];

    const productDetailState = useSelector((state) => state.product.productDetail)
    const popularState = useSelector((state) => state.product.products.slice(1, 5))

    const props = { width: 355, height: 450, zoomWidth: 450, img: productDetailState?.image[0]?.url ? productDetailState?.image[0]?.url : "https://www.parents.com/thmb/33GnBE0pqwhlEqxRWsrLiKT_28A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iclever-transnova-kids-bluetooth-headphones-c34f2f5a5fbf40bd86a3fe957544fa50.png" };


    useEffect(() => {
        dispatch(getOneProduct(getIdProduct))
        dispatch(getAllProducts())
    }, [dispatch])
    let checkComment = []
    let customerID = ""
    if (getCustomerFromLocalStorage) {
        customerID = getCustomerFromLocalStorage._id

    }
    if (productDetailState && productDetailState.ratings !== []) {
        checkComment = productDetailState.ratings.map((rating) => rating.postedby._id);
    }

    const isCommentedByCustomer = checkComment.find((id) => id === customerID);

    const ratingChanged = (newRating) => {
        formik.setFieldValue("star", newRating);
    }
    const formik = useFormik({
        initialValues: {
            star: "",
            comment: "",
            prodId: getIdProduct,
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getCustomerFromLocalStorage) {
                dispatch(addComment(values))
                toast.success("Thêm đánh giá thành công")
            } else {
                toast.error("Bạn chưa đăng nhập")
            }
        }
    });

    const date = new Date(productDetailState?.createdAt)
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear()



    return (
        <>
            <Helmet>
                <title>Product Detail</title>
            </Helmet>
            <BreadCrumb title={"Product Detail"} />

            <div className='single-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>
                                        {productDetailState?.title}
                                    </h3>
                                </div>
                                <div className='border-bottom py-3'>

                                    <div className=''>
                                        <p className='price'>Ratings</p>
                                        <div className='d-flex gap-3 align-items-center'>

                                            <div>
                                                <ReactStars count={5} size={24} value={productDetailState?.totalRating ? productDetailState?.totalRating : 2} edit={false} activeColor="#ffd700" />
                                            </div>

                                        </div>
                                        <a href="#reviews" className=' t-review' >Write a review</a>
                                    </div>
                                </div>
                                <div className='border-bottom py-3'>
                                    <div className='detail-body d-flex gap-10 align-items-center my-2'>
                                        <h5 className='fw-bold mb-0'>Type: </h5>
                                        <p className='mb-0'>{productDetailState?.type}</p>
                                    </div>
                                    <div className='detail-body d-flex gap-10 align-items-center my-2'>
                                        <h5 className='fw-bold mb-0'>brand: </h5>
                                        <p className='mb-0'>{productDetailState?.brand}</p>
                                    </div>
                                    <div className='detail-body d-flex gap-10 align-items-center my-2'>
                                        <h5 className='fw-bold mb-0'>Category: </h5>
                                        <p className='mb-0'>{productDetailState?.prodCategory}</p>
                                    </div>
                                    <div className='detail-body d-flex gap-10 align-items-center my-2 mb-4'>
                                        <h5 className='fw-bold mb-0'>Xuất bản: </h5>
                                        <p className='mb-0 '>{day} / {month} / {year}</p>
                                    </div>
                                    <div className='detail-body d-flex gap-10 flex-column mt-2 mb-3'>

                                        <div className='d-flex gap-5 flex-row align-items-center login-card m-0 p-0'>

                                            <div className='d-flex align-items-center gap-15'>
                                                <button className='button border-1'>Thêm vào Wishlist</button>
                                                <button className='button signup'>Xem Ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-4'>

                                        <div>
                                            <a href='/'>
                                                <AiOutlineHeart className='fs-5' /> Add to wishlist
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='description-wrapper py-5 home-wrapper-2'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <h4 className='fw-bold'>Description</h4>
                                <div className='bg-white p-3'>
                                    <p dangerouslySetInnerHTML={{ __html: productDetailState?.description }}>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='reviews' className='review-wrapper py-5 home-wrapper-2'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <h4 className='fw-bold'>Review</h4>

                                <div className='review-inner-wrapper'>
                                    <div className='review-head d-flex justify-content-between'>
                                        <div>
                                            <h4 className='fw-bold'>Custom reviews</h4>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <div>
                                                    <ReactStars count={5} size={24} value={productDetailState?.totalRating ? productDetailState?.totalRating : 2} edit={false} activeColor="#ffd700" />
                                                </div>

                                            </div>
                                        </div>
                                        {orderedProduct && (
                                            <div>
                                                <Link className=' text-dark text-decoration-underline mb-0'>Write a reviews</Link>
                                            </div>
                                        )}
                                    </div>
                                    <div className='review-form py-4'>
                                        <h4 className='fw-bold'>Write review</h4>
                                        {

                                            isCommentedByCustomer === customerID ? <p className='text-center fs-5'>Bạn đã thêm comment</p> : <form onSubmit={formik.handleSubmit}>
                                                <div>
                                                    <ReactStars count={5} size={24} value={formik.values.star} onChange={ratingChanged} edit={true} activeColor="#ffd700" />
                                                </div>
                                                <div className='mb-0 mt-0 error'>{formik.touched.star && formik.errors.star}</div>

                                                <div className='form-group mt-3'>
                                                    <textarea placeholder='Comment'
                                                        name="comment"
                                                        value={formik.values.comment}
                                                        onChange={formik.handleChange('comment')}
                                                        onBlur={formik.handleChange("comment")}
                                                        className='form-control w-100' cols="20" rows="3"></textarea>
                                                </div>
                                                <div className='mb-0 mt-0 error'>{formik.touched.comment && formik.errors.comment}</div>

                                                <div className='d-flex justify-content-end mt-3'>

                                                    <button className='button border-0' type='submit'>Submit review</button>
                                                </div>
                                            </form>

                                        }

                                    </div>
                                    <div className='reviews mt-3'>
                                        {
                                            productDetailState?.ratings?.map((item, index) => {
                                                const buttonUpComment = item?.postedby?._id === customerID

                                                const upComment = (e) => {

                                                    if (e) {
                                                        document.getElementById(`update-comment-${e}`).style.display = "block"
                                                        document.getElementById(`close-${e}`).style.display = "none"
                                                    }
                                                }
                                                const close = (e) => {

                                                    if (e) {
                                                        document.getElementById(`update-comment-${e}`).style.display = "none"
                                                        document.getElementById(`close-${e}`).style.display = "block"
                                                    }



                                                }
                                                return (
                                                    <div className='review mb-3' key={index}>
                                                        <div id={`update-comment-${index}`} className='position-relative'>
                                                            <button className='position-absolute border-0 fs-4 bg-transparent text-danger' style={{ top: "10px", right: "20px" }} onClick={() => close(index)}><AiOutlineClose /></button>
                                                            <div className='d-flex gap-4 align-items-center'>
                                                                <h5 className='fw-bold mb-0 error'>update comment</h5> |
                                                                <h5 className='fw-bold mb-0'>{item?.postedby?.lastname} {item?.postedby?.firstname}</h5>

                                                            </div>
                                                            <form onSubmit={formik.handleSubmit} className='mb-3'>
                                                                <div>
                                                                    <ReactStars count={5} size={24} value={formik.values.star} onChange={ratingChanged} edit={true} activeColor="#ffd700" />
                                                                </div>
                                                                <div className='mb-0 mt-0 error'>{formik.touched.star && formik.errors.star}</div>

                                                                <div className='form-group mt-3'>
                                                                    <textarea placeholder={item?.comment}
                                                                        name="comment"
                                                                        value={formik.values.comment}
                                                                        onChange={formik.handleChange('comment')}
                                                                        onBlur={formik.handleChange("comment")}
                                                                        className='form-control w-100' cols="20" rows="3"></textarea>
                                                                </div>
                                                                <div className='mb-0 mt-0 error'>{formik.touched.comment && formik.errors.comment}</div>

                                                                <div className='d-flex justify-content-end mt-3'>

                                                                    <button className='button border-0' type='submit'>Update Review</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div id={`close-${index}`} className='position-relative w-100'>
                                                            {
                                                                <button className='position-absolute border-0 fs-5 bg-transparent text-success' style={{ top: "10px", right: "20px", display: buttonUpComment ? "block" : "none" }} onClick={() => upComment(index)}><BsFillPencilFill /></button>
                                                            }

                                                            <div className='d-flex align-items-center gap-3'>
                                                                <h5 className='fw-bold mb-0'>{item?.postedby?.lastname} {item?.postedby?.firstname}</h5>
                                                                <div>
                                                                    <ReactStars count={5} size={24} value={item?.star} edit={false} activeColor="#ffd700" />
                                                                </div>
                                                            </div>
                                                            <p className='mt-4'>{item?.comment}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <section className='popular-wrapper home-wrapper-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='section-heading'>Our Popular Products</div>

                        </div>
                        <div className='row'>
                            <ProductCard data={popularState ? popularState : []} />
                        </div>
                    </div>
                </section>
            </div >

        </>
    )
}

export default SingleProduct