import { useContext, useState } from "react";
import styles from "./Header.module.scss";
import { MapPin, MagnifyingGlass } from "@phosphor-icons/react";
import { WeatherContext } from "../context/WeatherContext";

export const Header = () => {
  const { status } = useContext(WeatherContext);

  return (
    <>
      <header className={styles.container}>
        <div>
          <h2>Weather API</h2>
        </div>
        <div className={styles.iconDiv}>
          <MapPin size={32} color="#fafafa" weight="bold" />
          <span className={styles.cityName}>{status?.location.name}</span>
        </div>
      </header>
    </>
  );
};
