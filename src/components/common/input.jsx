import React from 'react';

const Input = ({ symbol, label, error, ...rest}) => {
    return (
        <>
            <div className="form-group">
                {label && <label style={{ color: "#888"}}>{label}</label>}
                {symbol}
                <input {...rest} className="form-control text-muted" autoComplete='off' />
            </div>
            {error && <div className="text-danger font-weight-bold mb-3">{error}</div>}
        </>
        
    );
}

export default Input;