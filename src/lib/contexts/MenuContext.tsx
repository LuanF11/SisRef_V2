import React from "react";
import { MenuItemWithMeal } from "../types/MenuItemWithMeal";

export const MenuContext = React.createContext<{
    menu: MenuItemWithMeal[] | null;
    setMenu: React.Dispatch<React.SetStateAction<MenuItemWithMeal[] | null>>;
}>({
    menu: [],
    setMenu: () => { },
});

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [menu, setMenu] = React.useState<MenuItemWithMeal[] | null>(null);

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    )
}