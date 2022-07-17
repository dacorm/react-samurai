import React from 'react';
import './index.css';
import {rerender} from "./render";
import state, {addPost} from "./redux/state";

rerender(state, addPost);