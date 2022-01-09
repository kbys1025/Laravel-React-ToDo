import React, { useState, memo, useCallback } from "react";

import { HorizontalButton } from "../../molecules/form/HorizontalButton";
import { HorizontalInput } from "../../molecules/form/HorizontalInput";
import { MainCard } from "../../organisms/layout/MainCard";
import { useAuth } from "../../../hooks/useAuth";

export const Register = memo(() => {
    const { register } = useAuth();
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [passwordConfirmText, setPasswordConfirmText] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const onChangeNameText = (e) => setNameText(e.target.value);
    const onChangeEmailText = (e) => setEmailText(e.target.value);
    const onChangePasswordText = (e) => setPasswordText(e.target.value);
    const onChangePasswordConfirmText = (e) => setPasswordConfirmText(e.target.value);

    const setErrorMessages = useCallback((errors) => {
        const nameError = Object.keys(errors).indexOf('name') !== -1 ? errors.name[0] : '';
        setNameErrorMessage(nameError);
        const emailError = Object.keys(errors).indexOf('email') !== -1 ? errors.email[0] : '';
        setEmailErrorMessage(emailError);
        const passwordError = Object.keys(errors).indexOf('password') !== -1 ? errors.password[0] : '';
        setPasswordErrorMessage(passwordError);
    }, [setNameErrorMessage, setEmailErrorMessage, setPasswordErrorMessage]);

    const onClickRegister = () => {
        const formData = {
            name: nameText,
            email: emailText,
            password: passwordText,
            password_confirmation: passwordConfirmText
        };
        register({ formData, setErrorMessages });
    };

    return (
        <MainCard headerText="アカウント作成">
            <HorizontalInput
                labelText="名前"
                inputId="name"
                inputType="text"
                inputValue={nameText}
                errorMessage={nameErrorMessage}
                hasError={nameErrorMessage.length ? true : false}
                inputOnChange={onChangeNameText}
            />
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
            <HorizontalInput
                labelText="パスワード(確認用)"
                inputId="password_confirm"
                inputType="password"
                inputValue={passwordConfirmText}
                inputOnChange={onChangePasswordConfirmText}
            />
            <HorizontalButton onClick={onClickRegister}>登録</HorizontalButton>
        </MainCard>
    );
});