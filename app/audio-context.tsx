import React from "react";

interface AudioContextValue {
  isMuted: boolean;
  handleMuteClick: () => void;
}

export const AudioContext = React.createContext<AudioContextValue>({
  isMuted: true,
  handleMuteClick: () => {},
});
