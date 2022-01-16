import { useState } from "react";
import { useCallback } from "react";
import axios from "axios"; 

import { useLoginUser } from "./useLoginUser";

export const useCurrentUser = () => {
    const { setLoginUser } = useLoginUser();
    const [loading, setLoading] = useState(true);
    
    const currentUser = useCallback(() => {
        axios.get("/api/user")
            .then((res) => {
                setLoginUser(res.data);
            })
            .catch((err) => {
                alert('ログインチェックに失敗しました。');
                console.log(err.response);
                
            })
            .finally(() => {
                setLoading(false);
            })
        },
        [setLoginUser]
    );

    return { currentUser, loading };
};