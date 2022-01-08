import React, { memo } from "react";
import { MainCard } from "../organisms/layout/MainCard";

export const Page404 = memo(() => {
    return (
        <MainCard headerText="404">ページが存在しません。</MainCard>
    );
});