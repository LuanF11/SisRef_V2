interface _MenuType {
    id: number;
    date: string;
    description: string;
    campus_id: number;
    meal_id: number;
}

interface _MealType {
    id: number;
    description: string;
    timeEnd: string;
    timeStart: string;
    campus_id: number;
    qtdTimeReservationEnd: number;
    qtdTimeReservationStart: number;
}

interface DataType {
    id: number;
    date: string;
    dateInsert: string;
    time: string;
    wasPresent: number;
    meal_id: number;
    student_id: number;
    user_id: number;
    campus_id: number;
    absenceJustification?: string;
    canceled_by_student: boolean;
    ticketCode: null;
    menu_id: number;
    menu: _MenuType;
    meal: _MealType;
}

interface HistoryType {
    current_page: number;
    data: DataType[]; 
    first_page_url: string;
    from: null;
    last_page: number;
    last_page_url: string;
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: null;
    total: number;
}

export type { HistoryType, DataType }