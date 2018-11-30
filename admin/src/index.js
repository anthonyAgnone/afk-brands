import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { AdminContextProvider } from "./Contexts/AdminContext";
import App from "./App";

ReactDOM.render(
    <AdminContextProvider>
        <Router>
            <App/>
        </Router>
    </AdminContextProvider>,
    document.getElementById("root")
);