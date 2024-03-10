import { createContext, useState, FC } from "react";
import { MenuItemWithMeal } from "../types/MenuItemWithMeal";

export const MenuContext = createContext<{
  menu: MenuItemWithMeal[] | null;
  setMenu: React.Dispatch<React.SetStateAction<MenuItemWithMeal[] | null>>;
}>({
  menu: [],
  setMenu: () => {},
});

export const MenuProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<MenuItemWithMeal[] | null>(null);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};