import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import Helmet from 'react-helmet'
import "../style/Policy.css"
const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy</title>
            </Helmet>
            <BreadCrumb title={"Privacy Policy"} />
            <div className='policy-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy