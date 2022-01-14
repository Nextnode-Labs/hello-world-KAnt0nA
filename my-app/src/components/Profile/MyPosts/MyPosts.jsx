import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi!', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 100},
        {id: 2, message: 'adas', likesCount: 1}
    ]
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>add post</button></div>                
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;