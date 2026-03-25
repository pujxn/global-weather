import Card from "../Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const AdditionalInfoSkeleton = ({}: Props) => {
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {Array.from({ length: 6 }).map((_, idx) => (
        <div className="flex justify-between" key={idx}>
          <div className="flex gap-4">
            <Skeleton className="w-28 h-8" />
            <Skeleton className="size-8 rounded-full" />
          </div>
          <Skeleton className="w-5 h-8" />
        </div>
      ))}
    </Card>
  );
};

export default AdditionalInfoSkeleton;
