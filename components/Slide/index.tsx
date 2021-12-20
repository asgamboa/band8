import { ArrowForwardIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./Slide.module.scss";
import { motion } from "framer-motion";

interface Slide {
  slideName: string;
  slideBackgroundImage: string;
}

const Slide = ({ slideName, slideBackgroundImage }: Slide) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} //
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className={styles["hero__slide"]}
      style={{ backgroundImage: `url(${slideBackgroundImage})` }}
    >
      <motion.p
        initial={{ opacity: 0 }} //
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        {slideName}
      </motion.p>
      <Link href='/' passHref>
        <Button
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          variant='contained'
          endIcon={<ArrowForwardIos />}
          className={styles["hero__slide-button"]}
        >
          VER SECCIÓN
        </Button>
      </Link>
    </motion.div>
  );
};

export default Slide;
