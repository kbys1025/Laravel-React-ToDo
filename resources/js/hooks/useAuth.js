import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; 

import { useLoginUser } from "./useLoginUser";
import { UNPROCESSABLE_ENTITY } from "../util";

export const useAuth = () => {
    const { setLoginUser } = useLoginUser();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const register = useCallback((props) => {
        const { formData, setErrorMessages } = props;

        axios.post("/api/register", formData)
            .then((res) => {
                setLoginUser(res.data);
                navigate("/");
            })
            .catch((err) => {
                if (err.response.status === UNPROCESSABLE_ENTITY) {
                    setErrorMessages(err.response.data.errors);
                } else {
                    alert('アカウント作成に失敗しました。');
                    console.log(err.response);
                }
            });
        },
        [navigate, setLoginUser]
    );

    const login = useCallback((props) => {
        const { formData, setErrorMessages } = props;

        axios.post("/api/login", formData)
            .then((res) => {
                setLoginUser(res.data);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                if (err.response.status === UNPROCESSABLE_ENTITY) {
                    setErrorMessages(err.response.data.errors);
                } else {
                    alert('ログインに失敗しました。');
                    console.log(err.response);
                }
            });
        },
        [navigate, setLoginUser]
    );

    const logout = useCallback(() => {
        axios.post("/api/logout")
            .then((res) => {
                setLoginUser(null);
                navigate("/login");
            })
            .catch((err) => {
                alert('ログアウトに失敗しました。');
                console.log(err.response);
            });
        },
        [navigate, setLoginUser]
    );

    return { register, login, logout };
};