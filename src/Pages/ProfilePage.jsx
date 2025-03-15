import React from "react";
import styles from "../Styles/Profile.module.css";
import { useNavigate } from "react-router-dom";
import Tabs from "../BottomTabs/Tabs";
import AddButton from "../components/UI/AddPostStickyButton";
import Saved from "../components/Bookmarked/Saved";

const Profile = () => {
  const navigate = useNavigate();
  //
  const trendingData = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    sourcename: "BBC",
    time: "4h ago",
    Headline: "Russian warship: Moskva sinks in Black Sea",
    regionname: "PK",
    image:
      "https://www.thenews.com.pk/assets/uploads/updates/2025-03-14/l_1291711_054459_updates.jpg",
    Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BBC_World_News_2022_%28Boxed%29.svg/2048px-BBC_World_News_2022_%28Boxed%29.svg.png",
  }));
  //
  return (
    <div className={styles.container}>
      <section className={styles.Head}>
        <h2>Profile</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3364/3364202.png"
          alt=""
          onClick={() => navigate("/Settings")}
        />
      </section>

      <container className={styles.top}>
        <div className={styles.rowprofile}>
          <div className={styles.left}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VYSL5qaeq23ib97of8mI9wGA7b6G_QhUVA&s"
              alt=""
            />
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <strong>2134</strong>
              <h2>Followers</h2>
            </div>
            <div className={styles.box}>
              <strong>2134</strong>
              <h2>Following</h2>
            </div>
            <div className={styles.box}>
              <strong>2134</strong>
              <h2>News</h2>
            </div>
          </div>
        </div>
        <div className={styles.Userdetails}>
          <strong>M Asad Nazir</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={styles.Buttons}>
          <button className={styles.Button}>Edit profile</button>
          <button className={styles.Button}>Website</button>
        </div>
      </container>
      <container className={styles.content}>
        {trendingData.map((item) => (
          <Saved
            key={item.id}
            sourcename={item.sourcename}
            time={item.time}
            Headline={item.Headline}
            regionname={item.regionname}
            image={item.image}
            Logo={item.Logo}
          />
        ))}
        <AddButton />
      </container>

      <Tabs />
    </div>
  );
};

export default Profile;
