import { motion } from "framer-motion";
import React from "react";
import styles from "./Location.module.scss";

const Location = () => {
  return (
    <section className={styles["location"]}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.441175951205!2d-107.40267968507418!3d24.814581984075623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd0a76213076f%3A0xa0f9556f4de4be4!2sForum%20Culiac%C3%A1n%20Centro%20Comercial!5e0!3m2!1ses-419!2smx!4v1638836741561!5m2!1ses-419!2smx'
        className={styles["location__map"]}
        allowFullScreen
        loading='lazy'
      />
      <motion.div
        initial={{ scale: 0.8 }} //
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        className={styles["location__address"]}
      >
        <h3 className={styles["address__title"]}>Encuéntranos en:</h3>
        <p className={styles["address__info"]}>Diego Valadés Ríos 1676</p>
        <p className={styles["address__info"]}>Desarrollo Urbano Tres Ríos 80000</p>
        <p className={styles["address__info"]}>Culiacán Rosales, Sin.</p>
      </motion.div>
    </section>
  );
};

export default Location;
