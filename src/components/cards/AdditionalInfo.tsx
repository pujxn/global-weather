import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "../Card";
import { getWeather } from "../../api";

import Sunrise from "../../../src/assets/sunrise-svgrepo-com.svg?react";
import Cloudy from "../../../src/assets/cloudy-svgrepo-com.svg?react";
import Sunset from "../../../src/assets/sunset-svgrepo-com.svg?react";
import Pressure from "../../../src/assets/pressure-svgrepo-com.svg?react";
import Wind from "../../../src/assets/wind-svgrepo-com.svg?react";
import Uv from "../../../src/assets/uv-index-svgrepo-com.svg?react";
import UpArrow from "../../../src/assets/up-arrow-svgrepo-com.svg?react";

type Props = {};

const AdditionalInfo = ({}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 36 }),
  });

  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {rows.map(({ label, value, Icon }) => (
        <div className="flex justify-between" key={value}>
          <div className="flex gap-4">
            <span>{label}</span>
            <Icon className="size-8 invert" />
          </div>
          <span className="text-white">
            <FormatComponent
              value={value}
              timeZone={data.timezone}
              number={data.current[value]}
            />
          </span>
        </div>
      ))}
    </Card>
  );
};

export default AdditionalInfo;

const FormatComponent = ({
  value,
  timeZone,
  number,
}: {
  value: string;
  timeZone: string;
  number: number;
}) => {
  if (value === "sunrise" || value === "sunset") {
    return new Date(number * 1000).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: timeZone,
    });
  }

  if (value === "wind_deg") {
    return (
      <UpArrow
        className="size-8 invert"
        style={{ transform: `rotate(${number}deg)` }}
      />
    );
  }

  return number;
};

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    Icon: Cloudy,
  },
  {
    label: "UV Index",
    value: "uvi",
    Icon: Uv,
  },
  {
    label: "Wind Direction (°)",
    value: "wind_deg",
    Icon: Wind,
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    Icon: Pressure,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    Icon: Sunrise,
  },
  {
    label: "Sunset",
    value: "sunset",
    Icon: Sunset,
  },
] as const;
