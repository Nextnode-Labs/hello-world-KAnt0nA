import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>Main content
            <div><img src="https://wallpapercave.com/wp/wp7522889.jpg"/></div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;