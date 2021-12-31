import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
        <ul>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/dialogs'>Messages</Link></li>
            <li><Link to='/news'>News</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;