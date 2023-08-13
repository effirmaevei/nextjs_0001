import "atropos/atropos.css";
import Atropos from "atropos";
import { useEffect } from "react";
import Styles from "../styles/styles.module.css";
import Head from "next/head";
import "../styles/atro.css";

export default function ParallaxImage() {
  useEffect(() => {
    const atropos = Atropos({
      el: ".my-atropos",
      activeOffset: 20,
      shadow: false,
      rotate: true,
      highlight: false,
      duration: 300,
      rotateXMax: 2,
      rotateYMax: 2,
    });
  }, []);

  return (
    <>
      <div className="atropos my-atropos">
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div className="atropos-content-container">
                <img
                  src="enviro.webp"
                  data-atropos-offset="2"
                  style={{
                    width: "90vw",
                    height: "auto",
                    objectFit: "none",
                  }}
                  alt="environment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
