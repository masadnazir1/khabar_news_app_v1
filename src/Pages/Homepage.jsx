import React from "react";
import styles from "../Styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import Tabs from "../BottomTabs/Tabs";
import HomeHeader from "../NavBar/Header";
import Trending from "../components/TrendingHome/Trending";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <HomeHeader />
      <container className={styles.content}>
        <Trending
          sourcename="BBC"
          time="4h ago"
          Headline="Russian warship: Moskva sinks in Black Sea"
          regionname="PK"
          image="https://www.thenews.com.pk/assets/uploads/updates/2025-03-14/l_1291711_054459_updates.jpg"
          Logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BBC_World_News_2022_%28Boxed%29.svg/2048px-BBC_World_News_2022_%28Boxed%29.svg.png"
        />
      </container>
      <Tabs />
    </div>
  );
};

export default Home;
