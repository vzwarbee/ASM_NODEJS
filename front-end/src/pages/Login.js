import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import "../style/Login.css"
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputCustom from '../component/UI/InputCustom';
import { loginUser } from '../feature/user/userSlice';

let schema = yup.object().shape({
    email: yup.string().email("Email không hợp lệ!").required("Trường này bắt buộc nhập!"),
    password: yup.string().required("Trường này bắt buộc nhập!"),

});
const Login = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
            setTimeout(() => {
                window.location.href = '/'
            }, 3000)
        }
    });


    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <BreadCrumb title={"Login"} />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Login</h3>
                                <form className='d-flex flex-column gap-1' onSubmit={formik.handleSubmit}>
                                    <InputCustom type="text"
                                        name="email"
                                        onCh={formik.handleChange('email')}
                                        onBlr={formik.handleBlur('email')}
                                        val={formik.values.email}
                                    />
                                    <div className='mb-0 mt-0 error'>{formik.touched.email && formik.errors.email}</div>

                                    <InputCustom type="password"
                                        name="password"
                                        onCh={formik.handleChange('password')}
                                        onBlr={formik.handleBlur('password')}
                                        val={formik.values.password}
                                    />
                                    <div className='mb-0 mt-0 error'>{formik.touched.password && formik.errors.password}</div>
                                    <div className='mt-3'>
                                        <Link className='mb-3 forgot_password' to="/forgot-password">Forgot password?</Link>
                                        <div className='d-flex justify-content-center align-items-center gap-4 '>
                                            <button className='button border-1' type='submit'>Login</button>
                                            <Link to="/register" className='button signup'>Signup</Link>
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

export default Login