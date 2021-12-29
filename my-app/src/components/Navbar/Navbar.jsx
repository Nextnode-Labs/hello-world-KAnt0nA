import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
        <ul>
            <li><a href='/profile'>Profile</a></li>
            <li><a href='/dialogs'>Messages</a></li>
            <li><a href='/news'>News</a></li>
        </ul>
    </nav>
    )
}

export default Navbar;