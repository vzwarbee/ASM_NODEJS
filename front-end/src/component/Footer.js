import React from 'react'
import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs"

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-5 align-item
                        '>
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className='input-group mb-2'>
                                <input type="text" class="form-control py-2" placeholder="Type your email..." aria-label="Type your email..." aria-describedby="basic-addon2" />
                                <span class="input-group-text p-3" id="basic-addon2">Subscrice</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <address className='fs-6 text-white'>
                                Address: 277 Le Do, <br /> Thanh Khe, Da Nang<br />
                                Pincode: 500000
                            </address>
                            <a href="tel:0901972747" className='mt-4 d-block mb-1 text-white' >Tel: +84 0901972747</a>
                            <a href="mail:dovantai112344@gmail.com" className='mt-4 d-block mb-4 text-white' >Mail: dovantai112344@gmail.com</a>

                            <div className='social_icons d-flex align-items-center gap-5'>
                                <a className="text-white fs-4" href="/#">
                                    <BsLinkedin />
                                </a>
                                <a className="text-white fs-4" href="/#">
                                    <BsInstagram />
                                </a>
                                <a className="text-white fs-4" href="/#">
                                    <BsGithub />
                                </a>
                                <a className="text-white fs-4" href="/#">
                                    <BsYoutube />
                                </a>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links flex-column d-flex'>
                                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link to="/term&conditions" className='text-white py-2 mb-1'>Term & Conditions</Link>
                                <Link to="/blog" className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-links flex-column d-flex'>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Quick links</h4>
                            <div className='footer-links flex-column d-flex'>
                                <Link className='text-white py-2 mb-1'>Laptop</Link>
                                <Link className='text-white py-2 mb-1'>HeadPhone</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 text-white'>
                            <p className='text-center'>&copy; {date} : Design By The Bread Loaf</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer