import HeaderBar from "@/components/HeaderBar/HeaderBar";
import MealCard from "@/components/MealCard/MealCard";
import React from "react";

import style from "./page.module.css"

const cardProps = {
  id: 448763,
  date: "2024-03-07",
  dateInsert: "2024-03-06",
  time: "20:09:31",
  wasPresent: 1,
  meal_id: 4,
  student_id: 2153,
  user_id: 9,
  campus_id: 1,
  absenceJustification: null,
  canceled_by_student: 0,
  ticketCode: null,
  menu_id: 2349,
  menu: {
    id: 2349,
    date: "2024-03-06",
    description: "Cuscuz c/ carne moída ou Ovos  + Suco de Caju",
    campus_id: 1,
    meal_id: 4
  },
  meal: {
    id: 4,
    description: "Lanche da noite",
    timeEnd: "20:40:00",
    timeStart: "19:50:00",
    campus_id: 1,
    qtdTimeReservationEnd: 1,
    qtdTimeReservationStart: 19
  }
};

export default function Home() {
  return (
    <>
    <p>asdasd</p>
    <HeaderBar>Olaaaa</HeaderBar>
    <div className={style.mealContainer}>
    <MealCard reservation={cardProps}>
    </MealCard>
    <MealCard reservation={cardProps}>
    </MealCard>
    <MealCard reservation={cardProps}>
    </MealCard>
    </div>
    </>
  );
}
