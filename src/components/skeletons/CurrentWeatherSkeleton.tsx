import Card from "../Card";
import { Skeleton } from "../ui/skeleton";
import WeatherIcon from "../WeatherIcon";

type Props = {};

const CurrentWeatherSkeleton = ({}: Props) => {
  return (
    <Card
      title="Current Temperature"
      childrenClassName="flex flex-col items-center gap-6"
    >
      <div className="flex flex-col gap-2 items-center">
        <Skeleton className="w-30 h-15" />
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="w-36 h-7" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">Local time:</p>
        <Skeleton className="w-36 h-10" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2 items-center">
          <p>Feels Like</p>
          <Skeleton className="w-16 h-6" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Humidity</p>
          <Skeleton className="w-16 h-6" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Wind Speed</p>
          <Skeleton className="w-16 h-6" />
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeatherSkeleton;
