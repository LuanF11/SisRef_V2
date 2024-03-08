interface Reservation {
    id: number;
    date: string;
    dateInsert: string;
    time: string;
    wasPresent: number;
    meal_id: number;
    student_id: number;
    user_id: number;
    campus_id: number;
    absenceJustification: null | string;
    canceled_by_student: number;
    ticketCode: null | string;
    menu_id: number;
    menu: {
        id: number;
        date: string;
        description: string;
        campus_id: number;
        meal_id: number;
    };
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

export type { Reservation };