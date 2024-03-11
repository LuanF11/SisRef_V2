import HeaderBar from "@/components/HeaderBar/HeaderBar";
import MealCard from "@/components/MealCard/MealCard";
import React from "react";

import style from "./page.module.css"
import { MenuItemWithMeal } from "@/lib/types/MenuItemWithMeal";
import CardAttention from "@/components/CardAttention/CardAttention";
import FoodRestrictionCard from "@/components/FoodRestrictCard/FoodRestrictCard";
import StudentCard from "@/components/StudentCard/StudentCard";
import { StudentInfo } from "@/lib/types/StudenInfo";
import { CampusCod } from "@/lib/types/CampusCod";
import LoginPage from "./loginPage";

const cardProps: MenuItemWithMeal = {
  id: 2378,
  date: "2024-03-08",
  description: "Cuscuz c/ ovos + Suco de laranja",
  campus_id: 1,
  meal_id: 4,
  permission: 1,
  agendado: false,
  canceled_by_student: false,
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

const cardStudentProps: StudentInfo = {
  id: 2149,
  active: 1,
  dateValid: "2024-03-08",
  mat: "123456",
  name: "João",
  semRegular: 1,
  course_id: 1,
  shift_id: 1,
  photo: null,
  campus_id: 1,
  observation: null,
  republic: null,
  block: null,
  absent_meal: 1,
  course: {
    id: 1,
    description: "Sistema de Informação",
    initials: "BSI",
    campus_id: 1
  }
};

const infoCampus: CampusCod = {
  id: 1,
  description: "Cedro",
};

const campus = JSON.parse(JSON.stringify(infoCampus))
const studentProps = JSON.parse(JSON.stringify(cardStudentProps))
const cardProps2 = JSON.parse(JSON.stringify(cardProps))
const cardProps3 = JSON.parse(JSON.stringify(cardProps))
const cardProps4 = JSON.parse(JSON.stringify(cardProps))
const cardProps5 = JSON.parse(JSON.stringify(cardProps))

cardProps2.meal_id = 1
cardProps2.meal.description = "Almoço"
cardProps2.canceled_by_student = 1

cardProps3.meal_id = 2
cardProps3.meal.description = "Lanche da tarde"
cardProps3.permission = 0

cardProps4.meal_id = 3
cardProps4.meal.description = "Lanche da noite"
cardProps4.agendado = true

cardProps5.meal_id = 1
cardProps5.meal.description = "Almoço"
cardProps5.date = "2024-03-02"

export default function Home() {
  return (
    <>
      {/* <p>asdasd</p>
      <HeaderBar>Olaaaa</HeaderBar>
      <div className={style.mealContainer}>
        <MealCard mealByDay={cardProps} />
        <MealCard mealByDay={cardProps2} showDateAndTime />
        <MealCard mealByDay={cardProps3} showDateAndTime />
        <MealCard mealByDay={cardProps4} />
        <MealCard mealByDay={cardProps5} />
      </div> */}
      {/* <CardAttention>
          Devido à queda da internet no campus, todas as reservas de alimentação, exceto a do lanche da noite, serão feitas de maneira presencial na recepção.
      </CardAttention>
      <FoodRestrictionCard>
        Leite
      </FoodRestrictionCard> */}
      <StudentCard student={studentProps} campus={campus} />
      {/* <LoginPage /> */}
     
    </>
  );
}
