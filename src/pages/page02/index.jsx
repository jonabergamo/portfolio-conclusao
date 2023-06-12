import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

import Intro from "../routes/Intro";
import Language from "../routes/language";
import Automation from "../routes/automation";
import Network from "../routes/network";
import DataCience from "../routes/datacience";
import DataBase from "../routes/database";
import { Slider } from "../components/Slider/slider";
import { img1, main, signature } from "../../images";
import { useGlitch } from "react-powerglitch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "language",
    element: <Language />,
  },
  {
    path: "automation",
    element: <Automation />,
  },
  {
    path: "network",
    element: <Network />,
  },
  {
    path: "database",
    element: <DataBase />,
  },
  {
    path: "datacience",
    element: <DataCience />,
  },
]);

export default function Page02() {
  const [scrollY, setScrollY] = useState(0);

  window.addEventListener("scroll", function () {
    setScrollY(window.scrollY || window.pageYOffset);
  });

  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 8000,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.62,
    },
    shake: {
      velocity: 15,
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
    pulse: false,
  });

  const navGlith = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2000,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main>
        <header>
          <div className="logo">
            <h1 className="name">Jonathan Bergamo</h1>
          </div>
          <div className="navbar">
            <ol>
              <a href="" ref={navGlith.ref}>
                HOME
              </a>
            </ol>
            <ol>
              <a href="" ref={navGlith.ref}>
                ABOUT
              </a>
            </ol>
            <ol>
              <a href="" ref={navGlith.ref}>
                STUDIES
              </a>
            </ol>
            <ol>
              <a href="" ref={navGlith.ref}>
                PROJECTS
              </a>
            </ol>
          </div>
        </header>
        <div className="first-look">
          <motion.img
            src={main}
            alt=""
            style={{ width: "80vw" }}
            ref={glitch.ref}
          />
          <div className="circle"></div>
          <h2
            className="left-side-text"
            style={{
              position: "absolute",
              left: 45,
              bottom: 100,
              color: "antiquewhite",
            }}
          >
            LIVE IN SP, BRAZIL
          </h2>
          <div className="background-text">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: 1000 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                type: "tween",
              }}
            >
              React Developer
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: 1000 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                type: "tween",
              }}
            >
              React Developer
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: 1000 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                type: "tween",
              }}
            >
              React Developer
            </motion.h1>
          </div>
        </div>
        <div className="text-content">
          <div className="about">
            <h3 className="about-text">
              Olá! Sou Jonathan Bergamo, um desenvolvedor criativo do Brasil.
              Tenho paixão por criar soluções digitais inovadoras e impactantes,
              proporcionando experiências excepcionais aos usuários. Meu
              objetivo é combinar design visualmente atraente com usabilidade
              eficiente, garantindo a criação de sites e aplicativos que se
              destacam no mercado.
            </h3>
          </div>
          <RouterProvider router={router} />
        </div>
        <footer>
          <img
            src={signature}
            alt=""
            style={{ height: "15vw" }}
            ref={glitch.ref}
          />
        </footer>
      </main>
    </motion.div>
  );
}
