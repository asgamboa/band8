import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className={styles["footer"]}>
      <motion.div
        initial={{ scale: 0.8 }} //
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        className={styles["footer__social-media"]}
      >
        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/band8_mx/'>
          <Instagram className={styles["footer__icon"]} />
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.tiktok.com/@band8_mx?'>
          <div className={styles["footer__svg-container"]}>
            <svg viewBox='4 4 42 42' xmlns='http://www.w3.org/2000/svg' className={styles["footer_svg"]}>
              <path d='M41 4H9C6.243 4 4 6.243 4 9v32c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5m-3.994 18.323a7.482 7.482 0 0 1-.69.035 7.492 7.492 0 0 1-6.269-3.388v11.537a8.527 8.527 0 1 1-8.527-8.527c.178 0 .352.016.527.027v4.202c-.175-.021-.347-.053-.527-.053a4.351 4.351 0 1 0 0 8.704c2.404 0 4.527-1.894 4.527-4.298l.042-19.594h4.02a7.488 7.488 0 0 0 6.901 6.685v4.67' />
            </svg>
          </div>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://api.whatsapp.com/send?phone=526674780773'>
          <WhatsApp className={styles["footer__icon"]} />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8 }} //
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        className={styles["footer__contact-mail"]}
      >
        <Link href='mailto:hola@band8.com'>
          <a className={styles["contact-email"]}>band8_2021@gmail.com</a>
        </Link>
        <p className={styles["footer__copyright-message"]}>Band8 2021 ©</p>
      </motion.div>
    </section>
  );
};

export default Footer;
