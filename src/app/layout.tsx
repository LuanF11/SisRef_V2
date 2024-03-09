"use client"

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import WidthLimiter from "@/components/WidthLimiter/WidthLimiter";
import { MenuItemWithMeal } from "@/lib/types/MenuItemWithMeal";
import React, { useEffect } from "react";

export const MenuContext = React.createContext({
  menu: [] as MenuItemWithMeal[],
  setMenu: (menuProp: MenuItemWithMeal[]) => { },
});

process.env.API_URL = "http://192.168.0.104:3721"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [menu, setMenu] = React.useState<MenuItemWithMeal[]>([]);

  useEffect(() => {
    const response = fetch(`${process.env.API_URL}/api/meal-by-day`)
      .then(res => res.json())
      .then(data => setMenu(data))
  }, [])

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <html lang="en">
        <body>
          <Navbar />
          <WidthLimiter>{children}</WidthLimiter>
        </body>
      </html>
    </MenuContext.Provider>
  );
}