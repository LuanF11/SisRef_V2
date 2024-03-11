import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant: "verde" | "azul-escuro" | "branco" | "vermelho-outline";
  onClick: (...args: any[]) => void
}

const variantStyles = {
  "verde": styles.green,
  "azul-escuro": styles.darkBlue,
  "branco": styles.white,
  "vermelho-outline": styles.redOutline
};

const Button = ({ children, variant, onClick }: ButtonProps) => {
  const style = `${styles.button} ${variantStyles[variant]}`;

  return (
    <button className={style} onClick={onClick}>{children}</button>
  );
};

export default Button;