import React from "react";
import styles from "../Styles/SelectTopicsScreen.module.css";
import { useNavigate } from "react-router-dom";

const SelectTopicsScreen = () => {
  //
  const newsTopics = [
    { category: "Technology", topic: "Artificial Intelligence" },
    { category: "Technology", topic: "Gadgets & Reviews" },

    { category: "Health", topic: "Medical Breakthroughs" },
    { category: "Health", topic: "Mental Health" },

    { category: "Science", topic: "Space Exploration" },
    { category: "Science", topic: "Climate Change" },

    { category: "Sports", topic: "Football" },
    { category: "Sports", topic: "Cricket" },

    { category: "Entertainment", topic: "Movies & TV Shows" },
    { category: "Entertainment", topic: "Music & Albums" },
  ];

  //
  const navigate = useNavigate();
  //
  return (
    <div className={styles.container}>
      <container className={styles.Top}>
        <div className={styles.Header}>
          <div className={styles.Left}>
            <button className={styles.BackBtn} onClick={() => navigate(-1)}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3114/3114883.png"
                alt="back"
              />
            </button>
          </div>
          <div className={styles.Right}>
            <strong>Chose your Topics</strong>
          </div>
        </div>
        <div className={styles.SearchBox}>
          <input type="text" placeholder="Search..." />
          <button className={styles.searchIcon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
              alt=""
            />
          </button>
        </div>
      </container>

      <section className={styles.Center}>
        {newsTopics.map((item, index) => (
          <div
            key={index}
            className={styles.CountryList}
            onClick={() =>
              console.log("Selected Topic is", item.category, item.topic)
            }
          >
            <span>{item.topic}</span>
          </div>
        ))}
      </section>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/NewsSource")}
        >
          Next
        </button>
      </container>
    </div>
  );
};

export default SelectTopicsScreen;
