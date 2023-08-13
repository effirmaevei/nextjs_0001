import React from "react";
import { ToastContainer, toast } from "react-toastify";

interface ImageButtonProps {
  alt: string;
  className: string;
  src: string;
  toastId: React.MutableRefObject<any>;
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

  const notify = () => {
    console.log(alt);
    console.log(className);
    console.log(src);
    console.log(toastId);
    // if (!toast.isActive(toastId.current)) {

    let customStyle;
    if (char == "A") {
      customStyle = {
        width: "500px",
      };
    } else {
      customStyle = {
        marginLeft: "-180px",
        width: "500px",
      };
    }

    toastId.current = toast(toastMsg, {
      position: char == "A" ? "bottom-left" : "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      progressStyle: {
        background: "rgba(220, 100, 80, 0.3)",
      },
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: true,
      theme: "dark",
      style: customStyle,
    });
    // }
  };

  return (
    <div className={className}>
      <button
        onClick={notify}
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
