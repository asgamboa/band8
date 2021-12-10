import React from "react";
import { Search, Menu } from "@mui/icons-material";
import styles from "./Header.module.scss";
import { IconButton } from "@mui/material";
import useResponsive from "../../utils/useMediaQuery";

const Header = () => {
  const isDesktop = useResponsive().smallLaptop;
  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <IconButton>
          <Search className={styles["navbar__icon"]} />
        </IconButton>
        <div className={styles["navbar__logo"]}>
          <img src='/assets/band_8_logo.png' alt='Band 8 logo' />
        </div>
        {isDesktop || (
          <IconButton onClick={() => {}}>
            <Menu className={styles["navbar__icon"]} />
          </IconButton>
        )}
      </nav>
    </header>
  );
};

export default Header;
