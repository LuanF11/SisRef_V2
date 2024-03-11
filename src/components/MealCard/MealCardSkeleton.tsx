import React from 'react';
import styles from './MealCard.module.css';
import { Skeleton } from '@mui/material';

const MealCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.mealName}>
          <Skeleton width={200} />
        </div>
        <div className={styles.situation}>
          <Skeleton width={100} />
        </div>
      </div>
      <div className={styles.time}>
        <Skeleton width={200} />
      </div>
      <div className={styles.mealDescription}>
        <Skeleton width={200} height={150} />
      </div>
    </div>
  );
};

export default MealCardSkeleton;