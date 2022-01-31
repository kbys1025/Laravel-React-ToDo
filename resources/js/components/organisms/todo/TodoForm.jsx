import React, { memo, useState } from "react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { Input } from "../../atoms/input/Input";

export const TodoForm = memo(() => {
    const [todoText, setTodoText] = useState('');

    const onChangeTodoText = (e) => setTodoText(e.target.value);

    const onClickAdd = () => {
        console.log('追加');
    };

    return (
        <>
            <div className="form-row mb-1">
                <div className="form-group col-md-10">
                    <Input
                        id="todo"
                        type="text"
                        value={todoText}
                        placeHolder="ToDoを入力"
                        hasError={false}
                        onChange={onChangeTodoText}
                    />
                </div>
                <div className="form-group col-md-2">
                    <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
                </div>
            </div>
        </>
    );
});