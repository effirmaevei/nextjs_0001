import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface ImageButtonProps {
  alt: string;
  className: string;
  src: string;
  toastId: React.MutableRefObject<any>;
}

// React Hook
function useWindowSize() {
  // Derived from https://github.com/uidotdev/usehooks/blob/main/index.js
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const ImageButton = ({ alt, className, src, toastId }: ImageButtonProps) => {
  let toastMsg: React.ReactElement;
  let char = alt == "Zelda shield" ? "A" : "M";

  if (char == "A") {
    toastMsg = (
      <div>
        Do you remember when we got your new case? 🛒.
        <br />
        <small>
          <i>A. July 2023.</i>
        </small>
      </div>
    );
  } else {
    toastMsg = (
      <div>
        Were you happy with the GPU I got for you? 🎴
        <br />
        <small>
          <i>M. July 2023.</i>
        </small>
      </div>
    );
  }

  const windowSize = useWindowSize();
  let isMobile = () => windowSize.width! < 800;

  const notify = () => {
    // if (!toast.isActive(toastId.current)) {
    toastId.current = toast(toastMsg, {
      position: isMobile()
        ? "bottom-center"
        : char == "A"
        ? "bottom-left"
        : "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      progressStyle: {
        background: "rgba(220, 100, 80, 0.3)",
      },
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      pauseOnFocusLoss: true,
      theme: "dark",
    });
    // }
  };

  return (
    <div>
      <button
        onClick={notify}
        style={{
          cursor: "pointer",
        }}
      >
        <img alt={alt} src={src} className={className} />
      </button>
    </div>
  );
};

export default ImageButton;
