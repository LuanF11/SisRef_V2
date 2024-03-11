interface MenuItemWithMeal {
    id: number;
    date: string;
    description: string;
    campus_id: number;
    meal_id: number;
    permission: number;
    agendado: boolean;
    canceled_by_student: boolean;
    absenceJustification?: string;
    meal: {
        id: number;
        description: string;
        timeEnd: string;
        timeStart: string;
        campus_id: number;
        qtdTimeReservationEnd: number;
        qtdTimeReservationStart: number;
    };
}

export type { MenuItemWithMeal };
