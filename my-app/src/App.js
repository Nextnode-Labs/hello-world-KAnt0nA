import React, { Component } from 'react'
import ReactDOM from "react-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";


const App = (props) => {

    return ( 
        <Router>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                            <Route path='profile/*' element={<Profile posts={props.appState.profilePage.posts} 
                                                                      addPost={props.addPost} 
                                                                      updateNewPostText={props.updateNewPostText}
                                                                      newPostText={props.appState.profilePage.newPostText}/>} />
                            <Route path='dialogs/*' element={<Dialogs dialogsData={props.appState.dialogsPage.dialogsDate} messagesData={props.appState.messagesPage.messagesData}/>} />                         
                    </Routes>
                </div>
                
            </div>
        </Router>
    )
}

export default App;