import * as React from "react";
const MenuAltIcon = ({
  width = 187,
  height = 187,
  className,
}: {
  width?: number;
  height?: number;
  dark?: boolean;
  className?: string;
}) => (
    <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g id="Menu / Menu_Alt_02">
      <path
        id="Vector"
        d="M11 17H19M5 12H19M11 7H19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default MenuAltIcon;
