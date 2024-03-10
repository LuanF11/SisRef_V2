import { MenuContext } from "@/lib/contexts/MenuContext";
import React from "react";
import HeaderBar from "../HeaderBar/HeaderBar";
import MealCard from "../MealCard/MealCard";

import style from "./MenuContainer.module.css";

export const MenuContainer = () => {
    const menuContext = React.useContext(MenuContext);

    React.useEffect(() => {
        const response = fetch(`${process.env.API_URL}/api/meal-by-day`)
            .then(res => res.json())
            .then(data => menuContext.setMenu(data))
    }, [])

    return (
        <>
            <HeaderBar>Refeições do dia</HeaderBar>
            <div className={style.container}>
                {
                    menuContext.menu ? menuContext.menu.map((menu) => (
                        <MealCard key={menu.id} menu={menu} showDateAndTime />
                    )) : (
                        <div>
                            Nenhuma refeição cadastrada para o dia
                        </div>
                    )
                }
            </div>
        </>
    );
}