import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home</div>
                            <Link to="/login">ログイン</Link>
                            <Link to="/register">新規登録</Link>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};