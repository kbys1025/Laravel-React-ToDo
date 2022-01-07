import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">新規登録</div>

                        <div className="card-body">
                            <p>新規登録ページ</p>
                            <Link to="/">HOMEへ戻る</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};