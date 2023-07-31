"use client";

import Image from "next/image";
import Styles from "../styles/styles.module.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import ParallaxImage from "./parallax-image";

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
        console.log("autoplay blocked by user browser policy");
      }
    );
  }, []);

  const handleMuteClick = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);

      if (isMuted) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Laila:wght@500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <button
        className="fixed top-4 left-4 p-2 bg-black rounded-full text-white"
        onClick={handleMuteClick}
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size="lg" />
      </button>
      <div className={Styles.banner}>
        <h1>A place to reminisce ...</h1>
      </div>

      {/* <div className={`relative rounded-xl  ${Styles.imgBlurredEdge}`}>
        <Image
          src="/enviro.png"
          alt="environment"
          className={`w-full h-full object-cover`}
          width={768 * 1.5}
          height={512 * 1.5}
          priority
        />
      </div> */}

      <div className={`main-container ${Styles.imgRoundedXl}`}>
        <ParallaxImage />
      </div>

      <div>
        <audio ref={audioRef} src="/bgm.mp3" loop />
      </div>
    </main>
  );
}
