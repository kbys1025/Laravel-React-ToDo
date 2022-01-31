import React, { memo } from "react";
import { Button } from "./Button";

export const PrimaryButton = memo((props) => {
    const { children, onClick } = props;

    return (
        <Button color="primary" onClick={onClick}>{children}</Button>
    );
});