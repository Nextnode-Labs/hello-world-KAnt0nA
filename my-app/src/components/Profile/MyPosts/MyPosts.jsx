import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <button>add post</button>
                <button>remove post</button>
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;