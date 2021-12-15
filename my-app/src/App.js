import React, { Component } from 'react'
import './App.css';

const App = () => {
    return ( 
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://logodix.com/logo/1917404.png'/>
            </header>
            <nav className='nav'>
                <ul>
                    <li><a href='#'>Profile</a></li>
                    <li><a href='#'>Messages</a></li>
                    <li><a href='#'>News</a></li>
                </ul>
            </nav>
            <div className='content'>Main content
                <div><img src="https://wallpapercave.com/wp/wp7522889.jpg"/></div>
                <div>ava + description</div>
                <div>posts</div>
            </div>

        </div>
    )
}

export default App;