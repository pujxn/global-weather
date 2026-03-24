import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = { mapType: string; onChangeMapType: (mapType: string) => void };

const MapTypeDropdown = ({ mapType, onChangeMapType }: Props) => {
  return (
    <Select value={mapType} onValueChange={(value) => onChangeMapType(value)}>
      <SelectTrigger id="map-type" className="w-[180px] capitalize">
        <SelectValue placeholder="Map Type" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        <SelectGroup>
          {mapTypes.map((mapType) => (
            <SelectItem key={mapType} value={mapType} className="capitalize">
              {mapType.split("_")[0]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MapTypeDropdown;

const mapTypes = [
  "clouds_new",
  "precipitation_new",
  "pressure_new",
  "wind_new",
  "temp_new",
];
