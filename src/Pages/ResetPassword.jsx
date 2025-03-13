import React from "react";
import styles from "../Styles/ResetPassword.module.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <container className={styles.Top}>
        <button className={styles.BackBtn} onClick={() => navigate(-1)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3114/3114883.png"
            alt="back"
          />
        </button>
        <h1 className={styles.Hello}>Reset Password</h1>
      </container>
      <container className={styles.Center}>
        <label htmlFor="Email ID / Mobile number">New Password*</label>
        <div className={styles.inputBox}>
          <input type="text" />
        </div>
        <label htmlFor="Email ID / Mobile number">Confirm new password*</label>
        <div className={styles.inputBox}>
          <input type="text" />
        </div>
      </container>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/verificationSucess")}
        >
          Submit
        </button>
      </container>
    </div>
  );
};

export default ResetPassword;
