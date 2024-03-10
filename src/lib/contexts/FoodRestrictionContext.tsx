import React, { useState, Dispatch, SetStateAction } from "react";

export const FoodRestrictionContext = React.createContext<{
    foodRestrictions: string[];
    setFoodRestrictions: Dispatch<SetStateAction<string[]>>;
}>({
    foodRestrictions: [],
    setFoodRestrictions: () => { },
});

export const FoodRestrictionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [foodRestrictions, setFoodRestrictions] = useState<string[]>([]);

    return (
        <FoodRestrictionContext.Provider value={{ foodRestrictions, setFoodRestrictions }}>
            {children}
        </FoodRestrictionContext.Provider>
    );
};