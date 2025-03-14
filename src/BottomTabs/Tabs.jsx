import React from "react";
import styles from "./Tabs.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import homeoutlined from "../assets/Tabs/homeoutlined.png";
import exploreout from "../assets/Tabs/exploreout.png";
import bookmarkout from "../assets/Tabs/bookmarkout.png";
import profileout from "../assets/Tabs/profileout.png";
//focused icons
import homefilled from "../assets/Tabs/homefill.png";
import explorefill from "../assets/Tabs/explorefill.png";
import bookmarkfill from "../assets/Tabs/bookmarkfill.png";
import profilefill from "../assets/Tabs/profilefill.png";

const Tabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //

  return (
    <div className={styles.container}>
      <div className={styles.tab} onClick={() => navigate("/home")}>
        <img
          src={location.pathname === "/home" ? homefilled : homeoutlined}
          alt="home"
          className={
            location.pathname === "/home"
              ? styles.TabIconActive
              : styles.TabIcon
          }
        />
        <span>Home</span>
      </div>
      <div className={styles.tab} onClick={() => navigate("/explore")}>
        <img
          src={location.pathname === "/explore" ? explorefill : exploreout}
          alt=""
          className={
            location.pathname === "/explore"
              ? styles.TabIconActive
              : styles.TabIcon
          }
        />
        <span>Home</span>
      </div>
      <div className={styles.tab} onClick={() => navigate("/bookmark")}>
        <img
          src={location.pathname === "/bookmark" ? bookmarkfill : bookmarkout}
          alt=""
          className={
            location.pathname === "/bookmark"
              ? styles.TabIconActive
              : styles.TabIcon
          }
        />
        <span>Home</span>
      </div>
      <div className={styles.tab} onClick={() => navigate("/profile")}>
        <img
          src={location.pathname === "/profile" ? profilefill : profileout}
          alt=""
          className={
            location.pathname === "/profile"
              ? styles.TabIconActive
              : styles.TabIcon
          }
        />
        <span>Home</span>
      </div>
    </div>
  );
};

export default Tabs;
