import React, { useContext } from 'react';
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
import JustificadoText from './SituationTexts/JustificadoText';
import NaoUtilizadoText from './SituationTexts/NaoUtilizadoText';
import UtilizadoText from './SituationTexts/UtilizadoText';

interface GenericCardProps {
  menu: MenuItemWithMeal;
  showDateAndTime?: boolean;
  isFromHistory?: boolean;
}

const getSituationText = (menu: MenuItemWithMeal, isFromHistory?: boolean) => {
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

const getSituationTextFromHistory = (menu: MenuItemWithMeal) => {
  const menuDate = new Date(menu.date);
  // É necessário adicionar 1 dia para corrigir o fuso horário
  menuDate.setDate(menuDate.getDate() + 1);
  menuDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (menu.canceled_by_student) {
    return "CanceladoText";
  }

  if (menu.absenceJustification) {
    return "JustificadoText";
  }

  if (menuDate < today) {
    return "UtilizadoText";
  }

  return "NaoUtilizadoText";
}

const getSituationElement = (menu: MenuItemWithMeal, isFromHistory?: boolean) => {
  const situationText = isFromHistory ? getSituationTextFromHistory(menu) : getSituationText(menu);

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
    case "JustificadoText":
      return <JustificadoText />;
    case "UtilizadoText":
      return <UtilizadoText />;
    case "NaoUtilizadoText":
      return <NaoUtilizadoText />;
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

const getFoodDescription = (menu: MenuItemWithMeal, isFromHistory?: boolean) => {
  if (isFromHistory) {
    return menu.description.split(/[;+]/).map((food, index) => (
      <span key={index}>{food}</span>
    ))
  }

  return menu.description.split(/[;+]/).map((food, index) => (
    <span key={index}>{food}</span>
  ))
}

const getMealName = (menu: MenuItemWithMeal, isFromHistory?: boolean) => {
  if (isFromHistory) return menu.meal.id - 1

  return menu.meal_id
}

const situationTexts = {
  DisponivelText: <DisponivelText />,
  EncerradoText: <EncerradoText />,
  ReservadoText: <ReservadoText />,
  CanceladoText: <CanceladoText />,
  BloqueadoText: <BloqueadoText />,
  JustificadoText: <JustificadoText />,
  UtilizadoText: <UtilizadoText />,
  NaoUtilizadoText: <NaoUtilizadoText />,
};

const MealCard = ({ menu, showDateAndTime, isFromHistory }: GenericCardProps) => {
  const { setMenu } = useContext(MenuContext);

  const handleAction = (action: string, id: number) => {
    fetch(`${process.env.API_URL}/api/${action}-meal?id=${id}`)
      .then(res => res.json())
      .then(data => setMenu(data))
  }

  const situationText = isFromHistory ? getSituationTextFromHistory(menu) : getSituationText(menu);
  const situationElement = situationTexts[situationText];

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.mealName}>
          <MealNameText mealId={getMealName(menu, isFromHistory)} />
        </div>
        <div className={styles.situation}>{situationElement}</div>
      </div>
      <div className={styles.time}>{getTime(menu, showDateAndTime)}</div>
      <div className={styles.mealDescription}>{getFoodDescription(menu, isFromHistory)}</div>
      {
        situationText === "DisponivelText" && (
          <Button variant="verde" onClick={() => handleAction('reserve', menu.id)}>Reservar</Button>
        )
      }
      {
        situationText === "ReservadoText" && (
          <Button variant="vermelho-outline" onClick={() => handleAction('cancel', menu.id)}>Cancelar</Button>
        )
      }
      {
        isFromHistory && situationText === "JustificadoText" && (
          menu.absenceJustification && <span className={styles.justification}><b>Justificativa:</b> {menu.absenceJustification}</span>
        )
      }
    </div>
  );
};

export default MealCard;