import React, { memo } from "react";

export const CheckBox = memo((props) => {
    const { id } = props;
    
    return (
        <input className="form-check-input" type="checkbox" id={id} />
    );
});