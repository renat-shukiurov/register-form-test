import React from 'react';

const ErrorField = ({text}) => {
    return (
        <>
            {text && <span className="error-text">{text}</span>}
        </>
    );
};

export default ErrorField;