import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "@/lib/contexts/MenuContext";
import HeaderBar from "../HeaderBar/HeaderBar";
import MealCard from "../MealCard/MealCard";
import MealCardSkeleton from "../MealCard/MealCardSkeleton";
import styles from "./MenuContainer.module.css";
import { TokenContext } from "@/lib/contexts/TokenContext";

const MenuContainer = () => {
  const { menu, setMenu } = useContext(MenuContext);
  const { token } = useContext(TokenContext)
  const [shouldReload, setShouldReload] = useState(false)

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/all/menus-today?date=${new Date().toISOString().split("T")[0]}`, {
      headers: {
        "Authorization": `Bearer ${token?.access_token}`,
      },
    })
      .then(res => res.json())
      .then(setMenu);
  }, [setMenu, token?.access_token]);

  const meals = menu
    ? menu.map((meal, index) => (
      <div className={styles.mealWrapper} key={index}>
        <MealCard key={meal.id} menu={meal} showDateAndTime reload={() => setShouldReload(!shouldReload)} />
      </div>
    ))
    : <>
      <MealCardSkeleton key={1} />
      <MealCardSkeleton key={2} />
      <MealCardSkeleton key={3} />
      <MealCardSkeleton key={4} />
    </>

  return (
    <div className={styles.wrapper}>
      <HeaderBar>Refeições do dia</HeaderBar>
      {meals}
    </div>
  );
};

export default MenuContainer;