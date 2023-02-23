import React from "react";
import App from "./App";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
ReactDom.render(
    <React.StrictMode>
    <App />,
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();