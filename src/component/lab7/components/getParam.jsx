import React from 'react';
import { useParams } from 'react-router-dom';

const getParam = (WrappedComponent) => (props) => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

export default getParam;
