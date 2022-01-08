import React, { useState } from "react";

import { HorizontalInput } from "../../molecules/form/HorizontalInput";
import { AuthCard } from "../../organisms/auth/AuthCard";

export const Register = () => {
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [passwordConfirmText, setPasswordConfirmText] = useState('');

    const onChangeNameText = (e) => setNameText(e.target.value);
    const onChangeEmailText = (e) => setEmailText(e.target.value);
    const onChangePasswordText = (e) => setPasswordText(e.target.value);
    const onChangePasswordConfirmText = (e) => setPasswordConfirmText(e.target.value);

    return (
        <AuthCard headerText="アカウント作成" buttonText="登録">
            <HorizontalInput
                labelText="名前"
                inputId="name"
                inputType="text"
                inputValue={nameText}
                inputOnChange={onChangeNameText}
            />
            <HorizontalInput
                labelText="メールアドレス"
                inputId="email"
                inputType="email"
                inputValue={emailText}
                inputOnChange={onChangeEmailText}
            />
            <HorizontalInput
                labelText="パスワード"
                inputId="password"
                inputType="password"
                inputValue={passwordText}
                inputOnChange={onChangePasswordText}
            />
            <HorizontalInput
                labelText="パスワード(確認用)"
                inputId="password_confirm"
                inputType="password"
                inputValue={passwordConfirmText}
                inputOnChange={onChangePasswordConfirmText}
            />
        </AuthCard>
    );
};