import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = { location: string; onChangeLocation: (location: string) => void };

const LocationDropdown = ({ location, onChangeLocation }: Props) => {
  return (
    <Select value={location} onValueChange={(value) => onChangeLocation(value)}>
      <SelectTrigger id="city" className="w-[180px]">
        <SelectValue placeholder="Cities" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        <SelectGroup>
          {location === "custom" && (
            <SelectItem value="custom">Custom</SelectItem>
          )}
          {locations.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LocationDropdown;

const locations = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Dubai",
  "Singapore",
  "Sydney",
  "Mumbai",
  "Delhi",
];
