import React from "react";
import styles from "./StudentCard.module.css";
import Image from "next/image";
import HeaderBar from "../HeaderBar/HeaderBar";
import { StudentContext } from "@/lib/contexts/StudentContex";

const toCapitalFirstLetter = (name: string | undefined) => {
    if (!name) return name;

    const nameArray = name.split(" ");
    const formattedName = nameArray.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ");

    const prepositions = ["de", "da", "do", "dos", "das"];
    const formattedNameArray = formattedName.split(" ");
    for (let i = 1; i < formattedNameArray.length; i++) {
        if (prepositions.includes(formattedNameArray[i].toLowerCase())) {
            formattedNameArray[i] = formattedNameArray[i].toLowerCase();
        }
    }

    return formattedNameArray.join(" ");
}

const getShiftAsString = (shift: number | undefined) => {
    if (shift === 1) return "Integral"
    if (shift === 2) return "Matutino";
    if (shift === 3) return "Vespertino";
    if (shift === 4) return "Noturno";
    return shift;
}

const StudentCard = () => {
    const student = React.useContext(StudentContext);

    return (
        <div className={styles.wrapper}>
            <HeaderBar>Informações pessoais</HeaderBar>
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.nameAndMatricula}>
                        <div className={styles.field}>
                            <div className={styles.title}>Nome:</div>
                            <div className={styles.studentName}>{toCapitalFirstLetter(student?.name) || "Carregando..."}</div>
                        </div>
                        <div className={styles.field}>
                            <div className={styles.title}>Matrícula:</div>
                            <div className={styles.studentRegistration}>{student?.mat || "Carregando..."}</div>
                        </div>
                    </div>
                    <div className={styles.studentPhoto}>
                        <Image src={student?.photo || "https://random.imagecdn.app/100/100"} alt="Foto" width={100} height={100} />
                    </div>
                </div>
                <div className={styles.field}>
                    <div className={styles.title}>Curso:</div>
                    <div className={styles.studentCourse}>{student?.course?.description || "Carregando..."}</div>
                </div>
                <div className={styles.campusAndShift}>
                    <div className={styles.field}>
                        <div className={styles.title}>Campus:</div>
                        <div className={styles.studentCampus}>{toCapitalFirstLetter(student?.campus?.description) || "Carregando..."}</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>Turno:</div>
                        <div className={styles.studentTurn}>{getShiftAsString(student?.shift_id) || "Carregando..."}</div>
                    </div>
                </div>
                <div className={styles.codeAndMaturity}>
                    <div className={styles.field}>
                        <div className={styles.title}>Código:</div>
                        <div className={styles.studentCod}>{student?.id || "Carregando..."}</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>Vencimento:</div>
                        <div className={styles.studentMaturity}>{student?.dateValid || "Carregando..."}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;