import React from 'react';

const Select = ({name, label, options, error, ...rest}) => {
    return (  
        <div className="form-group">
            <label style={{ color: "#888"}}>{label}</label>
            <select name={name} id={name} {...rest} className="custom-select my-1 mr-sm-2">
                <option disabled value="">{label}</option>
                {options && options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <div className="text-danger font-weight-bold my-2">{error}</div>}
        </div>
    );
}
 
export default Select;