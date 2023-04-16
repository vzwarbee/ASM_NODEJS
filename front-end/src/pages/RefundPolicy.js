import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import Helmet from 'react-helmet'
import "../style/Policy.css"
const RefundPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Refund Policy</title>
            </Helmet>
            <BreadCrumb title={"Refund Policy"} />
            <div className='policy-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy