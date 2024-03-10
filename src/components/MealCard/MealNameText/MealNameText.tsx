import React from 'react';
import FullSunIcon from "@/components/Icons/FullSunIcon";
import MoonIcon from "@/components/Icons/MoonIcon";
import SunriseIcon from "@/components/Icons/SunriseIcon";
import SunsetIcon from "@/components/Icons/SunsetIcon";

interface MealNameTextProps {
    mealId: number;
}

interface Meal {
    icon: React.ElementType;
    text: string;
}

const mealNames: Record<number, Meal> = {
    0: { icon: SunriseIcon, text: 'Café da manhã' },
    1: { icon: FullSunIcon, text: 'Almoço' },
    2: { icon: SunsetIcon, text: 'Lanche da tarde' },
    3: { icon: MoonIcon, text: 'Lanche da noite' },
};

const MealNameText = ({ mealId }: MealNameTextProps) => {
    const meal: Meal | undefined = mealNames[mealId];
    const Icon = meal ? meal.icon : null;
    const text = meal ? meal.text : 'Refeição';

    return (
        <>
            {Icon && <Icon />}
            <span className="text-regular">{text}</span>
        </>
    );
};

export default MealNameText;