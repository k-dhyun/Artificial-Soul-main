import React from "react";
import { Sun, ChevronDown, User } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.iconBtn}>
        <Sun size={16} />
      </button>

      <div className={styles.projectSelect}>
        <span>Project</span>
        <ChevronDown size={14} color="#E0E9F7" />
      </div>

      <div className={styles.avatar}>
        <User size={16} />
      </div>
    </header>
  );
}
