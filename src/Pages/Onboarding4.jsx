import React from "react";
import styles from "../Styles/Onboarding4.module.css";
import { useNavigate } from "react-router-dom";

const Onboarding4 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <container className={styles.Top}></container>
      <container className={styles.Center}>
        <h2>Lorem Ipsum is simply dummy</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </container>
      <container className={styles.Bottom}>
        <div className={styles.Box}>
          <div className={styles.dotsbox}>
            <strong className={styles.INactive}></strong>
            <strong className={styles.INactive}></strong>
            <strong className={styles.INactive}></strong>
            <strong className={styles.active}></strong>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.Backbtn} onClick={() => navigate(-1)}>
              Back
            </button>
            <button
              className={styles.Nextbtn}
              onClick={() => navigate("/Login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </container>
    </div>
  );
};

export default Onboarding4;
