import React from "react";
import styles from "../Styles/SelectCountryScreen.module.css";
import { useNavigate } from "react-router-dom";

const SelectCountryScreen = () => {
  //
  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "India", flag: "🇮🇳" },
    { name: "China", flag: "🇨🇳" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "South Korea", flag: "🇰🇷" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "Russia", flag: "🇷🇺" },
  ];

  //
  const navigate = useNavigate();
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
            <strong>Select your Country</strong>
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
        {countries.map((country, index) => (
          <div
            key={index}
            className={styles.CountryList}
            onClick={() =>
              console.log("Selected country is", country.name, country.flag)
            }
          >
            <span>{country.flag}</span>
            <span>{country.name}</span>
          </div>
        ))}
      </section>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/SelectTopicsScreen")}
        >
          Next
        </button>
      </container>
    </div>
  );
};

export default SelectCountryScreen;
