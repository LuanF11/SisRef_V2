import React, { useState, useEffect, useContext } from "react";
import { StudentType } from "../types/StudentType";
import { TokenContext } from "./TokenContext";

export const StudentContext = React.createContext<StudentType | null>(null);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useContext(TokenContext);
  const [student, setStudent] = useState<StudentType | null>(null);
  const [allCampi, setAllCampi] = useState<any[]>([]);

  useEffect(() => {
    if (!token?.id) return;

    fetch(`https://ruapi.cedro.ifce.edu.br/api/all/show-student/${token.id}`)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data: StudentType) => {
        data.campus = allCampi.find((campus) => campus?.id === data.campus_id) || null;
        setStudent(data);
      })
      .catch((error) => console.error('Error:', error));
  }, [allCampi, token]);

  useEffect(() => {
    if (!token?.access_token) return;

    fetch("https://ruapi.cedro.ifce.edu.br/api/all/campus", {
      headers: {
        accept: "application/json, text/plain, */*",
        authorization: `Bearer ${token.access_token}`,
      },
      method: "GET"
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => setAllCampi([data]))
      .catch((error) => console.error('Error:', error));
  }, [token]);

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
};