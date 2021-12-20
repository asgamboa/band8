import { Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

import useResponsive from "../../utils/useMediaQuery";
import styles from "./Header.module.scss";

const Header = () => {
  const isDesktop = useResponsive().smallLaptop;
  return (
    <section className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <IconButton
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }} //
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
        >
          <Search className={styles["navbar__icon"]} />
        </IconButton>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} //
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className={styles["navbar__logo"]}
        >
          <img src='/assets/band_8_logo.png' alt='Band 8 logo' />
        </motion.div>
        {isDesktop || (
          <IconButton
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }} //
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.1 }}
          >
            <Menu className={styles["navbar__icon"]} />
          </IconButton>
        )}
      </nav>
    </section>
  );
};

export default Header;
