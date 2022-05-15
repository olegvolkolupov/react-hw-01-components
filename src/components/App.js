import React, { useEffect } from "react";

import Profile from "./Profile";
import user from "./data/user.json";

import Statistics from "./Statistics";
import statisticalData from "./data/statistical-data.json";

import FriendList from "./FriendList";
import friends from "./data/friends.json";

import TransactionHistory from "./TransactionHistory";
import transactions from "./data/transactions.json";

import "./global.css";

export default function App() {
  useEffect(() => {
    document.title = "react_hw_01";
  }, []);
  let { name, tag, location, avatar, stats } = user;
  return (
    <div>
      <div className="container">
        <div className="content">
          <p className="title">Profile</p>
          <Profile
            avatar={avatar}
            name={name}
            tag={tag}
            location={location}
            stats={stats}
          />
        </div>
        <div className="content">
          <p className="title">Statistics</p>
          <Statistics title="Upload stats" stats={statisticalData} />
          <Statistics stats={statisticalData} />
        </div>
        <div className="content">
          <p className="title">Friends List</p>
          <FriendList friends={friends} />
        </div>
        <div className="content">
          <p className="title">Transactions History</p>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </div>
  );
}
