import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://avatarfiles.alphacoders.com/212/212656.jpg"/>
            <div>{props.message}</div><div>{props.likesCount}</div>
        </div>
        
    )
}

export default Post;