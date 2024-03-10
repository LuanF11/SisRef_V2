import { createContext, useState, Dispatch, SetStateAction, FC } from "react";

export const FoodRestrictionContext = createContext<{
  foodRestrictions: string[];
  setFoodRestrictions: Dispatch<SetStateAction<string[]>>;
}>({
  foodRestrictions: [],
  setFoodRestrictions: () => {},
});

export const FoodRestrictionProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [foodRestrictions, setFoodRestrictions] = useState<string[]>([]);

  return (
    <FoodRestrictionContext.Provider value={{ foodRestrictions, setFoodRestrictions }}>
      {children}
    </FoodRestrictionContext.Provider>
  );
};