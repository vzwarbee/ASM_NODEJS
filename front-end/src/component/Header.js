import React, { useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs"
import wishlist from '../images/wishlist.svg'
import user from '../images/user.svg'
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const getCustomerFromLS = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;
    // const dispatch = useDispatch()
    const logout = () => {
        toast.success("logout thành công")
        localStorage.removeItem("customer")
        localStorage.setItem("token", "")
        navigate(location.pathname)
    }
    useEffect(() => {
        navigate(location.pathname);
    }, []);

    return (
        <>
            {/* <header className='header-top-strip py-3' >
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6 '>
                            <p className='text-white text-center mb-0'>Free Shipping Over $100 & Free Return</p>
                        </div>
                        <div className='col-6 '>
                            <p className='text-center text-white mb-o'>
                                Hotline: <a className='text-white' href='+91 31232141'>+91 31232141</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header> */}
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link to="/home" className='text-white'> Mỳ Anime </Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div className='input-group mb-3'>
                                <input type="text" class="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                                <span class="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>

                        </div>
                        <div className='col-5 '>
                            <div className='header-upper-links d-flex align-items-center justify-content-center'>
                                {/* <div>
                                    <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'>
                                        <img src={compare} alt='Compare' />
                                        <p className='mb-0'>Compare <br /> Products</p>
                                    </Link>
                                </div> */}
                                <div>
                                    <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                                        <img src={wishlist} alt='wishlist' />
                                        <p className='mb-0'>Favourite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div>

                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-dropdown__user dropdown-toggle bg-transparent border-0 d-flex gap-2 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={user} alt='user' /><p className=''><br /> My Account</p>

                                        </button>

                                        {
                                            getCustomerFromLS ? <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><NavLink className="dropdown-item text-light" to="/wishlist">Wishlist</NavLink></li><li><button className="dropdown-item text-light" onClick={() => logout()}>Logout</button></li></ul> : <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><NavLink className="dropdown-item text-light" to="/login">login</NavLink></li></ul>
                                        }



                                    </div>
                                </div>
                                {/* <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src={cart} alt='cart' />
                                        <div className='d-flex flex-column '>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$500</p>
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-5'>
                                {/* <div>

                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-2 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src='images/menu.svg' alt='menu' /><span className='me-5 d-inline-block'>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/stores">Store</NavLink>
                                        {/* <NavLink to="/blog">Blog</NavLink>
                                        <NavLink to="/contact">Contact</NavLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header