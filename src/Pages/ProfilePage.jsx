import React from "react";
import styles from "../Styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import Tabs from "../BottomTabs/Tabs";
import HomeHeader from "../NavBar/Header";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <HomeHeader />
      <container className={styles.content}>
        <h2>Profile</h2>
      </container>
      <Tabs />
    </div>
  );
};

export default Profile;
