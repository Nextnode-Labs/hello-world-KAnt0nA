import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.content}>Main content
            <div><img src="https://wallpapercave.com/wp/wp7522889.jpg"/></div>
            <div>ava + description</div>
        </div>
    )
}

export default ProfileInfo;