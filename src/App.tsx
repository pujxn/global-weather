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
import MapTypeDropdown from "./components/dropdowns/MapTypeDropdown";
import MapLegend from "./components/MapLegend";

function App() {
  const [coordinates, setCoordinates] = useState<Coords>({
    lat: 18.5,
    lon: 74,
  });
  const [location, setLocation] = useState("Mumbai");
  const [mapType, setMapType] = useState("clouds_new");

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

  const onChangeMapType = (mapType: string) => {
    setMapType(mapType);
  };

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 18.5, lon: geocodeData?.[0].lon ?? 74 };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex gap-4 items-center">
          <label className="text-xl font-semibold" htmlFor="city">
            Location:
          </label>
          <LocationDropdown
            location={location}
            onChangeLocation={onChangeLocation}
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="text-xl font-semibold" htmlFor="map-type">
            Map Type:
          </label>
          <MapTypeDropdown
            mapType={mapType}
            onChangeMapType={onChangeMapType}
          />
        </div>
      </div>
      <div className="relative">
        <Map coords={coords} onMapClick={onMapClick} mapType={mapType} />
        <MapLegend mapType={mapType} />
      </div>
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
