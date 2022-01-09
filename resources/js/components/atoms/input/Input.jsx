import React, { memo } from "react";

export const Input = memo((props) => {
    const { id, type, value, hasError, onChange } = props;
    
    return (
        <input id={id} type={type} className={`form-control ${hasError ? 'is-invalid' : '' }`} value={value} onChange={onChange} />
    );
});