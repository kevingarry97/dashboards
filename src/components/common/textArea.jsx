import React from 'react';

const TextArea = ({label, error, ...rest}) => {
    return (
        <div className="form-group">
            <textarea {...rest} rows="5" className="form-control"></textarea>
            {error && <div className="text-danger font-weight-bold my-2">{error}</div>}
        </div>
    );
}

export default TextArea;