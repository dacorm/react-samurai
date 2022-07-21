import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {

  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path='dialogs/:id' element={<Dialogs />} />
            <Route path='dialogs' element={<DialogsContainer />} />
            <Route path='users' element={<UsersContainer />} />
        </Routes>
    </div>
  );
}

export default App;
