import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface ImageButtonProps {
  alt: string;
  className: string;
  src: string;
}

/**
 * ImageButton component.
 * Renders an image button with a dialog that appears when clicked.
 */
const ImageButton: React.FC<ImageButtonProps> = ({ alt, className, src }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleClick = () => {
    setDialogVisible(true);
    //   setTimeout(() => {
    //     setDialogVisible(false);
    //   }, 500);
  };

  return (
    <div className={className}>
      <button
        onClick={handleClick}
        style={{
          cursor: "pointer",
        }}
      >
        <img alt={alt} src={src} />
      </button>
      {/* <div className={"absolute z-10 animation-fade"}> */}
      {dialogVisible && (
        // <div
        //   className={`z-10 fade ${dialogVisible ? "fade-out" : "fade-in"}`}
        //   onAnimationEnd={() => {
        //     if (!dialogVisible) setDialogVisible(false);
        //   }}
        // >
        <div
          className="z-10 absolute top-400 left-100 opacity-100 bg-black/50 rounded-md shadow-md p-4 animate-fade"
          //   onAnimationEnd={() => {
          //     setDialogVisible(false);
          //   }}
        >
          <p className="mb-2">You have clicked button x</p>
          <button
            // className="bg-gray-200 rounded-full p-2 hover:bg-gray-300"
            onClick={() => setDialogVisible(false)}
          >
            {/* <FaTimes /> */}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageButton;
