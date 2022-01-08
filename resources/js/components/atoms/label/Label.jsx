import React, { memo } from "react";

export const Label = memo((props) => {
    const { children } = props;

    return (
        <label className="col-md-4 col-form-label text-md-right">{children}</label>
    );
});