import React, { memo } from "react";

import { Header } from "../organisms/layout/Header";

export const Layout = memo((props) => {
    const { children } = props;

    return (
        <>
            <Header />
            <main className="py-4">
                {children}
            </main>
        </>
    );
});