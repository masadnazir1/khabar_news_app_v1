import React from "react";
import styles from "../Styles/CreatePostScreen.module.css";
import { useNavigate } from "react-router-dom";

const CreatePostScreen = () => {
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
          <h4>Create News</h4>
        </div>
        <div className={styles.HeadRightEnd}>
          <img
            // onClick={() => navigate(-1)}
            src="https://cdn-icons-png.flaticon.com/128/512/512222.png"
            alt=""
          />
        </div>
      </section>

      <container className={styles.content}>
        <div className={styles.Imageselect}>
          <span className={styles.plussign}>+</span>
          <span className={styles.text}>Add Cover Photo</span>
          <input
            type="file"
            id="cover-photo"
            className={styles.fileinput}
            accept="image/*"
          />
        </div>
        <div className={styles.formArea}>
          <input
            type="text"
            className={styles.title}
            placeholder="News title"
          />
          <input
            type="text"
            className={styles.post}
            placeholder="Add News/Article"
          />
        </div>
      </container>
      <container className={styles.BottomSticky}>
        <div className={styles.LeftOfbottom}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/8259/8259004.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/6995/6995971.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
            alt=""
          />
        </div>
        <div className={styles.RightOfbottom}>
          <button className={styles.buttonPost}>Publish</button>
        </div>
      </container>
    </div>
  );
};

export default CreatePostScreen;
