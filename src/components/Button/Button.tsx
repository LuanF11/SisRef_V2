import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant: "verde" | "azul-escuro" | "branco" | "vermelho-outline";
}

const Button = ({ children, variant }: ButtonProps) => {
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
    <button className={style}>{children}</button>
  );
};

export default Button;