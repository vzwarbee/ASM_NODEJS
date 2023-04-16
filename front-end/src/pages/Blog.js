import React, { useState } from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import Helmet from 'react-helmet'

import "../style/Stores.css"
import BlogCard from '../component/UI/BlogCard';

const Blog = () => {

    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <BreadCrumb title={"Blog"} />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Shop by Category
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='col-9'>
                            <div className='row'>
                                <div className='col-6 mb-3'>
                                    <BlogCard />
                                </div>
                                <div className='col-6 mb-3'>
                                    <BlogCard />
                                </div>
                                <div className='col-6 mb-3'>
                                    <BlogCard />
                                </div>
                                <div className='col-6 mb-3'>
                                    <BlogCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog