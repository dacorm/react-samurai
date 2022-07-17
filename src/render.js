import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";

import App from "./App";


export const rerender = (state, addPost) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>
    );
}