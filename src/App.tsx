import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 18.5, lon: 74 }),
  });

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
