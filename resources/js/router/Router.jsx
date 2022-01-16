import React, { memo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/auth/Login";
import { Register } from "../components/pages/auth/Register";
import { Layout } from "../components/templates/Layout";
import { Page404 } from "../components/pages/Page404";
import { useCurrentUser } from "../hooks/useCurrentUser";

export const Router = memo(() => {
    const { currentUser } = useCurrentUser();

    useEffect(() => {
        currentUser();
    }, []);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    );
});