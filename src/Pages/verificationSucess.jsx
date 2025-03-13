import React from "react";
import styles from "../Styles/verificationSucess.module.css";
import { useNavigate } from "react-router-dom";

const Sucess = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <container className={styles.Top}>
        <h1 className={styles.Hello}>Congratulations!</h1>
        <p>Your account ready to use</p>
      </container>

      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/home")}
        >
          Go to Homepage
        </button>
      </container>
    </div>
  );
};

export default Sucess;
