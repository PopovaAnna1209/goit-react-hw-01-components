import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline}) => {
    return (
    <li className={css.item} key={id}>
        <span className={isOnline ? css.statusOnline : css.statusOffline}>
        </span>
        <img className={css.avatar} src={avatar} alt={name}/>
        <p className={css.name}>{name}</p>
    </li>
    )};
    
    FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    };