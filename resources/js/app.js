import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./bootstrap";
import { LoginUserProvider } from "./providers/LoginUserProvider";
import { Router } from "./router/Router";

function App() {
    return (
        <LoginUserProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </LoginUserProvider>
    );
};

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
