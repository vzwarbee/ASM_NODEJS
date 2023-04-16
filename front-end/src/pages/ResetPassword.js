import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import "../style/Login.css"

const ResetPassword = () => {
    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <BreadCrumb title={"Reset Password"} />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form className='d-flex flex-column gap-1'>
                                    <div className='form-group '>
                                        <input type='password' name='password' placeholder='New Password...' className='form-control' />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <input type='password' name='password' placeholder='Confirm Password...' className='form-control' />
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex justify-content-center align-items-center gap-4 '>
                                            <button className='button border-1'>Submit</button>
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

export default ResetPassword