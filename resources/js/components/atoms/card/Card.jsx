import React, { memo } from "react";

export const Card = memo((props) => {
    const { children, headerText } = props;

    return (
        <div className="card">
            <div className="card-header">{headerText}</div>

            <div className="card-body">
                {children}
            </div>
        </div>
    );
});