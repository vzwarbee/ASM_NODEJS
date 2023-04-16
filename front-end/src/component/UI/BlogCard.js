import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' alt='blog' className='img-fluid' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 dec, 2022</p>
                <h5 className='title'>A beautiful snunday morning reaissance</h5>
                <p className='desc'>Được dịch từ tiếng Anh-Trong xuất bản và thiết kế đồ họa, Lorem ipsum là một văn bản giữ chỗ ch từ tiếng Anh-Trong xuất bản và thiết kế đồ họa, Lorem ipsum là một văn bản giữ chỗ</p>
                <Link to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard