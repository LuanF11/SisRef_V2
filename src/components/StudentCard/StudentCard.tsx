import React from "react";
import styles from "./StudentCard.module.css";

const StudentCard = () => {
    const studentName = "John Doe";
    const studentPhoto = "https://example.com/photo.jpg";
    const studentRegistration = "123456789";
    const studentCourse = "Computer Science";
    const studentCampus = "Main Campus";
    const studentTurn = "Morning";
    const studentCod = "ABC123";
    const studentMaturity = "2022-12-31";

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.nameRegist}>
                    <div className={styles.group}>
                        <div className={styles.title}>Nome:</div>
                        <div className={styles.studentName}>{studentName}</div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.title}>Matrícula:</div>
                        <div className={styles.studentRegistration}>{studentRegistration}</div>
                    </div>
                </div>
                <div className={styles.studentPhoto}>
                    <img src={studentPhoto} alt="Foto do estudante" />
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.title}>Curso:</div>
                <div className={styles.studentCourse}>{studentCourse}</div>
            </div>
            <div className={styles.campTurn}>
                <div className={styles.group}>
                    <div className={styles.title}>Campus:</div>
                    <div className={styles.studentCampus}>{studentCampus}</div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>Turno:</div>
                    <div className={styles.studentTurn}>{studentTurn}</div>
                </div>
            </div>
            <div className={styles.codeMatu}>
                <div className={styles.group}>
                    <div className={styles.title}>Código:</div>
                    <div className={styles.studentCod}>{studentCod}</div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>Vencimento:</div>
                    <div className={styles.studentMaturity}>{studentMaturity}</div>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;
