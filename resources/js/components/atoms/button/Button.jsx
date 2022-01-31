import React, { memo } from "react";

export const Button = memo((props) => {
    const { children, color, onClick } = props;

    return (
        <button type="button" className={`btn btn-${color}`} onClick={onClick} >
            {children}
        </button>
    );
});