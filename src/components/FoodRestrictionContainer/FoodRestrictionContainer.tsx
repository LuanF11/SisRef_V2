import { FoodRestrictionContext } from "@/lib/contexts/FoodRestrictionContext";
import FoodRestrictionCard from "../FoodRestrictionCard/FoodRestrictionCard"
import HeaderBar from "../HeaderBar/HeaderBar"

import styles from "./FoodRestrictionContainer.module.css"
import React from "react";
import Button from "../Button/Button";

export const FoodRestrictionContainer = () => {
    const foodRestrictionContext = React.useContext(FoodRestrictionContext);

    const handleAdicionar = (restriction: string) => {
        const response = fetch(`${process.env.API_URL}/api/add-food-restriction?restriction=${restriction}`)
            .then(res => res.json())
            .then(data => {
                foodRestrictionContext.setFoodRestrictions(data);
            });
    }

    React.useEffect(() => {
        const response = fetch(`${process.env.API_URL}/api/food-restrictions`)
            .then(res => res.json())
            .then(data => foodRestrictionContext.setFoodRestrictions(data))
    }, [])

    return (
        <div>
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
                <Button variant="verde" onClick={() => handleAdicionar(String(prompt("Qual restrição você deseja adicionar?")))}>Adicionar restrição</Button>
            </div>
        </div>

    )
}