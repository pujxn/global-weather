import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const Card = ({ children, title }: Props) => {
  return (
    <div className="p-4 rounded-2xl bg-zinc-800 shadow-md flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
