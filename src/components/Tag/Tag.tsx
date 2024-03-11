import React from "react";
import styles from "./Tag.module.css";

interface TagProps {
  children: React.ReactNode;
  variant: "verde" | "azul" | "laranja" | "vermelho";
}

const Tag = ({ children, variant }: TagProps) => {
  let style = styles.tag + " ";
  switch (variant) {
    case "verde":
      style += styles.green;
      break;
    case "azul":
      style += styles.blue;
      break;
    case "laranja":
      style += styles.orange;
      break;
    case "vermelho":
      style += styles.red;
      break;
  }

  return (
    <div className={style}>{children}</div>
  );
};

export default Tag;