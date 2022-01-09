import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

import { useLoginUser } from "./useLoginUser";
import { UNPROCESSABLE_ENTITY } from "../util";

export const useAuth = () => {
    const { setLoginUser } = useLoginUser();
    const navigate = useNavigate();
    
    const register = useCallback((props) => {
        const { formData, setErrorMessages } = props;

        axios.post("/api/register", formData)
            .then((res) => {
                setLoginUser(res.data);
                setErrorMessages({});
                navigate("/");
            })
            .catch((err) => {
                if (err.response.status === UNPROCESSABLE_ENTITY) {
                    setErrorMessages(err.response.data.errors);
                } else {
                    alert('アカウント作成に失敗しました。')
                    console.log(err.response);
                }
            });
        },
        [navigate, setLoginUser]
    );

    return { register };
};