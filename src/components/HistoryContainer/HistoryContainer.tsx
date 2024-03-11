import React, { useContext, useState, useEffect } from "react";
import { DataType, HistoryType } from "@/lib/types/HistoryType";
import { MenuItemWithMeal } from "@/lib/types/MenuItemWithMeal";
import { TokenContext } from "@/lib/contexts/TokenContext";
import HeaderBar from "../HeaderBar/HeaderBar";
import MealCard from "../MealCard/MealCard";
import styles from './HistoryContainer.module.css';
import { MenuContext } from "@/lib/contexts/MenuContext";

const HISTORY_URLS = [
    "https://ruapi.cedro.ifce.edu.br/api/student/schedulings/used?page=1",
    "https://ruapi.cedro.ifce.edu.br/api/student/schedulings/not-used?page=1",
    "https://ruapi.cedro.ifce.edu.br/api/student/schedulings/canceled?page=1"
];

const HistoryContainer = () => {
    const { token } = useContext(TokenContext);
    const [historyData, setHistoryData] = useState<MenuItemWithMeal[] | null>(null);
    const { menu, setMenu } = useContext(MenuContext)

    useEffect(() => {
        if (!token) return;

        const fetchHistory = async (url: string) => {
            const response = await fetch(url, {
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "authorization": `Bearer ${token?.access_token}`,
                },
                method: "GET",
                mode: "cors"
            });
            return response.json() as Promise<HistoryType>;
        };

        const fetchAllHistory = async () => {
            const allHistoryData: DataType[] = await Promise.all(HISTORY_URLS.map(fetchHistory))
                .then(histories => histories.flatMap(history => history.data));

            allHistoryData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            const tenMostRecent = allHistoryData.slice(0, 10);

            const menu: MenuItemWithMeal[] = tenMostRecent.map((history) => ({
                ...history,
                ...history.menu,
                permission: 1,
                agendado: true
            }));

            setHistoryData(menu);
        };

        fetchAllHistory();
    }, [token]);

    useEffect(() => {
        if (!menu || !historyData) return;

        const today = new Date().toISOString().split("T")[0];
        const mealsInTheHistoryThatAreFromToday = historyData.filter(menu => menu.date === today);

        const canceledMeals = mealsInTheHistoryThatAreFromToday.filter(menu => menu.canceled_by_student);

        const canceledMealsIds = canceledMeals.map((canceled) => canceled.id)
        const menuWithCanceledMeals = menu.map((menu) => {
            if (canceledMealsIds.includes(menu.id)) {
                return {
                    ...menu,
                    canceled_by_student: true
                }
            }
            return menu
        })

        setMenu(menuWithCanceledMeals);

    }, [historyData, menu, setMenu]);

    return (
        <div className={styles.wrapper}>
            <HeaderBar>Histórico de refeições</HeaderBar>
            <div className={styles.container}>
                {historyData?.map((menu, index) => (
                    <MealCard menu={menu} key={index} isFromHistory showDateAndTime />
                ))}
            </div>
        </div>
    );
}

export default HistoryContainer;