"use client"

import CardAttention from "@/components/CardAttention/CardAttention";
import StudentCard from "@/components/StudentCard/StudentCard";

import { MenuProvider } from "@/lib/contexts/MenuContext";
import React from "react";
import { FoodRestrictionProvider } from "@/lib/contexts/FoodRestrictionContext";
import { MenuContainer } from "@/components/MenuContainer/MenuContainer";
import { FoodRestrictionContainer } from "@/components/FoodRestrictionContainer/FoodRestrictionContainer";

import styles from "./page.module.css";
import { StudentProvider } from "@/lib/contexts/StudentContex";
import HistoryContainer from "@/components/HistoryContainer/HistoryContainer";

export default function StudentPage() {
  return (
    <>
    <div className={styles.studentCardAndAttentionWrapper}>
      <StudentProvider>
      <StudentCard />
      </StudentProvider>
      <CardAttention>
        Devido à queda da internet no campus, todas as reservas de alimentação, exceto a do lanche da noite, serão feitas de maneira presencial na recepção.
      </CardAttention>
    </div>
      
      <MenuProvider>
        <MenuContainer />
      </MenuProvider>
      
      <FoodRestrictionProvider>
        <FoodRestrictionContainer />
      </FoodRestrictionProvider>

      <HistoryContainer />
    </>
  );
}
