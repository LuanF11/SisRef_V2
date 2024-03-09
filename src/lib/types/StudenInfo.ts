interface StudentInfo {
    id: number;
    active: number;
    dateValid: string;
    mat: string;
    name: string;
    semRegular: number;
    course_id: number;
    shift_id: number;
    photo: null;
    campus_id: number;
    observation: null;
    republic: null;
    block: null;
    absent_meal: number;
    course: {
        id: number;
        description: string;
        initials: string;
        campus_id: number;
    };
}

export type { StudentInfo };