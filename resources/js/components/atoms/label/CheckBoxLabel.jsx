import React, { memo } from "react";

export const CheckBoxLabel = memo((props) => {
    const { htmlFor, children } = props;

    return (
        <label className="form-check-label" htmlFor={htmlFor}>{children}</label>
    );
});