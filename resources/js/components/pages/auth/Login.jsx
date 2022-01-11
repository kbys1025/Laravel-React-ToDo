import React, { useState, memo, useCallback } from "react";

import { HorizontalButton } from "../../molecules/form/HorizontalButton";
import { HorizontalInput } from "../../molecules/form/HorizontalInput";
import { MainCard } from "../../organisms/layout/MainCard";
import { useAuth } from "../../../hooks/useAuth";

export const Login = memo(() => {
    const { login } = useAuth();
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const onChangeEmailText = (e) => setEmailText(e.target.value);
    const onChangePasswordText = (e) => setPasswordText(e.target.value);

    const setErrorMessages = useCallback((errors) => {
        const emailError = Object.keys(errors).indexOf('email') !== -1 ? errors.email[0] : '';
        setEmailErrorMessage(emailError);
        const passwordError = Object.keys(errors).indexOf('password') !== -1 ? errors.password[0] : '';
        setPasswordErrorMessage(passwordError);
    }, [setEmailErrorMessage, setPasswordErrorMessage]);

    const onClickLogin = () => {
        const formData = {
            email: emailText,
            password: passwordText
        };
        login({ formData, setErrorMessages });
    };

    return (
        <MainCard headerText="ログイン">
            <HorizontalInput
                labelText="メールアドレス"
                inputId="email"
                inputType="email"
                inputValue={emailText}
                errorMessage={emailErrorMessage}
                hasError={emailErrorMessage.length ? true : false}
                inputOnChange={onChangeEmailText}
            />
            <HorizontalInput
                labelText="パスワード"
                inputId="password"
                inputType="password"
                inputValue={passwordText}
                errorMessage={passwordErrorMessage}
                hasError={passwordErrorMessage.length ? true : false}
                inputOnChange={onChangePasswordText}
            />
            <HorizontalButton onClick={onClickLogin}>ログイン</HorizontalButton>
        </MainCard>
    );
});