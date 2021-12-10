import { Card, CardMedia } from "@mui/material";
import React from "react";
import styles from "./Video.module.scss";

const Video = () => {
  return (
    <section className={styles["commercial"]}>
      <div>
        <h3 className={styles["commercial__title"]}>Video comercial</h3>
        <video src='/video/comercial.mp4' className={styles["commercial__video"]} controls />
      </div>
      <div>
        <h3 className={styles["commercial__title"]}>Spot publicitario</h3>
        <video src='/video/spot.mp4' className={styles["commercial__video"]} controls />
      </div>
    </section>
  );
};

export default Video;
