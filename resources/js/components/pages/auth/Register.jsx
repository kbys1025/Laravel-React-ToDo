import React, { useState, memo } from "react";

import { HorizontalButton } from "../../molecules/form/HorizontalButton";
import { HorizontalInput } from "../../molecules/form/HorizontalInput";
import { MainCard } from "../../organisms/layout/MainCard";

export const Register = memo(() => {
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [passwordConfirmText, setPasswordConfirmText] = useState('');

    const onChangeNameText = (e) => setNameText(e.target.value);
    const onChangeEmailText = (e) => setEmailText(e.target.value);
    const onChangePasswordText = (e) => setPasswordText(e.target.value);
    const onChangePasswordConfirmText = (e) => setPasswordConfirmText(e.target.value);

    return (
        <MainCard headerText="アカウント作成">
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
            <HorizontalButton>登録</HorizontalButton>
        </MainCard>
    );
});