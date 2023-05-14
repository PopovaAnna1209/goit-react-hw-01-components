import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
          {friends.map(friend => (
            <li className={css.item} key={friend.id}>
              <span className={friend.isOnline ? css.statusOnline : css.statusOffline}>
              </span>
              <img className={css.avatar} src={friend.avatar} alt={friend.name}/>
              <p className={css.name}>{friend.name}</p>
            </li>
          ))}
        </ul>
    );
  };
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,    
      }),
    ),
  };