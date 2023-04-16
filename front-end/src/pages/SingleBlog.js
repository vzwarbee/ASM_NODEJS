import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import '../style/SingleBlog.css'
const SingleBlog = () => {
    return (
        <>
            <Helmet>
                <title>Dynamic Blog Name</title>
            </Helmet>
            <BreadCrumb title={"Dynamic Blog Name"} />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to="/blog" className='d-flex align-items-center gap-2'>
                                    <BsArrowLeft className='fs-4' />  Go back to blogs
                                </Link>
                                <h3 className='title'>A Beatiful Sunday Morning Renaissance</h3>
                                <img className='img-fluid w-100 my-4' src='images/blog-3.webp' alt='blog' />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog