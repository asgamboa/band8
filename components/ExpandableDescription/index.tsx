import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

import styles from "./ExpandableDescription.module.scss";

export interface ExpandableDescriptionProps {
  title: string;
  description: string[];
}

const ExpandableDescription = ({ title, description }: ExpandableDescriptionProps) => {
  return (
    <>
      <Paper
        component={motion.div} //
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className={styles["about-us__accordion"]}
        elevation={12}
      >
        <motion.h3
          initial={{ scale: 0.8 }} //
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          className={styles["about-us__accordion-title"]}
        >
          {title}
        </motion.h3>
        <br />
        {description.map((paragraph, idx) => {
          return (
            <motion.div
              initial={{ scale: 0.8 }} //
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              key={idx}
            >
              <p className={styles["about-us__accordion-description"]}>{paragraph}</p>
              <br />
            </motion.div>
          );
        })}
      </Paper>
    </>
  );
};

export default ExpandableDescription;
