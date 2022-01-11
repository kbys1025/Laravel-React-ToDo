import React, { useState, memo } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";
import { useLoginUser } from "../../../hooks/useLoginUser";

export const Header = memo(() => {
    const { loginUser } = useLoginUser();
    const { logout } = useAuth();
    const [showing, setShowing] = useState(false);

    const onChangeShowing = () => setShowing(!showing);

    const onClickLogout = () => {        
        logout();
        setShowing(!showing);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">Laravel-React-ToDo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="ToggleNavigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {!loginUser ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">ログイン</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">アカウント作成</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className={`nav-item dropdown ${showing ? 'show' : '' }`}>
                                    <Link to="#" id="navbarDropdown" className="nav-link dropdown-toggle" onClick={onChangeShowing}>
                                        {loginUser.name} <span className="caret"></span>
                                    </Link>
                                    <div className={`dropdown-menu dropdown-menu-right ${showing ? 'show' : '' }`}>
                                        <Link to="#" className="dropdown-item" onClick={onClickLogout}>ログアウト</Link>
                                    </div>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
});