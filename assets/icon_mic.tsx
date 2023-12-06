import { IIcon } from "@/interfaces";
const MicIcon = ({ width = 24, height = 24, fill = "#000000" }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 40 40`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        fill="#ACF4C9"
      />
      <path
        d="M23.45 13.325C23.45 11.4887 21.9613 10 20.125 10C18.2886 10 16.8 11.4887 16.8 13.325V19.5C16.8 21.3363 18.2886 22.825 20.125 22.825C21.9613 22.825 23.45 21.3363 23.45 19.5V13.325Z"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 19.0254C13 22.9603 16.1901 26.1504 20.125 26.1504M20.125 26.1504C24.0599 26.1504 27.25 22.9603 27.25 19.0254M20.125 26.1504V29.0004"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MicIcon;
