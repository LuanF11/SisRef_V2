import React from "react";
import PropTypes from 'prop-types';
import styles from "./CardStudent.module.css";

const CardStudent = ({ studentName, studentPhoto, studentRegistration, studentCourse, studentCampus, studentTurn, studentCod, studentMaturity}) => {
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















                {/* <div className={styles.studentInfo}>
                    <div className={styles.studentCourse}>{studentCourse}</div>
                    <div className={styles.studentCampus}>{studentCampus}</div>
                    <div className={styles.studentTurn}>{studentTurn}</div>
                </div>
            <div className={styles.bottom}>
                <div className={styles.studentCod}>{studentCod}</div>
                <div className={styles.studentMaturity}>{studentMaturity}</div>
            </div> */}
        </div>
    );
}

CardStudent.propTypes = {
    studentName: PropTypes.string.isRequired,
    studentPhoto: PropTypes.string,
    studentRegistration: PropTypes.string.isRequired,
    studentCourse: PropTypes.string.isRequired,
    studentCampus: PropTypes.string.isRequired,
    studentTurn: PropTypes.string.isRequired,
    studentCod: PropTypes.string.isRequired,
    studentMaturity: PropTypes.string.isRequired,
};

export default CardStudent;
