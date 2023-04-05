import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { WeatherContext } from "../context/WeatherContext";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface Location {
  latitude: number;
  longitude: number;
  error?: string;
}

export const Main = () => {
  const { getWeather, status } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  //   const [location, setLocation] = useState<Location>({
  //     latitude: 0,
  //     longitude: 0,
  //   });

  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           setLocation({
  //             latitude: position.coords.latitude,
  //             longitude: position.coords.longitude,
  //           });
  //         },
  //         (error) => {
  //           setLocation({
  //             latitude: 0,
  //             longitude: 0,
  //             error: error.message,
  //           });
  //         }
  //       );
  //     } else {
  //       setLocation({
  //         latitude: 0,
  //         longitude: 0,
  //         error: "Geolocation is not supported by this browser.",
  //       });
  //     }
  //   }, []);

  useEffect(() => {
    getWeather("Gravataí");
  }, []);

  console.log(status);
  console.log(location);

  return (
    <>
      <main className={styles.main}>
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
        <div>
          <form
            action=""
            onSubmit={(e: any) => {
              e.preventDefault();
              getWeather(city);
            }}
          >
            <input type="submit" value="Pesquisar" />
            <div className={styles.inputDiv}>
              <MagnifyingGlass size={32} color="#fafafa" weight="bold" />
              <input
                type="text"
                className={styles.input}
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder="Pesquise sua cidade"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
