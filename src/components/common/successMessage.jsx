import React from 'react';

const SuccessMessage = ({message}) => {
    return (
        <div className="alert alert-success border-0 shadow">
            {message}
        </div>
    );
}

export default SuccessMessage;