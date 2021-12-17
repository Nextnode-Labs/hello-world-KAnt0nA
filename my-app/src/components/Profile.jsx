import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>Main content
            <div><img src="https://wallpapercave.com/wp/wp7522889.jpg"/></div>
            <div>ava + description</div>
            <div>posts</div>
        </div>
    )
}

export default Profile;