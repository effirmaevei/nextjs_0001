"use client";

import Image from "next/image";
import Styles from "../styles/styles.module.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import ParallaxImage from "./parallax-image";
// import AStyles from "../styles/atropos.module.scss";
import "../styles/atro.css";

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
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Laila:wght@500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {/* <button
        className="fixed top-4 left-4 p-2 bg-black rounded-full text-white"
        onClick={handleMuteClick}
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size="lg" />
      </button>
      <div className={Styles.banner}>
        <h1>A place to reminisce ...</h1>
      </div> */}

      {/* <div className={`${Styles.mainContainer} ${Styles.imgRoundedXl}`}>
        <ParallaxImage />
      </div> */}
      <div className={`mainContainer ${Styles.imgRoundedXl}`}>
        <ParallaxImage />
      </div>
      {/* 
      <div>
        <audio ref={audioRef} src="/bgm.mp3" loop />
      </div> */}
    </main>
  );
}
