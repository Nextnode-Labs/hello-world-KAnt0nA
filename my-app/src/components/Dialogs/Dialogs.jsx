import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="User1" id="1"/>
                <DialogItem name="User2" id="2"/>
                <DialogItem name="User3" id="3"/>
                <DialogItem name="User4" id="4"/>
                <DialogItem name="User5" id="5"/>
            </div>
            <div className={classes.messages}>
                <Message message="message1" />
                <Message message="message2" />
                <Message message="message3" />
                <Message message="message4" />
            </div>
        </div>
    )
}

export default Dialogs;