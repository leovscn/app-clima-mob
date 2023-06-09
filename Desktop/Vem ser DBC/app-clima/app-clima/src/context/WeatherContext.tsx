import { createContext, useState } from "react";

export interface RootObject {
  current: Current;
  location: Location;
}

export interface IAPIResponse {
  current: Current;
  location: Location;
}

export interface Current {
  air_quality: { [key: string]: number };
  cloud: number;
  condition: Condition;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

export interface Condition {
  code: number;
  icon: string;
  text: string;
}

export interface Location {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface IChildren {
  children?: React.ReactNode;
}

interface IWeatherContext {
  getWeather: (city: string) => Promise<void>;
  status?: IAPIResponse;
}

export const WeatherContext = createContext({} as IWeatherContext);

export const WeatherProvider = ({ children }: IChildren) => {
  const [status, setStatus] = useState<IAPIResponse>();
  const getWeather = async (city: string) => {
    try {
      console.log(city);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=665e6f7fce9e4a129a9172450230504&q=${city}&aqi=no`
      );

      if (response.ok) {
        const data = await response.json();
        setStatus(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WeatherContext.Provider value={{ getWeather, status }}>
      {children}
    </WeatherContext.Provider>
  );
};
