"use client"

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import WidthLimiter from "@/components/WidthLimiter/WidthLimiter";
import { MenuItemWithMeal } from "@/lib/types/MenuItemWithMeal";
import React, { useContext } from "react";

export const MenuContext = React.createContext({
  menu: [] as MenuItemWithMeal[],
  setMenu: (menuProp: MenuItemWithMeal[]) => { },
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [menu, setMenu] = React.useState<MenuItemWithMeal[]>([]);

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