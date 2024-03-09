import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant: "verde" | "azul-escuro" | "branco" | "vermelho-outline";
  onClick: (...args: any[]) => void
}

const Button = ({ children, variant, onClick }: ButtonProps) => {
  let style = styles.button + " ";
  switch (variant) {
    case "verde":
      style += styles.green;
      break;
    case "azul-escuro":
      style += styles.darkBlue;
      break;
    case "branco":
      style += styles.white;
      break;
    case "vermelho-outline":
      style += styles.redOutline;
      break;
  }

  return (
    <button className={style} onClick={onClick}>{children}</button>
  );
};

export default Button;