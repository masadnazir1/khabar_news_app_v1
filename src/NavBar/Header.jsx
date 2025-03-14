import React from "react";
import styles from "./HomeHeader.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import bell from "../assets/bell.png";

const HomeHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //

  return (
    <div className={styles.container}>
      <div className={styles.Left}>
        <strong onClick={() => navigate("/home")}>News</strong>
      </div>
      <div className={styles.Right}>
        <button className={styles.Notification}>
          <img src={bell} alt="bell" />
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
