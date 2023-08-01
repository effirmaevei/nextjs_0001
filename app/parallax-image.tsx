import "atropos/atropos.css";
// import "../styles/atropos.module.scss";
import Atropos from "atropos";
import { useEffect } from "react";
import Styles from "../styles/styles.module.css";
import Head from "next/head";
import "../styles/atro.css";

export default function ParallaxImage() {
  useEffect(() => {
    const myAtropos = Atropos({
      el: ".my-atropos",
      // activeOffset: -150,
      //   shadowScale: 1.05,
      shadow: false,
      rotate: true,
      highlight: false,
      duration: 300,
      rotateXMax: 3,
      rotateYMax: 3,
      // onEnter() {
      //   // console.log("enter");
      // },
      // onLeave() {
      //   // console.log("Leave");
      // },
      // onRotate(x, y) {
      //   // console.log("Rotate", x, y);
      // },
      // rest of parameters
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <div
        className="atropos my-atropos"
        // style={{ width: "100vw", height: "100vh", zIndex: 2 }}
        style={{ zIndex: 2 }}
      >
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div className="atropos-content-container">
                <img
                  src="enviro.png"
                  data-atropos-offset="5"
                  style={{
                    width: "100%",
                    height: "100%",
                    "object-fit": "cover",
                    // transform: "scale(0.5)",
                  }}
                  // height="100vh"
                  alt="environment"
                />
                {/* <img
                src="image000.svg"
                data-atropos-offset="7"
              />
              <img
                src="image001.svg"
                data-atropos-offset="6"
              />
              <img
                src="image002.svg"
                data-atropos-offset="2"
              />
              <img
                src="image003.svg"
                data-atropos-offset="5"
              />
              <img
                src="image004.svg"
                data-atropos-offset="0"
              />
              <img
                src="image005.svg"
                data-atropos-offset="1"
              />
              <img
                src="image006.svg"
                data-atropos-offset="5"
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
