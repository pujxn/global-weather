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
            <Skeleton className="w-20 h-8" />
            <Skeleton className="size-8 rounded-full" />
          </div>
          <Skeleton className="size-8" />
        </div>
      ))}
    </Card>
  );
};

export default AdditionalInfoSkeleton;
