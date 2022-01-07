import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./bootstrap";
import { Router } from "./router/Router";

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
