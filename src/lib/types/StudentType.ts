interface CourseType {
  id: number;
  description: string;
  initials: string;
  campus_id: number;
}

interface CampusType {
  id: number;
  description: string;
}

interface StudentType {
  id: number;
  active: number;
  dateValid: string;
  mat: string;
  name: string;
  semRegular: number;
  course_id: number;
  shift_id: number;
  photo: null | string;
  campus_id: number;
  campus: CampusType | null;
  observation: null | string;
  republic: null | string;
  block: null | string;
  absent_meal: number;
  course: CourseType;
}

export type { StudentType };