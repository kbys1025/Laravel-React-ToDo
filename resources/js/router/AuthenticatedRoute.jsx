import React, { memo } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useLoginUser } from "../hooks/useLoginUser";

export const AuthenticatedRoute = memo((props) => {
    const { children } = props;
    const { loginUser } = useLoginUser();
    const location = useLocation();

    if (!loginUser) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
});