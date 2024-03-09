"use client"

import HeaderBar from "@/components/HeaderBar/HeaderBar";
import MealCard from "@/components/MealCard/MealCard";
import React from "react";

import style from "./page.module.css"
import CardAttention from "@/components/CardAttention/CardAttention";
import { FoodRestrictionContext, MenuContext } from "./layout";
import FoodRestrictionCard from "@/components/FoodRestrictionCard/FoodRestrictionCard";
import StudentCard from "@/components/StudentCard/StudentCard";

export default function Home() {
  const menuContext = React.useContext(MenuContext);
  const foodRestrictionContext = React.useContext(FoodRestrictionContext);

  return (
    <>
      <HeaderBar>Refeições do dia</HeaderBar>
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

      <HeaderBar>Restrições alimentares</HeaderBar>
      <div className={style.mealContainer}>{
        foodRestrictionContext.foodRestrictions.map((restriction, index) => (
          <FoodRestrictionCard key={index}>{restriction}</FoodRestrictionCard>
        ))
      }{
        foodRestrictionContext.foodRestrictions.length === 0 && (
          <div>Nenhuma restrição alimentar cadastrada</div>
        )
      }</div>

      <StudentCard />
    </>
  );
}
