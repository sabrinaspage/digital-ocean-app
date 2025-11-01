import React from "react";

function FolderIcon({
  width = 48,
  height = 48,
  stroke = "#8DE9FF",
  strokeWidth = 2,
  className,
  ...props
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      width={width}
      height={height}
      {...props}
    >
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M8 11h13l3 3h16v21H8z"
      />
    </svg>
  );
}

export default FolderIcon;
