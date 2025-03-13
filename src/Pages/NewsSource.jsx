import React from "react";
import styles from "../Styles/NewsSource.module.css";
import { useNavigate } from "react-router-dom";

const NewsSource = () => {
  //
  const newsSources = [
    {
      name: "BBC News",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.bbc.com/news",
    },
    {
      name: "CNN",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.cnn.com",
    },
    {
      name: "Al Jazeera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.aljazeera.com",
    },
    {
      name: "The Guardian",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.theguardian.com/international",
    },
    {
      name: "Fox News",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.foxnews.com",
    },
    {
      name: "Reuters",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.reuters.com",
    },
    {
      name: "The New York Times",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.nytimes.com",
    },
    {
      name: "ARY News",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://arynews.tv",
    },
    {
      name: "Geo News",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.geo.tv",
    },
    {
      name: "Dawn News",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.dawn.com",
    },
    {
      name: "CNBC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.cnbc.com",
    },
    {
      name: "Bloomberg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      website: "https://www.bloomberg.com",
    },
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
            <strong>Choose your News Sources</strong>
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
        {newsSources.map((Itme, index) => (
          <div key={index} className={styles.NewsBox}>
            <img src={Itme.logo} alt="" className={styles.ItmeLogo} />
            <h2>{Itme.name}</h2>
            <button className={styles.Follow}>Follow</button>
          </div>
        ))}
      </section>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/UpdateProfile")}
        >
          Next
        </button>
      </container>
    </div>
  );
};

export default NewsSource;
