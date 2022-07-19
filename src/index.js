import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerender = (state, addPost, updatePostText) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerender(store.getState(), store.addPost, store.updatePostText);

store.subscribe(rerender);