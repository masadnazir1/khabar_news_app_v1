import React from "react";
import styles from "../Styles/Settings.module.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  //

  //
  return (
    <div className={styles.container}>
      <section className={styles.Head}>
        <div className={styles.HeadLeft}>
          <img
            onClick={() => navigate(-1)}
            src="https://cdn-icons-png.flaticon.com/128/507/507257.png"
            alt=""
          />
        </div>
        <div className={styles.HeadRight}>
          <h4>Profile</h4>
        </div>
      </section>

      <container className={styles.content}>
        <div className={styles.RowBox}>
          <div className={styles.Left}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2529/2529521.png"
              alt=""
            />
            <strong>Notification</strong>
          </div>
          <div className={styles.right}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709586.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.RowBox}>
          <div className={styles.Left}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14361/14361771.png"
              alt=""
            />
            <strong>Security</strong>
          </div>
          <div className={styles.right}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709586.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.RowBox}>
          <div className={styles.Left}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/471/471664.png"
              alt=""
            />
            <strong>Help</strong>
          </div>
          <div className={styles.right}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709586.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.RowBox}>
          <div className={styles.Left}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4623/4623236.png"
              alt=""
            />
            <strong>Dark Mode</strong>
          </div>
          <div className={styles.right}>
            <label class={styles.toggleswitch}>
              <input type="checkbox" />
              <span class={styles.slider}></span>
            </label>
          </div>
        </div>
        <div className={styles.RowBox}>
          <div className={styles.Left}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/992/992680.png"
              alt=""
            />
            <strong>Logout</strong>
          </div>
          <div className={styles.right}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709586.png"
              alt=""
            />
          </div>
        </div>
      </container>
    </div>
  );
};

export default Settings;
