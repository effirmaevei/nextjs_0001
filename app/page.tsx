"use client";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import ParallaxImage from "./parallax-image";
import "../styles/atro.css";
import "../styles/trinkets.css";
import ImageButton from "./image-button";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { AudioContext } from "./audio-context";
import Toolbar from "./toolbar";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const toastId = useRef(null);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play().then(
  //       () => {
  //         audioRef.current!.volume = 0.5;
  //         setIsPlaying(true);
  //         setIsMuted(false);
  //       },
  //       () => {
  //         console.log("Autoplay blocked by user browser policy");
  //       }
  //     );
  //   }
  // }, []);

  const handleMuteClick = () => {
    console.log("Mute pressed");
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;

      setIsMuted(!isMuted);

      if (isMuted) {
        audioRef.current.volume = 0.5;
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
    <AudioContext.Provider value={{ isMuted, handleMuteClick }}>
      <main className="flex">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Laila:wght@500;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        {/* <MusicToggle isMuted={isMuted} onClick={handleMuteClick} /> */}

        <div className="mainContainer">
          <ParallaxImage />
        </div>

        {/* Unless containerId is used, all calls to toast() will use as parent this container. */}
        <ToastContainer limit={2} newestOnTop />

        <ImageButton {...zeldaButtonProps} />
        <ImageButton {...dragonButtonProps} />

        <audio ref={audioRef} src="bgm.mp3" loop />
      </main>
      <Toolbar className={"toolbar"} />
    </AudioContext.Provider>
  );
}
