import { Cancel } from '@material-ui/icons';
import React from 'react';

const SuccessMessage = ({message, className, handleClose}) => {
    return (
        <div className={"clearfix border-0 shadow alert " + className}>
            <div className="float-left">{message}</div>
        </div>
    );
}

export default SuccessMessage;