import React from "react";

// interface ImageButtonProps {
//   alt: string;
//   className: string;
//   src: string;
//   notify: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

const ImageButton = ({ alt, className, src, callback }) => {
  return (
    <div className={className}>
      <button
        onClick={callback}
        style={{
          cursor: "pointer",
        }}
      >
        <img alt={alt} src={src} />
      </button>
    </div>
  );
};

export default ImageButton;
