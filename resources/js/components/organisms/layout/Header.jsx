import React, { memo } from "react";
import { Link } from "react-router-dom";

export const Header = memo(() => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">Laravel-React-ToDo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="ToggleNavigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">ログイン</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">アカウント作成</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
});