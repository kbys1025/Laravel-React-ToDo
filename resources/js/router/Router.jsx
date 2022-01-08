import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/auth/Login";
import { Register } from "../components/pages/auth/Register";
import { Layout } from "../components/templates/Layout";

export const Router = memo(() => {
    return (
        <Routes>
            <Route exact path="/" element={<Layout><Home /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="/register" element={<Layout><Register /></Layout>} />
        </Routes>
    );
});