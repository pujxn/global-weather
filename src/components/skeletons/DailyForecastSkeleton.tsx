import Card from "../Card";
import { Skeleton } from "../ui/skeleton";
import WeatherIcon from "../WeatherIcon";

type Props = {};

const DailyForecastSkeleton = ({}: Props) => {
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="flex justify-between">
          <Skeleton className="w-9 h-8" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="size-8" />
          <Skeleton className="size-8" />
          <Skeleton className="size-8" />
        </div>
      ))}
    </Card>
  );
};

export default DailyForecastSkeleton;
