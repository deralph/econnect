import React from "react";
import styles from "../../../../styles/newsFeed/index.module.css";
import { BsFillPlayCircleFill, BsCameraFill } from "react-icons/bs";

const Mind = () => {
  return (
    <div className={styles.mind}>
      <img src="/iconicUserPics.png" alt="" />
      <div className={styles.post}>
        <textarea type="text" placeholder="What is on your mind" />
        <div className={styles.photo}>
          <p>
            <BsCameraFill
              style={{
                color: "#4063D6",
              }}
              className={styles.icons}
            />
            Photo
          </p>
          <p>
            <BsFillPlayCircleFill
              style={{ color: "red" }}
              className={styles.icons}
            />
            Video
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mind;
