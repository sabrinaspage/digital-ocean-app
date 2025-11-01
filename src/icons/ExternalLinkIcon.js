import React from "react";

function ExternalLinkIcon({ width = 24, height = 24, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        fill="currentColor"
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
      />
    </svg>
  );
}

export default ExternalLinkIcon;
