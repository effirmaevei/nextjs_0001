import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface MusicToggleProps {
  isMuted: boolean;
  onClick: () => void;
}

const MusicToggle: React.FC<MusicToggleProps> = ({ isMuted, onClick }) => {
  console.log(isMuted);
  console.log(onClick);
  return (
    <button className="p-2 bg-neutral-900 mx-1" onClick={onClick}>
      <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
    </button>
  );
};

export default MusicToggle;
