import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const WeatherIcon = ({ src, alt, className }: Props) => {
  return (
    <img
      className={clsx("size-8", className)}
      src={`https://openweathermap.org/payload/api/media/file/${src}.png`}
      alt={alt}
    />
  );
};

export default WeatherIcon;
