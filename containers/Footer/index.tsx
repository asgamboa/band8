import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__social-media"]}>
        <Link href='https://facebook.com' passHref>
          <Facebook className={styles["footer__icon"]} />
        </Link>
        <Link href='https://www.instagram.com/band8_mx/' passHref>
          <Instagram className={styles["footer__icon"]} />
        </Link>
        <Link href='https://api.whatsapp.com/send?phone=526674780773' passHref>
          <WhatsApp className={styles["footer__icon"]} />
        </Link>
      </div>
      <div className={styles["footer__contact-mail"]}>
        <h6 className={styles["contact-email__title"]}>Correo de contacto</h6>
        <Link href='mailto:hola@band8.com'>
          <a className={styles["contact-email"]}>hola@band8.com</a>
        </Link>
        <p className={styles["footer__copyright-message"]}>Band8 2021 ©</p>
      </div>
    </footer>
  );
};

export default Footer;
