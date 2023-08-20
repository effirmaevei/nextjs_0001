import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface MusicToggleProps {
  isMuted: boolean;
  onClick: () => void;
}

const MusicToggle: React.FC<MusicToggleProps> = ({ isMuted, onClick }) => {
  return (
    <button
      className="z-10 fixed top-4 left-4 p-2 bg-black rounded-full text-white"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size="lg" />
    </button>
  );
};

export default MusicToggle;
