import React from "react";
import PropTypes from "prop-types";

import styles from "./Profile.module.css";

export default function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={styles.profile}>
      <div>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers:</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views:</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes:</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  name: "anonymous",
  tag: "notag",
  location: "Earth",
  avatar:
    "https://cdn.pixabay.com/photo/2017/10/29/14/02/portrait-2899779__340.png",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
