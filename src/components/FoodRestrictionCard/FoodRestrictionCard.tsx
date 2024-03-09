import React from "react";
import styles from "./FoodRestrictionCard.module.css";
import FoodRestrictionIcon from "../Icons/FoodRestrictionIcon";
import { FoodRestrictionContext } from "@/app/layout";

const FoodRestrictionCard = ({ children }: { children: React.ReactNode }) => {
  const foodRestrictionContext = React.useContext(FoodRestrictionContext);
  
  const handleRemover = (restriction: string) => {
    const response = fetch(`${process.env.API_URL}/api/remove-food-restriction?restriction=${restriction}`)
      .then(res => res.json())
      .then(data => {
        foodRestrictionContext.setFoodRestrictions(data);
      });
  }

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.restrictName}>
            <FoodRestrictionIcon />
            <span>{children}</span>
        </div>
        <div className={styles.restrictAction}>
            <a onClick={() => handleRemover(String(children))}>Remover</a>
        </div>
      </div>
    </div>
  );
}

export default FoodRestrictionCard;
