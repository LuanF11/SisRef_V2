import React from 'react';
import styles from './MealCard.module.css';
import DisponivelText from './SituationTexts/DisponivelText';
import EncerradoText from './SituationTexts/EncerradoText';
import CanceladoText from './SituationTexts/CanceladoText';
import ReservadoText from './SituationTexts/ReservadoText';
import MealNameText from './MealNameText/MealNameText';

interface Reservation {
  id: number;
  date: string;
  dateInsert: string;
  time: string;
  wasPresent: number;
  meal_id: number;
  student_id: number;
  user_id: number;
  campus_id: number;
  absenceJustification: null | string;
  canceled_by_student: number;
  ticketCode: null | string;
  menu_id: number;
  menu: {
    id: number;
    date: string;
    description: string;
    campus_id: number;
    meal_id: number;
  };
  meal: {
    id: number;
    description: string;
    timeEnd: string;
    timeStart: string;
    campus_id: number;
    qtdTimeReservationEnd: number;
    qtdTimeReservationStart: number;
  };
}

interface GenericCardProps {
  reservation: Reservation;
}

const getSituation = (reservation: Reservation) => {
  const reservationDate = new Date(reservation.date);
  // É necessário adicionar 1 dia para corrigir o fuso horário
  reservationDate.setDate(reservationDate.getDate() + 1);
  reservationDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (reservation.canceled_by_student) {
    return <CanceladoText />;
  }

  if (reservationDate < today) {
    return <EncerradoText />;
  }

  if (reservationDate > today) {
    return <DisponivelText />;
  }

  if (reservationDate.getTime() === today.getTime() && reservation.meal.timeStart >= new Date().toLocaleTimeString()) {
    return <DisponivelText />;
  }

  if (reservationDate.getTime() === today.getTime() && reservation.meal.timeStart < new Date().toLocaleTimeString()) {
    return <EncerradoText />;
  }

  return <p>Situação desconhecida</p>;
}

const MealCard = ({ reservation }: GenericCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.typeFood}>
          <MealNameText mealId={3} />
        </div>
        <div className={styles.situation}>{getSituation(reservation)}</div>
      </div>
      <div className={styles.time}>{
        `${reservation.meal.timeStart} - ${reservation.meal.timeEnd}`
      }</div>
      <div className={styles.listFood}>{
        reservation.menu.description.split(/[;+]/).map((food, index) => (
          <span key={index}>{food}</span>
        ))
      }</div>
    </div>
  );
};

export default MealCard;
