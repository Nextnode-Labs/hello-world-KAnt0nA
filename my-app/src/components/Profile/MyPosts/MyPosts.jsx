import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi!', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 100}
    ]

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>add post</button></div>                
            </div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        </div>
    )
}

export default MyPosts;