import { IIcon } from "@/interfaces";

interface IIconThreeDot extends IIcon {
  onClick?: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}

const IconThreeDot = ({
  width = 24,
  height = 24,
  fill = "#000000",
  onClick,
}: IIconThreeDot) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill={fill}
        fillOpacity="0.1"
      />
      <circle
        cx="6"
        cy="12"
        r="1.5"
        fill={fill}
      />
      <circle
        cx="12"
        cy="12"
        r="1.5"
        fill={fill}
      />
      <circle
        cx="18"
        cy="12"
        r="1.5"
        fill={fill}
      />
    </svg>
  );
};

export default IconThreeDot;
