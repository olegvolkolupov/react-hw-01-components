import React from "react";
import PropTypes from "prop-types";

import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  let statusStyle = isOnline ? styles.statusBlue : styles.statuBlack;
  let statusTitle = isOnline ? "online" : "offline";
  return (
    <li className={styles.item}>
      <span className={statusStyle}>{statusTitle}</span>
      <br />
      <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar:
    "https://cdn.pixabay.com/photo/2016/09/02/23/05/pumpkin-1640560__340.png",
  name: "anonymous",
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
