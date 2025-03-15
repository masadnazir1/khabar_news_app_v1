import React from "react";
import styles from "../Styles/Bookmark.module.css";
import { useNavigate } from "react-router-dom";
import Tabs from "../BottomTabs/Tabs";
import Saved from "../components/Bookmarked/Saved";
import Trending from "../components/TrendingHome/Trending";

const Explore = () => {
  const navigate = useNavigate();
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
  //
  //
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <h2>Bookmark</h2>
      </section>
      <container className={styles.content}>
        <Trending
          sourcename="BBC"
          time="4h ago"
          Headline="Russian warship: Moskva sinks in Black Sea"
          regionname="PK"
          image="https://www.thenews.com.pk/assets/uploads/updates/2025-03-14/l_1291711_054459_updates.jpg"
          Logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BBC_World_News_2022_%28Boxed%29.svg/2048px-BBC_World_News_2022_%28Boxed%29.svg.png"
        />
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
      </container>
      <Tabs />
    </div>
  );
};

export default Explore;
