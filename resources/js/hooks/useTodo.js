import { useCallback } from "react";
import axios from "axios";

import { UNPROCESSABLE_ENTITY } from "../util";

export const useTodo = () => {
    const createTodo = useCallback((props) => {
        const { formData, setTodoErrorMessage, setTodoText } = props;

        axios.post("/api/todo", formData)
            .then((res) => {
                console.log(res.status);
                setTodoErrorMessage('');
                setTodoText('');
            })
            .catch((err) => {
                if (err.response.status === UNPROCESSABLE_ENTITY) {
                    setTodoErrorMessage(err.response.data.errors.todo[0]);
                } else {
                    alert('ToDo作成に失敗しました。');
                    console.log(err.response);
                }
            });
        },
        []
    );
    
    return { createTodo };
}