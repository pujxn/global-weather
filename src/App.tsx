import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/Card";
import DailyForecast from "./components/cards/DailyForecast";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 18.5, lon: 74 }),
  });
  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current ?? {}).slice(0, 100)}
      </Card>
      <Card title="Hourly Forecast (48h)">
        {JSON.stringify(data?.hourly ?? {}).slice(0, 100)}
      </Card>
      <DailyForecast />
    </div>
  );
}

export default App;
