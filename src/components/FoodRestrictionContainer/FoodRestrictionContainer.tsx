import { FoodRestrictionContext } from "@/lib/contexts/FoodRestrictionContext";
import FoodRestrictionCard from "../FoodRestrictionCard/FoodRestrictionCard"
import HeaderBar from "../HeaderBar/HeaderBar"

import styles from "./FoodRestrictionContainer.module.css"
import React from "react";

export const FoodRestrictionContainer = () => {
    const foodRestrictionContext = React.useContext(FoodRestrictionContext);

    React.useEffect(() => {
        const response = fetch(`${process.env.API_URL}/api/food-restrictions`)
            .then(res => res.json())
            .then(data => foodRestrictionContext.setFoodRestrictions(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            <HeaderBar>Restrições alimentares</HeaderBar>
            <div className={styles.container}>{
                foodRestrictionContext.foodRestrictions.map((restriction, index) => (
                    <FoodRestrictionCard key={index}>{restriction}</FoodRestrictionCard>
                ))
            }{
                    foodRestrictionContext.foodRestrictions.length === 0 && (
                        <div>Nenhuma restrição alimentar cadastrada</div>
                    )
                }</div>
        </div>
    )
}