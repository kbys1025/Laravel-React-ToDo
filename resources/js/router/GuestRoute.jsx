import React, { memo } from "react";
import { Navigate } from "react-router-dom";

import { useLoginUser } from "../hooks/useLoginUser";

export const GuestRoute = memo((props) => {
    const { children } = props;
    const { loginUser } = useLoginUser();

    if (loginUser) {
        return <Navigate to="/" />
    }

    return children;
});