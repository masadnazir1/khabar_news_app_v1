import React from "react";
import styles from "../../Styles/AddButton.module.css";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  //

  return (
    <button
      className={styles.AddButton}
      onClick={() => navigate("/CreatePostScreen")}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
        alt=""
        className={styles.AddButtonimg}
      />
    </button>
  );
};

export default AddButton;
