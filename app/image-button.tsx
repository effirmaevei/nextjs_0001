import React from "react";

interface ImageButtonProps {
  alt: string;
  className: string;
  src: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ alt, className, src }) => {
  return <img alt={alt} className={className} src={src} />;
};

export default ImageButton;
