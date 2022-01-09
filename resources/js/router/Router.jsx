import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/auth/Login";
import { Register } from "../components/pages/auth/Register";
import { Layout } from "../components/templates/Layout";
import { Page404 } from "../components/pages/Page404";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router = memo(() => {
    return (
        <LoginUserProvider>
            <Routes>
                <Route exact path="/" element={<Layout><Home /></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/register" element={<Layout><Register /></Layout>} />
                <Route path="*" element={<Layout><Page404 /></Layout>} />
            </Routes>
        </LoginUserProvider>
    );
});