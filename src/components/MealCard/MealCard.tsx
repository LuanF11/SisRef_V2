import React from 'react';
import styles from './MealCard.module.css';
import DisponivelText from './SituationTexts/DisponivelText';
import EncerradoText from './SituationTexts/EncerradoText';
import CanceladoText from './SituationTexts/CanceladoText';
import ReservadoText from './SituationTexts/ReservadoText';
import MealNameText from './MealNameText/MealNameText';
import { Reservation } from '@/lib/types/ReservationType';

interface GenericCardProps {
  reservation: Reservation;
  showDateAndTime?: boolean;
}

const getSituationText = (reservation: Reservation) => {
  const reservationDate = new Date(reservation.date);
  // É necessário adicionar 1 dia para corrigir o fuso horário
  reservationDate.setDate(reservationDate.getDate() + 1);
  reservationDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (reservation.canceled_by_student) {
    return "CanceladoText";
  }

  if (reservationDate < today) {
    return "EncerradoText";
  }

  if (reservationDate > today) {
    return "DisponivelText";
  }

  if (reservationDate.getTime() === today.getTime() && reservation.meal.timeStart >= new Date().toLocaleTimeString()) {
    return "DisponivelText";
  }

  if (reservationDate.getTime() === today.getTime() && reservation.meal.timeStart < new Date().toLocaleTimeString()) {
    return "EncerradoText";
  }

  return "ReservadoText";
}

const getSituationElement = (reservation: Reservation) => {
  const situationText = getSituationText(reservation);

  switch (situationText) {
    case "DisponivelText":
      return <DisponivelText />;
    case "EncerradoText":
      return <EncerradoText />;
    case "CanceladoText":
      return <CanceladoText />;
    case "ReservadoText":
      return <ReservadoText />;
  }
}

const getTime = (reservation: Reservation, showDateAndTime: boolean | undefined) => {
  if (showDateAndTime) {
    const date = new Date(reservation.date);
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

    return `${formattedDate} - ${reservation.meal.timeStart} - ${reservation.meal.timeEnd}`;
  }

  return `${reservation.meal.timeStart} - ${reservation.meal.timeEnd}`;
}

const MealCard = ({ reservation, showDateAndTime }: GenericCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.mealName}>
          <MealNameText mealId={reservation.meal_id} />
        </div>
        <div className={styles.situation}>{getSituationElement(reservation)}</div>
      </div>
      <div className={styles.time}>{getTime(reservation, showDateAndTime)}</div>
      <div className={styles.mealDescription}>{
        reservation.menu.description.split(/[;+]/).map((food, index) => (
          <span key={index}>{food}</span>
        ))
      }</div>
      {
        getSituationText(reservation) === "DisponivelText" && (
          <button className={styles.button}>Reservar</button>
        )
      }
      {
        getSituationText(reservation) === "ReservadoText" && (
          <button className={styles.button}>Cancelar</button>
        )
      }
    </div>
  );
};

export default MealCard;
