import Card from "../Card";
import { Skeleton } from "../ui/skeleton";
import WeatherIcon from "../WeatherIcon";

type Props = {};

const HourlyForecastSkeleton = ({}: Props) => {
  return (
    <Card
      title="Hourly Forecast (48 hours)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {Array.from({ length: 48 }).map((_, idx) => (
        <div key={idx} className="flex flex-col gap-2 items-center p-2">
          <Skeleton className="w-15 h-6" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="w-8 h-6" />
        </div>
      ))}
    </Card>
  );
};

export default HourlyForecastSkeleton;
