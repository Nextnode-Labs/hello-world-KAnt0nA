import React, { Component } from 'react'
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return ( 
        <Router>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes >
                            <Route path='profile' component={Profile}/>
                            <Route path='dialogs' component={Dialogs}/>
                    </Routes>
                </div>
                
            </div>
        </Router>
    )
}

export default App;