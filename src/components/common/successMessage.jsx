import React from 'react';

const SuccessMessage = ({message, className}) => {
    return (
        <div className={"border-0 shadow alert " + className}>
            {message}
        </div>
    );
}

export default SuccessMessage;