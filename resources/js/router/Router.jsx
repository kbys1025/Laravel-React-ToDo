import React, { memo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/auth/Login";
import { Register } from "../components/pages/auth/Register";
import { Layout } from "../components/templates/Layout";
import { Page404 } from "../components/pages/Page404";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { GuestRoute } from "./GuestRoute";
import { Todo } from "../components/pages/todo/Todo";

export const Router = memo(() => {
    const { currentUser, loading } = useCurrentUser();

    useEffect(() => {
        currentUser();
    }, []);

    return (
        loading ||
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <AuthenticatedRoute>
                            <Todo />
                        </AuthenticatedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <GuestRoute>
                            <Login />
                        </GuestRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <GuestRoute>
                            <Register />
                        </GuestRoute>
                    }
                />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    );
});