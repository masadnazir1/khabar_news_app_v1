import React from "react";
import styles from "../Styles/Forgotpassword.module.css";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
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
        <h1 className={styles.Hello}>Forgot Password ?</h1>
        <p>
          Don’t worry! it happens. Please enter the address associated with your
          account.
        </p>
      </container>
      <container className={styles.Center}>
        <label htmlFor="Email ID / Mobile number">
          Email ID / Mobile number*
        </label>
        <div className={styles.inputBox}>
          <input type="text" />
        </div>
      </container>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/OTPVerification")}
        >
          Submit
        </button>
      </container>
    </div>
  );
};

export default Forgotpassword;
