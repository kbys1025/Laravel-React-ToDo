import React, { memo } from "react";

import { CheckBox } from "../../atoms/input/CheckBox";
import { CheckBoxLabel } from "../../atoms/label/CheckBoxLabel";

export const HorizontalCheckBox = memo((props) => {
    const { labelText, checkBoxId } = props;

    return (
        <div className="form-group row">
            <div className="col-md-6 offset-md-4">
                <div className="form-check">
                    <CheckBox id={checkBoxId} />
                    <CheckBoxLabel htmlFor={checkBoxId}>{labelText}</CheckBoxLabel>
                </div>
            </div>
        </div>
    );
});