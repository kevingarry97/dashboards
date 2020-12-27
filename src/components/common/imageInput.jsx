import { NotificationImportantRounded } from '@material-ui/icons';
import React from 'react';

const ImageInput = ({label, error, ...rest}) => {
    return (
        <>
            <div className="custom-file">
                <input type="file" {...rest} className="custom-file-input" />
                <label className="custom-file-label" htmlFor="">{label}</label>
            </div>
            {error && <div className="text-danger font-weight-bold mb-3">{error}</div>}
        </>
    );
}

export default ImageInput;