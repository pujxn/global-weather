import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div>
      return <div>{children}</div>;
    </div>
  );
};

export default Card;
