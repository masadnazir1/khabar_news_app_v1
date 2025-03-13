import React from "react";
import styles from "../Styles/SelectTopicsScreen.module.css";
import { useNavigate } from "react-router-dom";

const SelectTopicsScreen = () => {
  //
  const newsTopics = [
    { category: "World News", topic: "International Affairs" },
    { category: "World News", topic: "Geopolitics" },
    { category: "World News", topic: "Diplomacy" },
    { category: "World News", topic: "Elections" },

    { category: "Politics", topic: "Government Policies" },
    { category: "Politics", topic: "Elections & Campaigns" },
    { category: "Politics", topic: "Political Debates" },
    { category: "Politics", topic: "Legislative Updates" },

    { category: "Business", topic: "Stock Market" },
    { category: "Business", topic: "Startups & Entrepreneurship" },
    { category: "Business", topic: "Corporate News" },
    { category: "Business", topic: "Cryptocurrency" },

    { category: "Technology", topic: "Artificial Intelligence" },
    { category: "Technology", topic: "Gadgets & Reviews" },
    { category: "Technology", topic: "Cybersecurity" },
    { category: "Technology", topic: "Software & Apps" },

    { category: "Health", topic: "Medical Breakthroughs" },
    { category: "Health", topic: "Mental Health" },
    { category: "Health", topic: "Nutrition & Diet" },
    { category: "Health", topic: "Fitness & Wellness" },

    { category: "Science", topic: "Space Exploration" },
    { category: "Science", topic: "Climate Change" },
    { category: "Science", topic: "Physics & Quantum Mechanics" },
    { category: "Science", topic: "Genetics & Biotechnology" },

    { category: "Sports", topic: "Football" },
    { category: "Sports", topic: "Cricket" },
    { category: "Sports", topic: "Tennis" },
    { category: "Sports", topic: "Olympics & Global Events" },

    { category: "Entertainment", topic: "Movies & TV Shows" },
    { category: "Entertainment", topic: "Music & Albums" },
    { category: "Entertainment", topic: "Celebrity Gossip" },
    { category: "Entertainment", topic: "Awards & Events" },

    { category: "Lifestyle", topic: "Travel & Tourism" },
    { category: "Lifestyle", topic: "Fashion Trends" },
    { category: "Lifestyle", topic: "Food & Recipes" },
    { category: "Lifestyle", topic: "Home & Living" },

    { category: "Education", topic: "Online Learning" },
    { category: "Education", topic: "Study Tips & Guides" },
    { category: "Education", topic: "Scholarships & Grants" },
    { category: "Education", topic: "EdTech Innovations" },

    { category: "Finance", topic: "Personal Finance" },
    { category: "Finance", topic: "Investing & Trading" },
    { category: "Finance", topic: "Real Estate" },
    { category: "Finance", topic: "Banking & Loans" },

    { category: "Automobiles", topic: "Electric Vehicles" },
    { category: "Automobiles", topic: "Car Reviews" },
    { category: "Automobiles", topic: "Auto Industry News" },
    { category: "Automobiles", topic: "Motorcycles & Bikes" },

    { category: "Gaming", topic: "eSports" },
    { category: "Gaming", topic: "Game Reviews" },
    { category: "Gaming", topic: "Game Development" },
    { category: "Gaming", topic: "VR & AR Gaming" },

    { category: "Environment", topic: "Sustainable Living" },
    { category: "Environment", topic: "Wildlife Conservation" },
    { category: "Environment", topic: "Recycling & Waste Management" },
    { category: "Environment", topic: "Natural Disasters" },

    { category: "History", topic: "Ancient Civilizations" },
    { category: "History", topic: "World War History" },
    { category: "History", topic: "Historical Figures" },
    { category: "History", topic: "Archaeological Discoveries" },

    { category: "Religion & Philosophy", topic: "Religious Studies" },
    { category: "Religion & Philosophy", topic: "Ethics & Morality" },
    { category: "Religion & Philosophy", topic: "Spirituality" },
    { category: "Religion & Philosophy", topic: "Ancient Philosophers" },

    { category: "Weird & Unexplained", topic: "UFO Sightings" },
    { category: "Weird & Unexplained", topic: "Paranormal Activity" },
    { category: "Weird & Unexplained", topic: "Myths & Legends" },
    { category: "Weird & Unexplained", topic: "Conspiracy Theories" },
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
            <span>{item.category}</span>
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
