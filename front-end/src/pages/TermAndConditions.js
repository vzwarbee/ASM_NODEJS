import React from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import Helmet from 'react-helmet'
import "../style/Policy.css"
const TermAndConditions = () => {
    return (
        <>
            <Helmet>
                <title>Term And Conditions</title>
            </Helmet>
            <BreadCrumb title={"Term And Conditions"} />
            <div className='policy-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TermAndConditions