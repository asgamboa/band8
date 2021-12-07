import React from "react";
import styles from "./ExpandableDescription.module.scss";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export interface ExpandableDescriptionProps {
  title: string;
  description: string[];
}

const ExpandableDescription = ({ title, description }: ExpandableDescriptionProps) => {
  return (
    <Accordion className={styles["about-us__accordion"]}>
      <AccordionSummary expandIcon={<ExpandMore className={styles["about-us__accordion-icon"]} />}>
        <h3 className={styles["about-us__accordion-title"]}>{title}</h3>
      </AccordionSummary>
      <AccordionDetails>
        {description.map((paragraph, idx) => {
          return (
            <div key={idx}>
              <p className={styles["about-us__accordion-description"]}>{paragraph}</p>
              <br />
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default ExpandableDescription;
