import React, { useContext, useEffect } from "react";
import { MenuContext } from "@/lib/contexts/MenuContext";
import HeaderBar from "../HeaderBar/HeaderBar";
import MealCard from "../MealCard/MealCard";
import MealCardSkeleton from "../MealCard/MealCardSkeleton";
import styles from "./MenuContainer.module.css";

const MenuContainer = () => {
  const { menu, setMenu } = useContext(MenuContext);

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/meal-by-day`)
      .then(res => res.json())
      .then(setMenu);
  }, [setMenu]);

  const meals = menu 
    ? menu.map((meal, index) => (
        <div className={styles.mealWrapper} key={index}>
          <MealCard key={meal.id} menu={meal} showDateAndTime />
        </div>
      ))
    : Array(4).fill(<MealCardSkeleton />);

  return (
    <div className={styles.wrapper}>
      <HeaderBar>Refeições do dia</HeaderBar>
      {meals}
    </div>
  );
};

export default MenuContainer;