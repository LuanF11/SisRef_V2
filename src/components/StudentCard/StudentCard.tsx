import React from "react";
import styles from "./StudentCard.module.css";
import { StudentInfo } from "@/lib/types/StudenInfo";
import { CampusCod } from "@/lib/types/CampusCod";
import Tag from "../Tag/Tag";

interface StudentCardProps {
    student: StudentInfo;
    campus: CampusCod;
}

const StudentCard = ({ student, campus}: StudentCardProps) => {

    let campusName;
    if(student.course.campus_id === campus.id) {
        campusName = campus.description;
    }

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.nameRegist}>
                    <div className={styles.group}>
                        <div className={styles.title}>Nome:</div>
                        <div className={styles.studentName}>{student.name}</div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.title}>Matrícula:</div>
                        <div className={styles.studentRegistration}>{student.mat}</div>
                    </div>
                </div>
                <div className={styles.studentPhoto}>
                    <img src={student.photo} alt="Foto do estudante" />
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.title}>Curso:</div>
                <div className={styles.studentCourse}>{student.course.description}</div>
            </div>
            <div className={styles.campTurn}>
                <div className={styles.group}>
                    <div className={styles.title}>Campus:</div>
                    <div className={styles.studentCampus}>
                        {campus ? campusName : "Campus não encontrado"}
                        </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>Turno:</div>
                    <div className={styles.studentTurn}>Falta</div>
                </div>
            </div>
            <div className={styles.codeMatu}>
                <div className={styles.group}>
                    <div className={styles.title}>Código:</div>
                    <Tag variant="laranja">{student.id}</Tag>
                </div>
                <div className={styles.group} id="maturity">
                    <div className={styles.title}>Vencimento:</div>
                    <Tag variant="azul">{student.dateValid}</Tag>
                </div>
            </div>
        </div>
    );
}


export default StudentCard;
