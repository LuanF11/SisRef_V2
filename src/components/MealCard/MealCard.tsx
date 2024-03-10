import React from 'react';
import styles from './MealCard.module.css';
import DisponivelText from './SituationTexts/DisponivelText';
import EncerradoText from './SituationTexts/EncerradoText';
import ReservadoText from './SituationTexts/ReservadoText';
import MealNameText from './MealNameText/MealNameText';
import { MenuItemWithMeal } from '@/lib/types/MenuItemWithMeal';
import CanceladoText from './SituationTexts/CanceladoText';
import BloqueadoText from './SituationTexts/BloqueadoText';
import Button from '../Button/Button';
import { MenuContext } from '@/lib/contexts/MenuContext';

interface GenericCardProps {
  menu: MenuItemWithMeal;
  showDateAndTime?: boolean;
}

const getSituationText = (menu: MenuItemWithMeal) => {
  const menuDate = new Date(menu.date);
  // É necessário adicionar 1 dia para corrigir o fuso horário
  menuDate.setDate(menuDate.getDate() + 1);
  menuDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const mealDateTime = new Date(menu.date + " " + menu.meal.timeStart);

  const reservationStartTime = new Date(mealDateTime);
  reservationStartTime.setHours(reservationStartTime.getHours() - menu.meal.qtdTimeReservationStart);

  if (!menu.permission || new Date() < reservationStartTime) {
    return "BloqueadoText";
  }
  if (menu.canceled_by_student) {
    return "CanceladoText";
  }

  if (menu.agendado) {
    return "ReservadoText";
  }

  if (menuDate < today) {
    return "EncerradoText";
  }

  if (menuDate > today) {
    return "DisponivelText";
  }

  if (menuDate.getTime() === today.getTime() && menu.meal.timeStart >= new Date().toLocaleTimeString()) {
    return "DisponivelText";
  }

  if (menuDate.getTime() === today.getTime() && menu.meal.timeStart < new Date().toLocaleTimeString()) {
    return "EncerradoText";
  }

  return "ReservadoText";
}

const getSituationElement = (menu: MenuItemWithMeal) => {
  const situationText = getSituationText(menu);

  switch (situationText) {
    case "DisponivelText":
      return <DisponivelText />;
    case "EncerradoText":
      return <EncerradoText />;
    case "ReservadoText":
      return <ReservadoText />;
    case "CanceladoText":
      return <CanceladoText />;
    case "BloqueadoText":
      return <BloqueadoText />;
  }
}

const getTime = (menu: MenuItemWithMeal, showDateAndTime: boolean | undefined) => {
  if (showDateAndTime) {
    const date = new Date(menu.date);
    // É necessário adicionar 1 dia para corrigir o fuso horário
    date.setDate(date.getDate() + 1);
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

    return `${formattedDate} - ${menu.meal.timeStart} - ${menu.meal.timeEnd}`;
  }

  return `${menu.meal.timeStart} - ${menu.meal.timeEnd}`;
}

const MealCard = ({ menu, showDateAndTime }: GenericCardProps) => {
  const menuContext = React.useContext(MenuContext);

  const handleReservar = (id: number) => {
    fetch(`${process.env.API_URL}/api/reserve-meal?id=${id}`)
      .then(res => res.json())
      .then(data => menuContext.setMenu(data))
  }

  const handleCancelar = (id: number) => {
    fetch(`${process.env.API_URL}/api/cancel-meal?id=${id}`)
      .then(res => res.json())
      .then(data => menuContext.setMenu(data))
  }

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.mealName}>
          <MealNameText mealId={menu.meal_id} />
        </div>
        <div className={styles.situation}>{getSituationElement(menu)}</div>
      </div>
      <div className={styles.time}>{getTime(menu, showDateAndTime)}</div>
      <div className={styles.mealDescription}>{
        menu.description.split(/[;+]/).map((food, index) => (
          <span key={index}>{food}</span>
        ))
      }</div>
      {
        getSituationText(menu) === "DisponivelText" && (
          <Button variant="verde" onClick={() => handleReservar(menu.id)}>Reservar</Button>
        )
      }
      {
        getSituationText(menu) === "ReservadoText" && (
          <Button variant="vermelho-outline" onClick={() => handleCancelar(menu.id)}>Cancelar</Button>
        )
      }
    </div>
  );
};

export default MealCard;
