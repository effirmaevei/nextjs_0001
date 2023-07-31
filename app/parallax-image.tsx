import "atropos/atropos.css";
import "../styles/atropos.module.scss";
import Atropos from "atropos";
import { useEffect } from "react";

export default function ParallaxImage() {
  useEffect(() => {
    const myAtropos = Atropos({
      el: ".my-atropos",
      //   activeOffset: 40,
      //   shadowScale: 1.05,
      shadow: false,
      rotate: true,
      //   highlight: true,
      duration: 600,
      onEnter() {
        // console.log("enter");
      },
      onLeave() {
        // console.log("Leave");
      },
      onRotate(x, y) {
        // console.log("Rotate", x, y);
      },
      // rest of parameters
    });
  }, []);

  return (
    <div className="atropos my-atropos">
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            <div className="atropos-content-container">
              <img
                src="enviro.png"
                data-atropos-offset="10"
                width={768 * 1.2}
                height={512 * 1.2}
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
  );
}
