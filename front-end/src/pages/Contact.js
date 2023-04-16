import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import '../style/Contact.css'
import { AiFillHome, AiFillMail } from 'react-icons/ai'
import { MdCallEnd } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <BreadCrumb title={"Contact Us"} />
            <div className='contact-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8025459042856!2d108.16776031468427!3d16.075732988876904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218e6e07b1c3f%3A0x459e4bf5a2af323e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1680854433226!5m2!1svi!2s' width="600" height="450" className='w-100 border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Cao đẳng FPT Polytechnic'></iframe>
                        </div>
                        <div className=' col-12 mt-5'>
                            <div className='contact-inner-wrapper d-flex justify-content-between'>
                                <div>
                                    <h3 className='contact-title mb-4'>Contact</h3>
                                    <form action='' className='d-flex flex-column gap-3'>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Name' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Email' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Phone' />
                                        </div>
                                        <div className='form-group'>
                                            <textarea placeholder='Comment' className='form-control w-100' cols="20" rows="3"></textarea>
                                        </div>

                                        <div>
                                            <button type='submit' className='w-25 button fw-bold border-0'>Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className='contact-title'>Get with us</h3>
                                    <div className='contact-info'>
                                        <div>
                                            <ul className='ps-0 d-flex flex-column gap-3'>
                                                <li className='d-flex align-items-center gap-3'>
                                                    <AiFillHome />
                                                    <address className='mb-0'>48 lê Thị Xuyến, Thanh Khê, Đà Nẵng</address>
                                                </li>
                                                <li
                                                    className='d-flex align-items-center gap-3'>
                                                    <MdCallEnd className='fs-5 fw-bold' />
                                                    <p className='mb-0'>0901972747</p>
                                                </li>
                                                <li className='d-flex align-items-center gap-3'>
                                                    <AiFillMail />
                                                    <a href='/'>mail: dovantai112344@gmail.com</a>
                                                </li>
                                                <li className='d-flex align-items-center gap-3'>
                                                    <BiTime className='fw-bold fs-5' />
                                                    <p className='mb-0'>Monday ~ friday, 8AM - 10PM </p>
                                                </li>
                                            </ul>
                                        </div>
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

export default Contact