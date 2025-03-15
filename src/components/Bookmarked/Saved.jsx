import React from "react";
import styles from "./Trending.module.css";
import { useNavigate } from "react-router-dom";
import ago from "../../assets/ago.png";
import dots from "../../assets/dots.png";

const Saved = ({ image, regionname, Headline, Logo, sourcename, time }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* <container className={styles.Head}>
        <h2 className={styles.trendingtxt}>Trending</h2>
        <button className={styles.seeall}>See all</button>
      </container> */}
      <container className={styles.PictureBox}>
        <img src={image} alt="Newspicture" className={styles.image} />
      </container>

      <container className={styles.NewsDetails}>
        <p className={styles.regionname}>{regionname || "Europe"}</p>
        <h2 className={styles.Headline}>{Headline}</h2>
        <div className={styles.channelDetails}>
          <div className={styles.sourceandtimegroup}>
            <div className={styles.Sourcenameandlogo}>
              <img src={Logo} alt="" className={styles.Logo} />
              <p>{sourcename || "BBC News"}</p>
            </div>
            <div className={styles.Sourcenameandlogo}>
              <img src={ago} alt="" className={styles.Logo} />
              <p>{time}</p>
            </div>
          </div>
          <div className={styles.dotbtn}>
            <button className={styles.dotsbtn}>
              {" "}
              <img src={dots} alt="" className={styles.dots} />
            </button>
          </div>
        </div>
      </container>
    </div>
  );
};

export default Saved;
