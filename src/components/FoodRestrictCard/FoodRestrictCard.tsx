import React from "react";
import styles from "./FoodRestrictCard.module.css";
import FoodRestrictionIcon from "../Icons/FoodRestrictionIcon";

const FoodRestrictionCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.restrictName}>
            <FoodRestrictionIcon />
            <span>{children}</span>
        </div>
        <div className={styles.restrictAction}>
            <a href="">Remover</a>
        </div>
      </div>
    </div>
  );
}

export default FoodRestrictionCard;
