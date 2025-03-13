import React from "react";
import styles from "../Styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <container className={styles.Top}>
        <h1 className={styles.Hello}>Hello</h1>
        <h1 className={styles.Again}>Again!</h1>
        <p>Welcome back you’ve been missed</p>
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
          <strong onClick={() => navigate("/Forgotpassword")}>
            Forgot the password?
          </strong>
        </div>
      </container>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/home")}
        >
          Login
        </button>
        <p>or continue with</p>

        <button className={styles.GoogleLogin}>Google</button>

        <div className={styles.noaccount}>
          <h4>don’t have an account ?</h4>
          <strong onClick={() => navigate("/Signup")}>Sign Up</strong>
        </div>
      </container>
    </div>
  );
};

export default Login;
