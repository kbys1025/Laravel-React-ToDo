import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">ログイン</div>

                        <div className="card-body">
                            <p>ログインページ</p>
                            <Link to="/">HOMEへ戻る</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};