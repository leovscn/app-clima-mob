import { useContext, useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { WeatherContext } from "../context/WeatherContext";

interface Location {
    latitude: number;
    longitude: number;
    error?: string;
}

export const Main = () => {
    const { getWeather, status } = useContext(WeatherContext);

    const [location, setLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setLocation({
                        latitude: 0,
                        longitude: 0,
                        error: error.message,
                    });
                }
            );
        } else {
            setLocation({
                latitude: 0,
                longitude: 0,
                error: "Geolocation is not supported by this browser.",
            });
        }

        getWeather(location.latitude, location.longitude);
    }, []);

    console.log(status);
    console.log(location);

    return (
        <>
            <main className={styles.main}>
                <div className={styles.secondCard}>
                    <div className={styles.mainCardHeader}>
                        <h2>{status?.current.temp_c}</h2>
                    </div>
                    <div className={styles.mainCardBody}>
                        <h3></h3>
                    </div>
                </div>
                <div className={styles.mainCard}>
                    <div className={styles.mainCardHeader}>
                        <h2>{status?.current.temp_c}</h2>
                    </div>
                    <div className={styles.mainCardBody}>
                        <h3>{status?.current.condition.text}</h3>
                        <img
                            src={status?.current.condition.icon}
                            alt={status?.current.condition.text}
                        />
                    </div>
                </div>
                <div className={styles.secondCard}>
                    <div className={styles.mainCardHeader}>
                        <h2>{status?.current.temp_c}</h2>
                    </div>
                    <div className={styles.mainCardBody}>
                        <h3>Aqui fica o ícone</h3>
                    </div>
                </div>
            </main>
        </>
    );
};
