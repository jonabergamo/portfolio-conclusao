import "./slider.style.css";
import { img1 } from "../../../images";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useGlitch } from "react-powerglitch";

export const Slider = () => {
  const [show1, setShow1] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const constraintsRef = useRef(null);
  const glitch1 = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 1150,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 5,
      amplitudeX: 0.05,
      amplitudeY: 0.05,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: {
      scale: 2,
    },
  });

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  const titleMotion = {
    rest: {
      y: -300,
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      y: -440,
      x: 20,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  const textMotion = {
    rest: {
      y: -300,
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      y: -60,
      x: 20,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className="slider-main" ref={constraintsRef}>
      <motion.div
        className="slider-container"
        id="scrolltest"
        drag="x"
        dragTransition={{ bounceStiffness: 100, bounceDamping: 50 }}
        dragElastic={0.1}
        dragConstraints={{ right: -600, left: -2700 }}
        animate={{ x: (scrollY * -1)-600 }}
        transition={{ type: "spring" }}
      >
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <motion.img
            src={img1}
            className="image"
            draggable={false}
            ref={glitch1.ref}
          />
          <motion.h1 style={{ zIndex: -1000 }} variants={titleMotion}>
            Jonathan Bergamo
          </motion.h1>
          <motion.p
            style={{ zIndex: -1000, width: "550px" }}
            variants={textMotion}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            beatae autem quo, explicabo cupiditate laborum officia maiores,
            facere, eaque delectus exercitationem dolores consequatur. Ad, ipsa!
            Nam natus facilis beatae qui?
          </motion.p>
        </motion.div>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <motion.img
            src={img1}
            className="image"
            draggable={false}
            ref={glitch1.ref}
          />
          <motion.h1 style={{ zIndex: -1000 }} variants={titleMotion}>
            Jonathan Bergamo
          </motion.h1>
          <motion.p
            style={{ zIndex: -1000, width: "550px" }}
            variants={textMotion}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            beatae autem quo, explicabo cupiditate laborum officia maiores,
            facere, eaque delectus exercitationem dolores consequatur. Ad, ipsa!
            Nam natus facilis beatae qui?
          </motion.p>
        </motion.div>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <motion.img
            src={img1}
            className="image"
            draggable={false}
            ref={glitch1.ref}
          />
          <motion.h1 style={{ zIndex: -1000 }} variants={titleMotion}>
            Jonathan Bergamo
          </motion.h1>
          <motion.p
            style={{ zIndex: -1000, width: "550px" }}
            variants={textMotion}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            beatae autem quo, explicabo cupiditate laborum officia maiores,
            facere, eaque delectus exercitationem dolores consequatur. Ad, ipsa!
            Nam natus facilis beatae qui?
          </motion.p>
        </motion.div>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <motion.img
            src={img1}
            className="image"
            draggable={false}
            ref={glitch1.ref}
          />
          <motion.h1 style={{ zIndex: -1000 }} variants={titleMotion}>
            Jonathan Bergamo
          </motion.h1>
          <motion.p
            style={{ zIndex: -1000, width: "550px" }}
            variants={textMotion}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            beatae autem quo, explicabo cupiditate laborum officia maiores,
            facere, eaque delectus exercitationem dolores consequatur. Ad, ipsa!
            Nam natus facilis beatae qui?
          </motion.p>
        </motion.div>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <motion.img
            src={img1}
            className="image"
            draggable={false}
            ref={glitch1.ref}
          />
          <motion.h1 style={{ zIndex: -1000 }} variants={titleMotion}>
            Jonathan Bergamo
          </motion.h1>
          <motion.p
            style={{ zIndex: -1000, width: "550px" }}
            variants={textMotion}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            beatae autem quo, explicabo cupiditate laborum officia maiores,
            facere, eaque delectus exercitationem dolores consequatur. Ad, ipsa!
            Nam natus facilis beatae qui?
          </motion.p>
        </motion.div>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <motion.img
            src={img1}
            className="image"
            draggable={false}
            ref={glitch1.ref}
          />
          <motion.h1 style={{ zIndex: -1000 }} variants={titleMotion}>
            Jonathan Bergamo
          </motion.h1>
          <motion.p
            style={{ zIndex: -1000, width: "550px" }}
            variants={textMotion}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            beatae autem quo, explicabo cupiditate laborum officia maiores,
            facere, eaque delectus exercitationem dolores consequatur. Ad, ipsa!
            Nam natus facilis beatae qui?
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
