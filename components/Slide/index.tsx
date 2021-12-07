import { ArrowForwardIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./Slide.module.scss";

interface Slide {
  slideName: string;
  slideBackgroundImage: string;
}

const Slide = ({ slideName, slideBackgroundImage }: Slide) => {
  return (
    <div className={styles["hero__slide"]} style={{ backgroundImage: `url(${slideBackgroundImage})` }}>
      <p>{slideName}</p>
      <Link href='/xd' passHref>
        <Button variant='contained' endIcon={<ArrowForwardIos />} className={styles["hero__slide-button"]}>
          VER SECCIÓN
        </Button>
      </Link>
    </div>
  );
};

export default Slide;
