import React from "react";
import styles from "./Header.module.scss";
import { MapPin } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div>
          <h2>Weather API</h2>
        </div>
        <div>
          <MapPin size={32} color="#fafafa" weight="bold" />
          Gravataí
        </div>
        <div>
          <input type="text" />
        </div>
      </header>
    </>
  );
};
