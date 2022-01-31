import React, { memo } from "react";

import '../../../../sass/todo.css';
import { TodoForm } from "../../organisms/todo/TodoForm";
import { TodoTable } from "../../organisms/todo/TodoTable";

export const Todo = memo(() => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <TodoForm />
                            <TodoTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});