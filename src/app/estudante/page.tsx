"use client"

import CardAttention from "@/components/CardAttention/CardAttention";
import StudentCard from "@/components/StudentCard/StudentCard";

import { MenuProvider } from "@/lib/contexts/MenuContext";
import React from "react";
import { FoodRestrictionProvider } from "@/lib/contexts/FoodRestrictionContext";
import MenuContainer from "@/components/MenuContainer/MenuContainer";
import { FoodRestrictionContainer } from "@/components/FoodRestrictionContainer/FoodRestrictionContainer";

import styles from "./page.module.css";
import { StudentProvider } from "@/lib/contexts/StudentContex";
import HistoryContainer from "@/components/HistoryContainer/HistoryContainer";


export default function StudentPage() {
  return (
    <>
    <title>Menu</title>
      <div className={styles.studentCardAndAttentionWrapper}>
        <StudentProvider>
          <StudentCard />
        </StudentProvider>
        <CardAttention>
        </CardAttention>
      </div>

      <MenuProvider>
        <MenuContainer />

      <FoodRestrictionProvider>
        <FoodRestrictionContainer />
      </FoodRestrictionProvider>

        <HistoryContainer />
      </MenuProvider>
    </>
  );
}
