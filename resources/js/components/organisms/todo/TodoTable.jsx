import React, { memo } from "react";
import { Button } from "../../atoms/button/Button";

export const TodoTable = memo((props) => {
    const { todos, onClickComplete, onClickReturn } = props;
    const COMPLETE = 1;

    const onClickDelete = () => {
        console.log('削除');
    }
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col" width="80%">ToDo</th>
                    <th scope="col" width="10%"></th>
                    <th scope="col" width="10%"></th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => {
                    return (
                        <tr key={todo.id} >
                            {todo.status === COMPLETE ? (
                                <>
                                    <td scope="row" className="completed">{todo.todo}</td>
                                    <td>
                                        <Button color="secondary" onClick={() => onClickReturn(todo.id)}>戻す</Button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td scope="row" className="">{todo.todo}</td>
                                    <td>
                                        <Button color="success" onClick={() => onClickComplete(todo.id)}>完了</Button>
                                    </td>
                                </>
                            )}
                            <td>
                                <Button color="danger" onClick={onClickDelete}>削除</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
});