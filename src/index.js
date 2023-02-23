import React from "react";
import App from "./App01";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
    <React.StrictMode>
        <App />,
    </React.StrictMode>,
    document.getElementById('root')
);


