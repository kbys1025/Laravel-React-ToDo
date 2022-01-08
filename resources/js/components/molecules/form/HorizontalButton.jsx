import React, { memo } from "react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const HorizontalButton = memo((props) => {
    const { children } = props;

    return (
        <div className="form-group row mb-0">
            <div className="col-md-6 offset-md-4">
                <PrimaryButton>{children}</PrimaryButton>
            </div>
        </div>
    );
});