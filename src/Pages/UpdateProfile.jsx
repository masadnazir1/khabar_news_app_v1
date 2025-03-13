import React from "react";
import styles from "../Styles/UpdateProfile.module.css";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  //

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
            <strong>Fill your Profile</strong>
          </div>
        </div>
      </container>
      <div className={styles.ProfilePictureBox}>
        <div className={styles.PictureandCameraBox}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
            alt=""
            className={styles.Picture}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/45/45010.png"
            alt="update"
            className={styles.camera}
          />
        </div>
      </div>

      <section className={styles.Center}>
        <div className={styles.InputBox}>
          <label htmlFor="Username">Username</label>
          <input type="text" />
        </div>
        <div className={styles.InputBox}>
          <label htmlFor="Username">Full Name</label>
          <input type="text" />
        </div>
        <div className={styles.InputBox}>
          <label htmlFor="Username">Email Address*</label>
          <input type="text" />
        </div>
        <div className={styles.InputBox}>
          <label htmlFor="Username">Phone Number*</label>
          <input type="text" />
        </div>
      </section>
      <container className={styles.Bottom}>
        <button
          className={styles.Loginbutton}
          onClick={() => navigate("/home")}
        >
          Next
        </button>
      </container>
    </div>
  );
};

export default UpdateProfile;
