import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import "../style/Login.css"

const ForgotPassword = () => {
    return (
        <>
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>
            <BreadCrumb title={"Forgot Password"} />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Forgot Password</h3>
                                <p className='second-title text-center'>We will send you an email to reset your password</p>
                                <form className='d-flex flex-column gap-1'>
                                    <div className='form-group'>
                                        <input type='email' name='email' placeholder='Email...' className='form-control' />
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex justify-content-center align-items-center gap-4 '>
                                            <button type='submit' className='button border-1'>Send Email</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword