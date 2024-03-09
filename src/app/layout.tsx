"use client"

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import WidthLimiter from "@/components/WidthLimiter/WidthLimiter";
import { MenuItemWithMeal } from "@/lib/types/MenuItemWithMeal";
import React, { useEffect } from "react";

export const MenuContext = React.createContext<{
  menu: MenuItemWithMeal[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItemWithMeal[]>>;
}>({
  menu: [],
  setMenu: () => { },
});

export const FoodRestrictionContext = React.createContext<{
  foodRestrictions: string[];
  setFoodRestrictions: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  foodRestrictions: [],
  setFoodRestrictions: () => { },
});

process.env.API_URL = "http://192.168.0.104:3721"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [menu, setMenu] = React.useState<MenuItemWithMeal[]>([]);
  const [foodRestrictions, setFoodRestrictions] = React.useState<string[]>([]);

  useEffect(() => {
    const response = fetch(`${process.env.API_URL}/api/meal-by-day`)
      .then(res => res.json())
      .then(data => setMenu(data))
  }, [])

  useEffect(() => {
    const response = fetch(`${process.env.API_URL}/api/food-restrictions`)
      .then(res => res.json())
      .then(data => setFoodRestrictions(data))
  }, [])

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <FoodRestrictionContext.Provider value={{ foodRestrictions, setFoodRestrictions }}>
        <html lang="en">
          <body>
            <Navbar />
            <WidthLimiter>{children}</WidthLimiter>
          </body>
        </html>
      </FoodRestrictionContext.Provider>
    </MenuContext.Provider>
  );
}