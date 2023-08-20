"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import ParallaxImage from "./parallax-image";
import "../styles/atro.css";
import "../styles/trinkets.css";
import ImageButton from "./image-button";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import MusicToggle from "./music-toggle";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const toastId = useRef(null);

  useEffect(() => {
    audioRef.current?.play().then(
      () => {
        setIsPlaying(true);
      },
      () => {
        console.log("Autoplay blocked by user browser policy");
      }
    );
  }, []);

  const handleMuteClick = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;

      setIsMuted(!isMuted);

      if (isMuted) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const zeldaButtonProps = {
    alt: "Zelda shield",
    className: "trinketZelda",
    src: "zelda.png",
    toastId: toastId,
  };

  const dragonButtonProps = {
    alt: "Dragon shield",
    className: "trinketDragon",
    src: "dragon.png",
    toastId: toastId,
  };

  return (
    <main className="flex">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Laila:wght@500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <MusicToggle isMuted={isMuted} onClick={handleMuteClick} />

      <div className="mainContainer">
        <ParallaxImage />
      </div>

      {/* Unless containerId is used, all calls to toast() will use as parent this container. */}
      <ToastContainer limit={2} newestOnTop />

      <ImageButton {...zeldaButtonProps} />
      <ImageButton {...dragonButtonProps} />

      <audio ref={audioRef} src="bgm.mp3" loop />
    </main>
  );
}
