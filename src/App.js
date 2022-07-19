import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

function App(props) {

  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Profile {...props} />} />
            <Route path='dialogs/:id' element={<Dialogs {...props} />} />
            <Route path='dialogs' element={<Dialogs {...props} />} />
        </Routes>
    </div>
  );
}

export default App;
