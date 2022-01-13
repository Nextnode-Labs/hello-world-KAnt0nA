import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>add post</button></div>                
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;