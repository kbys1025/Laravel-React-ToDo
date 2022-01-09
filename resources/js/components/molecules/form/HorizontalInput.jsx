import React, { memo } from "react";

import { Input } from "../../atoms/input/Input";
import { Label } from "../../atoms/label/Label";

export const HorizontalInput = memo((props) => {
    const { labelText, inputId, inputType, inputValue, hasError, errorMessage, inputOnChange} = props;

    return (
        <div className="form-group row">
            <Label>{labelText}</Label>
            <div className="col-md-6">
                <Input id={inputId} type={inputType} value={inputValue} hasError={hasError} onChange={inputOnChange} />
                {hasError && (
                    <div className="invalid-feedback">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
});