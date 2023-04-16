import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "../style/Login.css"
import { BsArrowRightShort } from 'react-icons/bs'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { registerUser } from '../feature/user/userSlice'
import InputCustom from '../component/UI/InputCustom';

let schema = yup.object({
    firstname: yup.string().required("Trường này bắt buộc nhập!"),
    lastname: yup.string().required("Trường này bắt buộc nhập!"),
    email: yup.string().email("Email không hợp lệ!").required("Trường này bắt buộc nhập!"),
    mobile: yup.number().required("Trường này bắt buộc nhập!"),
    password: yup.string().required("Trường này bắt buộc nhập!"),

});


const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const formik = useFormik({

        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(registerUser(values))
            formik.resetForm()

            setTimeout(() => {
                navigate('/login')
            }, 2500)
        }
    });


    return (
        <>
            <Helmet>
                <title>Register User</title>
            </Helmet>
            <BreadCrumb title={"Register User"} />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Register User</h3>
                                <form action='' className='d-flex flex-column gap-2' onSubmit={formik.handleSubmit}>
                                    <InputCustom type="text"
                                        name="firstname"
                                        onCh={formik.handleChange('firstname')}
                                        onBlr={formik.handleBlur('firstname')}
                                        val={formik.values.firstname}
                                    />
                                    <div className='mb-0 mt-0 error'>{formik.touched.firstname && formik.errors.firstname}</div>
                                    <InputCustom type="text"
                                        name="lastname"
                                        onCh={formik.handleChange('lastname')}
                                        onBlr={formik.handleBlur('lastname')}
                                        val={formik.values.lastname}
                                    />
                                    <div className='mb-0 mt-0 error'>{formik.touched.lastname && formik.errors.lastname}</div>

                                    <InputCustom type="email"
                                        name="email"
                                        onCh={formik.handleChange('email')}
                                        onBlr={formik.handleBlur('email')}
                                        val={formik.values.email}
                                    />
                                    <div className='mb-0 mt-0 error'>{formik.touched.email && formik.errors.email}</div>

                                    <InputCustom type="tel"
                                        name="mobile"
                                        onCh={formik.handleChange('mobile')}
                                        onBlr={formik.handleBlur('mobile')}
                                        val={formik.values.mobile}
                                    />
                                    <div className='mb-0 mt-0 error'>{formik.touched.mobile && formik.errors.mobile}</div>

                                    <InputCustom type="password"
                                        name="password"
                                        onCh={formik.handleChange('password')}
                                        onBlr={formik.handleBlur('password')}
                                        val={formik.values.password}
                                    />
                                    <div className='mb-0 mt-0 error'>{formik.touched.password && formik.errors.password}</div>


                                    <div className='mt-3'>
                                        <div className='d-flex justify-content-center align-items-center flex-column gap-4 '>
                                            <button type='submit' className='button border-1'>Signup</button>
                                            <Link className='forgot_password d-flex align-items-center mt-2' to="/login">Have an account? To login <BsArrowRightShort /></Link>

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

export default Signup