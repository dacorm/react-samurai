import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

function App({ appState }) {

  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Profile props={appState.posts}/>} />
            <Route path='dialogs/:id' element={<Dialogs props={appState} />} />
            <Route path='dialogs' element={<Dialogs props={appState} />} />
        </Routes>
    </div>
  );
}

export default App;
