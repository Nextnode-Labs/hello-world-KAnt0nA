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

    let dialogsElements = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.messagesData
        .map(message => <Message message={message.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
            {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;