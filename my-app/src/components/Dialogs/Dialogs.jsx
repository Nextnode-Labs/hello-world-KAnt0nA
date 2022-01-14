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
    let dialogsData = [
        {id:1, name:'User1'},
        {id:2, name:'User2'},
        {id:3, name:'User3'},
        {id:4, name:'User4'},
        {id:5, name:'User5'}
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesData = [
        {id:1, message:'message1'},
        {id:2, message:'message2'},
        {id:3, message:'message3'},
        {id:4, message:'message4'},
        {id:5, message:'message5'}
    ]
    let messagesElements = messagesData
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