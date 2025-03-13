import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/SplashScreen.module.css";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [set, setset] = useState(false);
  //
  useEffect(() => {
    setTimeout(() => {
      navigate("/onboarding1");
    }, 4000);
  }, [set]);
  return (
    <div className={styles.container}>
      <h2>Khabar</h2>
    </div>
  );
};

export default SplashScreen;
