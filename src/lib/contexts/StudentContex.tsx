import React from "react";
import { StudentType } from "../types/StudentType";
import { TokenContext } from "./TokenContext";

export const StudentContext = React.createContext<StudentType | null>(null);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tokenContext = React.useContext(TokenContext);
  const [student, setStudent] = React.useState<StudentType | null>(null);

  const allCampi: StudentType["campus"][] = []

  React.useEffect(() => {
    fetch(`https://ruapi.cedro.ifce.edu.br/api/all/show-student/${tokenContext?.token?.id}`)
      .then((response) => response.json())
      .then((data: StudentType) => {
        data.campus = allCampi.find((campus) => campus?.id == data.campus_id) || null;

        return setStudent(data)
      });
  }, []);

  React.useEffect(() => {
    fetch("https://ruapi.cedro.ifce.edu.br/api/all/campus", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "authorization": `Bearer ${tokenContext?.token?.access_token}`,
      },
      "body": null,
      "method": "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        allCampi.push(data);
      });
  }, [student]);

  return (
    <StudentContext.Provider value={student} >
      {student && children}
    </StudentContext.Provider>
  );
};