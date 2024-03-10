"use client"

import CardAttention from "@/components/CardAttention/CardAttention";
import StudentCard from "@/components/StudentCard/StudentCard";

import { MenuProvider } from "@/lib/contexts/MenuContext";
import React from "react";
import { FoodRestrictionProvider } from "@/lib/contexts/FoodRestrictionContext";
import { MenuContainer } from "@/components/MenuContainer/MenuContainer";
import { FoodRestrictionContainer } from "@/components/FoodRestrictionContainer/FoodRestrictionContainer";

export default function StudentPage() {
  return (
    <>
      <MenuProvider>
        <MenuContainer />
      </MenuProvider>
      
      <CardAttention>
        Devido à queda da internet no campus, todas as reservas de alimentação, exceto a do lanche da noite, serão feitas de maneira presencial na recepção.
      </CardAttention>

      <FoodRestrictionProvider>
        <FoodRestrictionContainer />
      </FoodRestrictionProvider>

      <StudentCard />
    </>
  );
}
