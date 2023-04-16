import React, { useEffect } from 'react'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { addToWishlist } from '../../feature/product/productSlice';
import { toast } from 'react-toastify';
import view from "../../images/view.svg"
import wishlist from "../../images/wish.svg"
import compare from "../../images/prodcompare.svg"
import addcart from "../../images/add-cart.svg"

const ProductCard = (props) => {
    const { grid, data } = props;
    let location = useLocation();
    const dispatch = useDispatch()
    // console.log(data);

    const addWishlist = (id) => {
        dispatch(addToWishlist(id))
        toast.success("Đã thêm vào yêu thích")
    }


    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <div key={index} className={`${location.pathname === "/stores" ? `gr-${grid}` : 'col-3'} py-2`} >
                            <Link className='product-card position-relative' >
                                <div className='wishlist-icon position-absolute'>
                                    <button onClick={() => {
                                        addWishlist(item?._id)
                                    }
                                    } className='border-0'>
                                        <img src={wishlist} className='img-fluid' alt='wishlist' />
                                    </button>
                                </div>

                                <div className='product-image mb-3'>
                                    <img src={item?.image[0]?.url ? item?.image[0]?.url : "images/warning.jpg"} className='img-fluid' alt="product_image" />
                                </div>
                                <div className='product-details'>
                                    <h6 className='brand'>Tác giả: {item?.brand}</h6>
                                    <h6 className='category mb-2'>Thể loại: {item?.prodCategory}</h6>
                                    <h5 className='product-title'>
                                        {item?.title}
                                    </h5>
                                    <ReactStars count={5} size={24} value={item?.totalRating} edit={false} activeColor="#ffd700" />
                                    <p className={`description ${grid === 12 || grid === 6 ? "d-webkit-box" : "d-none"}`} dangerouslySetInnerHTML={{ __html: item?.description }}>

                                    </p>
                                    {/* <p className='price'>$ {item?.price} </p> */}
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <Link>
                                            <img src={compare} alt='prodcompare' />
                                        </Link>
                                        <Link to={`/product/${item?._id}`}>
                                            <img src={view} alt='view' />
                                        </Link>
                                        <Link>
                                            <img src={addcart} alt='addcart' />
                                        </Link>
                                    </div>
                                </div>
                            </Link >
                        </div >
                    )

                })
            }

        </>
    )
}

export default ProductCard;