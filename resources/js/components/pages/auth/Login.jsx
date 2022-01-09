import React, { useState, memo } from "react";

import { HorizontalButton } from "../../molecules/form/HorizontalButton";
import { HorizontalCheckBox } from "../../molecules/form/HorizontalCheckBox";
import { HorizontalInput } from "../../molecules/form/HorizontalInput";
import { MainCard } from "../../organisms/layout/MainCard";

export const Login = memo(() => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const onChangeEmailText = (e) => setEmailText(e.target.value);
    const onChangePasswordText = (e) => setPasswordText(e.target.value);

    const onClickLogin = () => {};

    return (
        <MainCard headerText="ログイン">
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
            <HorizontalButton onClick={onClickLogin}>ログイン</HorizontalButton>
        </MainCard>
    );
});