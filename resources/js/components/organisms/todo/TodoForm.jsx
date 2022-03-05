import React, { memo, useState } from "react";

import { useTodo } from "../../../hooks/useTodo";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { Input } from "../../atoms/input/Input";

export const TodoForm = memo(() => {
    const { createTodo } = useTodo();
    const [todoText, setTodoText] = useState('');
    const [todoErrorMessage, setTodoErrorMessage] = useState('');

    const onChangeTodoText = (e) => setTodoText(e.target.value);

    const onClickCreate = () => {
        const formData = {
            todo: todoText,
        };
        createTodo({ formData, setTodoErrorMessage, setTodoText });
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
                        hasError={todoErrorMessage.length ? true : false}
                        onChange={onChangeTodoText}
                    />
                    {todoErrorMessage.length ? (
                        <div className="invalid-feedback">
                            {todoErrorMessage}
                        </div>
                    ) : ''}
                </div>
                <div className="form-group col-md-2">
                    <PrimaryButton onClick={onClickCreate}>追加</PrimaryButton>
                </div>
            </div>
        </>
    );
});