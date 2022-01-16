import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../organisms/layout/Header";

export const Layout = memo(() => {
    return (
        <>
            <Header />
            <main className="py-4">
                <Outlet />
            </main>
        </>
    );
});