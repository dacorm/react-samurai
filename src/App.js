import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {

  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path='dialogs/:id' element={<Dialogs />} />
            <Route path='dialogs' element={<DialogsContainer />} />
            <Route path='users' element={<UsersContainer />} />
        </Routes>
    </div>
  );
}

export default App;
