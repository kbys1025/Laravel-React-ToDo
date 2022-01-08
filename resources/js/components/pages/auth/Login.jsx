import React, { useState } from "react";

import { HorizontalCheckBox } from "../../molecules/form/HorizontalCheckBox";
import { HorizontalInput } from "../../molecules/form/HorizontalInput";
import { AuthCard } from "../../organisms/auth/AuthCard";

export const Login = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const onChangeEmailText = (e) => setEmailText(e.target.value);
    const onChangePasswordText = (e) => setPasswordText(e.target.value);

    return (
        <AuthCard headerText="ログイン" buttonText="ログイン">
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
            <HorizontalCheckBox
                labelText="ログイン状態を保存"
                checkBoxId="remember"
            />
        </AuthCard>
    );
};