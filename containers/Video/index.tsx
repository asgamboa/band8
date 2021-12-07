import React from "react";
import styles from "./Video.module.scss";

const Video = () => {
  return (
    <section className={styles["commercial"]}>
      <h3 className={styles["commercial__title"]}>Video comercial</h3>
      <video src='/comercial.mp4' className={styles["commercial__video"]} controls />
      <h3 className={styles["commercial__title"]}>Spot publicitario</h3>
      <video src='/spot.mp4' className={styles["commercial__video"]} controls />
    </section>
  );
};

export default Video;
