"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import ParallaxImage from "./parallax-image";
import "../styles/atro.css";
import "../styles/trinkets.css";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <main className="flex">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Laila:wght@500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <button
        className="z-10 fixed top-4 left-4 p-2 bg-black rounded-full text-white"
        onClick={handleMuteClick}
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size="lg" />
      </button>

      <div className="mainContainer">
        <ParallaxImage />
      </div>

      <img alt="Zelda" className="trinketZelda" src="zelda.png" />
      <img alt="Dragon" className="trinketDragon" src="dragon.png" />

      <audio ref={audioRef} src="bgm.mp3" loop />
    </main>
  );
}
