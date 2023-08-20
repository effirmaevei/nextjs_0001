"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  faVolumeUp,
  faVolumeMute,
  faPenToSquare,
  faFeatherPointed,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MusicToggle from "./music-toggle";
import { AudioContext } from "./audio-context";

const Toolbar = ({ className } = { className: "" }) => {
  const { isMuted, handleMuteClick } = useContext(AudioContext);
  let toastMsg: React.ReactElement;

  return (
    <div className={className}>
      <MusicToggle isMuted={isMuted} onClick={handleMuteClick} />
      <FontAwesomeIcon
        className={"p-3 bg-neutral-900 mx-1"}
        icon={faFeatherPointed}
      />
      <FontAwesomeIcon className={"p-3 bg-neutral-900 mx-1"} icon={faGithub} />
    </div>
  );
};

export default Toolbar;
