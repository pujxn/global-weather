import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {};

const Map = ({}: Props) => {
  return (
    <MapContainer
      center={[18.5, 74]}
      zoom={5}
      style={{ width: "700px", height: "500px" }}
      scrollWheelZoom={false}
    >
      <MapClick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[18.5, 74]}></Marker>
    </MapContainer>
  );
};

export default Map;

const MapClick = () => {
  const map = useMap();

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    map.panTo([lat, lng]);
  });

  return null;
};
