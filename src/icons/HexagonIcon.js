import React from "react";

function HexagonIcon({
  width = 48,
  height = 48,
  stroke = "#8DE9FF",
  strokeWidth = 2,
  ...props
}) {
  return (
    <svg viewBox="0 0 48 48" width={width} height={height} {...props}>
      <polygon
        points="24,4 41,14 41,34 24,44 7,34 7,14"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default HexagonIcon;
