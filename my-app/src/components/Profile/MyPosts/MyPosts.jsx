import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
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