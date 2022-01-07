import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/auth/Login";
import { Register } from "../components/pages/auth/Register";

export const Router = memo(() => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
});