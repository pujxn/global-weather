import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "../Card";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = { coords: Coords };

const CurrentWeather = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather(coords),
  });
  return (
    <Card
      title="Current Temperature"
      childrenClassName="flex flex-col items-center gap-6"
    >
      <div className="flex flex-col gap-2 items-center">
        <p className="text-6xl font-semibold text-center text-white">
          {Math.round(data.current.temp)}°C
        </p>
        <WeatherIcon
          src={data.current.weather[0].icon}
          alt={data.current.weather[0].description}
          className="size-14"
        />
        <p className="capitalize text-xl">
          {data.current.weather[0].description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">Local time:</p>
        <p className="font-semibold text-4xl text-white">
          {new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: data.timezone,
          }).format(new Date(data.current.dt * 1000))}
        </p>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2 items-center">
          <p>Feels Like</p>
          <p className="text-white">{Math.round(data.current.feels_like)}°C</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Humidity</p>
          <p className="text-white">{Math.round(data.current.humidity)}%</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Wind Speed</p>
          <p className="text-white">{data.current.wind_speed} km/h</p>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
