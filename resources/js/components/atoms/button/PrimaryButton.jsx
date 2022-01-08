import React, { memo } from "react";

export const PrimaryButton = memo((props) => {
    const { children } = props;

    return (
        <button type="button" className="btn btn-primary">
            {children}
        </button>
    );
});