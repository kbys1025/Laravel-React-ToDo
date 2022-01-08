import React, { memo } from "react";

export const Input = memo((props) => {
    const { id, type, value, onChange } = props;
    
    return (
        <input id={id} type={type} className="form-control" value={value} onChange={onChange} />
    );
});