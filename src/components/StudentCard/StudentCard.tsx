import React from "react";
import styles from "./StudentCard.module.css";
import Image from "next/image";
import HeaderBar from "../HeaderBar/HeaderBar";
import { StudentContext } from "@/lib/contexts/StudentContex";
import { Skeleton } from "@mui/material";
import Tag from "../Tag/Tag";

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

function getTagVariant(dateValid: Date, active: number): string {
    if (active == 0){ 
        return 'vermelho';
    }
    const now = new Date();
    const validDate = new Date(dateValid);
    const diffDays = Math.ceil((validDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays <= 5) {
        return 'vermelho';
    } else if (diffDays <= 10) {
        return 'laranja'; 
    } else {
        return 'azul';
    }
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
                            <div className={styles.studentName}>{toCapitalFirstLetter(student?.name) || <Skeleton width={200} />}</div>
                        </div>
                        <div className={styles.field}>
                            <div className={styles.title}>Matrícula:</div>
                            <div className={styles.studentRegistration}>{student?.mat || <Skeleton  width={150}/>}</div>
                        </div>
                    </div>
                    <div className={styles.studentPhoto}>
                        {student?.photo && (
                        <Image src={student?.photo} alt="Foto" width={100} height={100} />
                        ) || (
                            <Skeleton height={100} width={100}/>
                        )}
                    </div>
                </div>
                <div className={styles.field}>
                    <div className={styles.title}>Curso:</div>
                    <div className={styles.studentCourse}>{student?.course?.description || <Skeleton width={250}/>}</div>
                </div>
                <div className={styles.campusAndShift}>
                    <div className={styles.field}>
                        <div className={styles.title}>Campus:</div>
                        <div className={styles.studentCampus}>{toCapitalFirstLetter(student?.campus?.description) || <Skeleton />}</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>Turno:</div>
                        <div className={styles.studentTurn}>{getShiftAsString(student?.shift_id) || <Skeleton />}</div>
                    </div>
                </div>
                <div className={styles.codeAndMaturity}>
                    <div className={styles.field}>
                        <div className={styles.title}>Código:</div>
                        <Tag variant="laranja">{student?.id || <Skeleton />}</Tag>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>Vencimento:</div>
                        <Tag variant={getTagVariant(student?.dateValid, student?.active)}>{student?.active === 0 ? 'Inativo' : student?.dateValid || <Skeleton />}</Tag>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default StudentCard;