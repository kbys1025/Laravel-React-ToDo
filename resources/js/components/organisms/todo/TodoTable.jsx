import React, { memo } from "react";
import { Button } from "../../atoms/button/Button";

export const TodoTable = memo(() => {
    const todos = [
        { id: 1, post: 'プログラミング学習', isDone: false },
        { id: 2, post: '散歩', isDone: true },
        { id: 3, post: '筋トレ', isDone: false },
        { id: 4, post: '買い物', isDone: false },
    ];

    const onClickDone = () => {
        console.log('完了');
    }
    const onClickReturn = () => {
        console.log('戻す');
    }
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
                            {todo.isDone ? (
                                <>
                                    <td scope="row" className="completed">{todo.post}</td>
                                    <td>
                                        <Button color="secondary" onClick={onClickReturn}>戻す</Button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td scope="row" className="">{todo.post}</td>
                                    <td>
                                        <Button color="success" onClick={onClickDone}>完了</Button>
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