import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "./api";

function App() {
  const [coordinates, setCoordinates] = useState<Coords>({
    lat: 18.5,
    lon: 74,
  });
  const [location, setLocation] = useState("Mumbai");

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoordinates({ lat: lat, lon: lon });
    setLocation("custom");
  };

  const onChangeLocation = (location: string) => {
    setLocation(location);
  };

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 18.5, lon: geocodeData?.[0].lon ?? 74 };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown
        location={location}
        onChangeLocation={onChangeLocation}
      />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
