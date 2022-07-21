import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path='dialogs/:id' element={<Dialogs />} />
            <Route path='dialogs' element={<Dialogs />} />
        </Routes>
    </div>
  );
}

export default App;
