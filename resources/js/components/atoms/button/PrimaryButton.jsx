import React, { memo } from "react";

export const PrimaryButton = memo((props) => {
    const { children, onClick } = props;

    return (
        <button type="button" className="btn btn-primary" onClick={onClick} >
            {children}
        </button>
    );
});