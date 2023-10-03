import React from "react";
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={ isOnline ? css.isOnline : css.isOffline }></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="90" />
            <p className="name">{name}</p>
        </li>  
    )   
}