import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import Helmet from 'react-helmet'
import "../style/Policy.css"
const ShippingPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Shipping Policy</title>
            </Helmet>
            <BreadCrumb title={"Shipping Policy"} />
            <div className='policy-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingPolicy