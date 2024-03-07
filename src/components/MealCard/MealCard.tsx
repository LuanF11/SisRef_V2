import React from 'react';
import PropTypes from 'prop-types';
import styles from './MealCard.module.css';

const MealCard = ({ iconType, textType, iconSituation, textSituation, timeFood, foodList, textSituationColor }) => {
    const textStyle = textSituationColor ? { color: textSituationColor } : null;
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.typeFood}>
           <i dangerouslySetInnerHTML={{ __html: iconType }} />
           <span>{textType}</span>
        </div>
        <div className={styles.situation}>
          <span style = {textStyle}>{textSituation}</span>
          <i dangerouslySetInnerHTML={{__html:iconSituation}}/>
        </div>
      </div>
      <div className={styles.time}>{timeFood}</div>
      <div className={styles.listFood}>
        {foodList && Array.isArray(foodList) ? (
            foodList.map((food, index) => (
            typeof food === 'string' ? <div key={index}>{food}</div> : null
            ))
        ) : (
            <div>Lista de alimentos inválida</div>
        )}
    </div>
    </div>
  );
};

MealCard.propTypes = {
  iconType: PropTypes.string.isRequired,
  textType: PropTypes.string.isRequired,
  iconSituation: PropTypes.string.isRequired,
  textSituation: PropTypes.string.isRequired,
  timeFood: PropTypes.string.isRequired,
  foodList: PropTypes.arrayOf(PropTypes.string).isRequired,
  textSituationColor: PropTypes.string,
};

export default MealCard;
