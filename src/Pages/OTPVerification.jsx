import React from "react";
import styles from "../Styles/OTPVerification.module.css";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
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
        <h1 className={styles.Hello}>OTP Verification</h1>
      </container>
      <container className={styles.Center}>
        <label htmlFor="Email ID / Mobile number">
          Enter the OTP sent to +67-1234-5678-9
        </label>
        <div className={styles.inputBox}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className={styles.box}>
          <p>Resend code in </p>
          <strong>56s</strong>
        </div>
      </container>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/ResetPassword")}
        >
          Verify
        </button>
      </container>
    </div>
  );
};

export default OTPVerification;
