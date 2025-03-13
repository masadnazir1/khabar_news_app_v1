import React from "react";
import styles from "../Styles/signgup.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <container className={styles.Top}>
        <h1 className={styles.Again}>Hello!</h1>
        <p>Signup to get Started</p>
      </container>
      <container className={styles.Center}>
        <label htmlFor="Username">Username*</label>
        <div className={styles.inputBox}>
          <input type="text" />
        </div>

        <label htmlFor="passwords">passwords*</label>

        <div className={styles.inputBox}>
          <input type="text" />
        </div>
        <div className={styles.remember}>
          <p>Remember me</p>
          <strong>Forgot the password?</strong>
        </div>
      </container>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/SelectCountryScreen")}
        >
          Signup
        </button>
        <p>or continue with</p>

        <button className={styles.GoogleLogin}>Google</button>

        <div className={styles.noaccount}>
          <h4>Already have an account?</h4>
          <strong onClick={() => navigate("/login")}>Login</strong>
        </div>
      </container>
    </div>
  );
};

export default SignUp;
