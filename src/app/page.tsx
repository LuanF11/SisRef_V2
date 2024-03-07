import HeaderBar from "@/components/HeaderBar/HeaderBar";
import MealCard from "@/components/MealCard/MealCard";
import CardAttention from "@/components/CardAttention/CardAttention";
import CardButton from "@/components/CardButton/CardButton";
import CardRestrict from "@/components/CardRestrict/CardRestrict";
import CardStudent from "@/components/CardStudent/CardStudent";
import React from "react";

const iconTypeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M6.06 6.042C4.662 3.336 5.76 0.954 6.378 0C3.162 0.114 0.587997 2.748 0.587997 5.994C0.587997 6.078 0.599997 6.162 0.599997 6.246C0.971997 6.084 1.374 5.994 1.8 5.994C2.796 5.994 3.708 6.492 4.26 7.284C5.262 7.572 6 8.496 6 9.594C6 10.506 5.478 11.292 4.728 11.7C5.316 11.892 5.946 12 6.594 12C8.694 12 10.542 10.92 11.616 9.288C10.2 9.426 7.428 8.706 6.06 6.042Z" fill="black"/>
<path d="M3.6 8.394H3.492C3.24 7.698 2.58 7.194 1.8 7.194C0.804 7.194 0 7.998 0 8.994C0 9.99 0.804 10.794 1.8 10.794H3.6C4.26 10.794 4.8 10.254 4.8 9.594C4.8 8.934 4.26 8.394 3.6 8.394Z" fill="black"/>
</svg>`;

const iconSituationSVG =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM4.8 9L1.8 6L2.646 5.154L4.8 7.302L9.354 2.748L10.2 3.6L4.8 9Z" fill="#FAB03C"/>
</svg>`;

const iconAlertSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
<path d="M0 12H13.8947L6.94737 0L0 12ZM7.57895 10.1053H6.31579V8.84211H7.57895V10.1053ZM7.57895 7.57895H6.31579V5.05263H7.57895V7.57895Z" fill="white"/>
</svg>`;

const iconRestrictSVG =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M5.73375 4.03226L5.5455 2.15054H8.23487V0H9.31062V2.15054H12L11.2577 9.56452L5.73375 4.03226ZM0.166741 10.7527V11.2903C0.166741 11.586 0.408785 11.828 0.704617 11.828H7.697C7.99283 11.828 8.23487 11.586 8.23487 11.2903V10.7527H0.166741ZM11.4083 11.2366L0.758404 0.591398L0 1.34409L3.06589 4.41398C1.3931 4.76882 0.166741 5.91398 0.166741 7.52688H6.17481L7.25056 8.60215H0.166741V9.67742H8.23487V9.58602L10.6553 12L11.4083 11.2366Z" fill="black"/>
</svg>`

const mealCardProps = {
  iconType: iconTypeSVG,
  textType: "Almoço",
  iconSituation: iconSituationSVG,
  textSituation: "Reservado",
  timeFood: "12:00",
  foodList: ["Pão com ovo", "Pão com queijo"],
  textSituationColor: "green",
};

const cardAttentionProps = {
  iconAlert: iconAlertSVG ,
  textContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aspernatur, explicabo iste quibusdam fugit ipsam nihil eveniet quo, quas possimus corrupti quisquam accusantium cupiditate dicta iusto perspiciatis esse totam quidem.",
};

const cardRestrictProps = {
  iconRestrict: iconRestrictSVG,
  textRestrict: "Ovo",
}

const CardStudentProps = {
  studentName: "João da Silva",
  studentPhoto: "https://via.placeholder.com/150",
  studentRegistration: "20211035000096",
  studentCourse: "Sistema de informação",
  studentCampus: "Campus Cedro",
  studentTurn: "Noturno",
  studentCod: "4367",
  studentMaturity: "22/10/2024"
}


export default function Home() {
  return (
    <>
    <p>asdasd</p>
    <HeaderBar>Olaaaa</HeaderBar>
    <MealCard {...mealCardProps}>asdasd</MealCard>
    <CardAttention {...cardAttentionProps}>asdasd</CardAttention>
    <CardButton backgroundColorButton="blue" colorTextButton="white" contentButton="Confirmar">asdasd</CardButton>
    <CardRestrict {...cardRestrictProps}>asdasd</CardRestrict>
    <CardStudent {...CardStudentProps}>asdasd</CardStudent>

    </>
  );
}
