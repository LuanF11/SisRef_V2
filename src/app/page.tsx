"use client"

import HeaderBar from "@/components/HeaderBar/HeaderBar";
import MealCard from "@/components/MealCard/MealCard";
import React from "react";

import style from "./page.module.css"
import CardAttention from "@/components/CardAttention/CardAttention";
import { MenuContext } from "./layout";
import FoodRestrictionCard from "@/components/FoodRestrictCard/FoodRestrictCard";
import StudentCard from "@/components/StudentCard/StudentCard";

export default function Home() {
  const menuContext = React.useContext(MenuContext);

  return (
    <>
      <HeaderBar>Olaaaa</HeaderBar>
      <div className={style.mealContainer}>
        {
          menuContext.menu.map((menu) => (
            <MealCard key={menu.id} menu={menu} showDateAndTime />
          ))
        }
      </div>
      <CardAttention>
        Devido à queda da internet no campus, todas as reservas de alimentação, exceto a do lanche da noite, serão feitas de maneira presencial na recepção.
      </CardAttention>
      <FoodRestrictionCard>
        Leite
      </FoodRestrictionCard>
      <StudentCard >

      </StudentCard>
    </>
  );
}
