import React, { useEffect } from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import "../style/wishlist.css"
import { getWishlist } from '../feature/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../feature/product/productSlice';
import { toast } from 'react-toastify';


const Wishlist = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        getUserWishlist()
    }, [])
    const getUserWishlist = () => {
        dispatch(getWishlist())
    }


    const wishlistState = useSelector((state) => state.auth?.wishlists?.wishlist);


    const removeWishlist = (id) => {
        dispatch(addToWishlist(id))
        setTimeout(() => {
            toast.warning("Xóa yêu thích thành công")
        }, 250)
    }


    return (
        <>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <BreadCrumb title={"Wishlist"} />
            <div className='wishlist-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        {
                            wishlistState ? wishlistState.length === 0 && <div className='fs-3'>No data</div> : ""
                        }
                        {

                            wishlistState ? wishlistState.map((item, index) => {
                                return (
                                    <div className='col-3' key={index}>
                                        <div className='wishlist-card position-relative'>
                                            <img onClick={() => removeWishlist(item?._id)} src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                            <div className='wishlist-card-image '>
                                                <img src={item?.image[0].url ? item?.image[0].url : 'images/watch.jpg'} alt='watch' />
                                            </div>
                                        </div>
                                        <div className='wishlist-detail py-3'>
                                            <h5 className='title'>
                                                {item?.title}
                                            </h5>
                                            {/* <h6 className='price'>$ {item?.price}</h6> */}
                                        </div>

                                    </div>
                                )
                            })
                                : ""}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist