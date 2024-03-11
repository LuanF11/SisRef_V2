import { FoodRestrictionContext } from "@/lib/contexts/FoodRestrictionContext";
import FoodRestrictionCard from "../FoodRestrictionCard/FoodRestrictionCard"
import HeaderBar from "../HeaderBar/HeaderBar"

import styles from "./FoodRestrictionContainer.module.css"
import React from "react";
import Button from "../Button/Button";
import CheckIcon from "../Icons/CheckIcon";

export const FoodRestrictionContainer = () => {
    const foodRestrictionContext = React.useContext(FoodRestrictionContext);

    const handleAdicionar = (restriction: string) => {
        const response = fetch(`${process.env.LOCAL_API_URL}/api/add-food-restriction?restriction=${restriction}`)
            .then(res => res.json())
            .then(data => {
                foodRestrictionContext.setFoodRestrictions(data);
            });
    }

    React.useEffect(() => {
        const response = fetch(`${process.env.LOCAL_API_URL}/api/food-restrictions`)
            .then(res => res.json())
            .then(data => foodRestrictionContext.setFoodRestrictions(data))
    }, [])

    return (
        <div>
            <div className={styles.wrapper}>
                <HeaderBar>Restrições alimentares</HeaderBar>
                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.restrictName}>
                            <span><CheckIcon variant="verde"/>Como funcionam os alertas?</span>
                            <p>
                                Quando você tentar reservar uma refeição que contenha um alimento sinalizado por você como restrição alimentar, o sistema exibirá uma caixa de confirmação alertando que tal refeição possui ingredientes sinalizados como restritos e perguntando se deseja confirmar a reserva.
                            </p>
                            <b>
                                Isso não impede que você reserve a refeição.
                            </b>
                        </div>
                    </div>
                </div>
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