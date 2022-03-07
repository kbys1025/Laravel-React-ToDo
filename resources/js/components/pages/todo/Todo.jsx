import React, { memo, useState, useEffect } from "react";

import '../../../../sass/todo.css';
import { useTodo } from "../../../hooks/useTodo";
import { TodoForm } from "../../organisms/todo/TodoForm";
import { TodoTable } from "../../organisms/todo/TodoTable";

export const Todo = memo(() => {
    const { getTodos, todos, createTodo, completeTodo, returnTodo, deleteTodo } = useTodo();
    const [todoText, setTodoText] = useState('');
    const [todoErrorMessage, setTodoErrorMessage] = useState('');
    
    useEffect(() => getTodos(), []);
    
    const onChangeTodoText = (e) => setTodoText(e.target.value);

    const onClickCreate = () => {
        const formData = {
            todo: todoText,
        };
        createTodo({ formData, setTodoErrorMessage, setTodoText });
    };

    const onClickComplete = (todoId) => {
        const formData = {
            id: todoId,
        };
        completeTodo({ formData });
    }

    const onClickReturn = (todoId) => {
        const formData = {
            id: todoId,
        };
        returnTodo({ formData });
    }

    const onClickDelete = (todoId) => {
        const formData = {
            id: todoId,
        };
        deleteTodo({ formData });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <TodoForm todoText={todoText} onChangeTodoText={onChangeTodoText} onClickCreate={onClickCreate} todoErrorMessage={todoErrorMessage} />
                            <TodoTable todos={todos} onClickComplete={onClickComplete} onClickReturn={onClickReturn} onClickDelete={onClickDelete} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});