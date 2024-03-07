import FullSunIcon from "@/components/Icons/FullSunIcon";
import MoonIcon from "@/components/Icons/MoonIcon";
import SunriseIcon from "@/components/Icons/SunriseIcon";
import SunsetIcon from "@/components/Icons/SunsetIcon";

interface MealNameTextProps {
    mealId: 0 | 1 | 2 | 3;
}

const LancheDaManha = () => {
    return <>
        <SunriseIcon />
        <span className="text-regular">Café da manhã</span>
    </>;
};

const Almoco = () => {
    return <>
        <FullSunIcon />
        <span className="text-regular">Almoço</span>
    </>;
}

const LancheDaTarde = () => {
    return <>
        <SunsetIcon />
        <span className="text-regular">Lanche da tarde</span>
    </>;
}

const LancheDaNoite = () => {
    return <>
        <MoonIcon />
        <span className="text-regular">Lanche da noite</span>
    </>;
}

const MealNameText = ({ mealId }: MealNameTextProps) => {
    switch (mealId) {
        case 0:
            return <LancheDaManha />;
        case 1:
            return <Almoco />;
        case 2:
            return <LancheDaTarde />;
        case 3:
            return <LancheDaNoite />;
        default:
            return <span className="text-regular">Refeição</span>;
    }
};

export default MealNameText;