import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./style.css";
import { CoolSwitch } from "../components/coolSwitch/index";
import { main, signature } from "../../images";
import { useGlitch } from "react-powerglitch";
import { ProjectPicker } from "../components/ProjectPicker";
import { StudiesPicker } from "../components/StudiesPicker";
import { FiArrowUp } from "react-icons/fi";
import {
  AiFillGithub as Github,
  AiFillLinkedin as Linkedin,
  AiOutlineInstagram as Instagram,
} from "react-icons/ai";

const squareVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: "spring", delay: 0.3, stiffness: 50 },
  },
  hidden: { opacity: 0, x: -100 },
};

export default function Page02() {
  const [checked, setChecked] = useState(true);
  const [language, setLanguage] = useState(10);
  const [scrollY, setScrollY] = useState(0);
  const [barSize, setBarSize] = useState(0);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    window.scrollTo(-100, 0);
  }, []);

  useEffect(() => {
    setBarSize((scrollY * 100) / 2000);
  }, [scrollY]);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
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
      duration: 10000,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
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

  const handleChange = () => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    html.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    setChecked(!checked);
  };

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0, scale: 2, y: 900 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 3, type: "tween" }}
    >
      <main>
        <header>
          <motion.div
            className="logo"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 3, duration: 1, type: "spring" }}
          >
            <h1 className="name" ref={navGlith.ref}>
              Jonathan Bergamo
            </h1>
          </motion.div>
          <motion.div
            className="navbar"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 3, duration: 1, type: "spring" }}
          >
            <ol
              onClick={() => {
                window.scrollTo(-100, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>INÍCIO</a>
            </ol>
            <ol
              onClick={() => {
                window.scrollTo(-100, 670);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>SOBRE</a>
            </ol>
            <ol
              onClick={() => {
                window.scrollTo(-100, 1350);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>PROJETOS</a>
            </ol>
            <ol
              onClick={() => {
                window.scrollTo(-100, 1950);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>ESTUDOS</a>
            </ol>
            <ol
              onClick={() => {
                window.scrollTo(-100, 2500);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>CONTATO</a>
            </ol>
            <ol style={{ cursor: "pointer" }}>
              <CoolSwitch
                handleChange={handleChange}
                checked={checked}
                ref={glitch.ref}
              />
            </ol>
          </motion.div>
        </header>
        <div
          className="social-icons1"
          style={{
            position: "absolute",
            right: 160,
            bottom: 10,
            height: 100,
            color: "var(--text-color2)",
            zIndex: 10000,
          }}
        >
          <div
            className="icon1 light"
            ref={navGlith.ref}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jonathanbergamo/",
                "_blank"
              );
            }}
          >
            <Linkedin size={25} style={{ color: "red" }} />
          </div>
          <div
            className="icon1 light"
            ref={navGlith.ref}
            onClick={() => {
              window.open("https://www.instagram.com/jowbergamo/", "_blank");
            }}
          >
            <Instagram size={25} />
          </div>
          <div
            className="icon1 light"
            ref={navGlith.ref}
            onClick={() => {
              window.open("https://github.com/jonabergamo", "_blank");
            }}
          >
            <Github size={25} />
          </div>
        </div>
        <div className="first-look">
          <motion.img
            src={main}
            alt=""
            style={{ width: "75vw" }}
            ref={glitch.ref}
          />
          <div className="circle"></div>
          <motion.h2
            className="left-side-text"
            style={{
              position: "absolute",
              left: 45,
              bottom: 25,
              color: "var(--text-color2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1, type: "spring" }}
          >
            LIVE IN SP, BRAZIL
          </motion.h2>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1, type: "spring" }}
            src={signature}
            alt=""
            className="signature"
            style={{
              position: "absolute",
              right: 45,
              bottom: 25,
              height: 100,
              color: "var(--text-color2)",
            }}
            ref={glitch.ref}
          />
          <div className="background-text">
            <motion.h1
              className="text-background"
              initial={{ x: 0 }}
              animate={{ x: 1000 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                type: "tween",
              }}
            >
              Creative Developer
            </motion.h1>
            <motion.h1
              className="text-background"
              initial={{ x: 0 }}
              animate={{ x: 1000 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                type: "tween",
              }}
            >
              Creative Developer
            </motion.h1>
          </div>
        </div>
        <div className="text-content">
          <div className="about">
            <motion.h3 className="about-text">
              Olá! Sou Jonathan Bergamo, um desenvolvedor criativo do Brasil.
              Tenho paixão por criar soluções digitais inovadoras e impactantes,
              proporcionando experiências excepcionais aos usuários. Meu
              objetivo é combinar design visualmente atraente com usabilidade
              eficiente, garantindo a criação de sites e aplicativos que se
              destacam no mercado.
            </motion.h3>
            <motion.div
              className="more-text"
              style={{ display: "flex", justifyContent: "flex-end" }}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariants}
            >
              <motion.div className="more-text-container">
                <h2 ref={navGlith.ref}>EXPERIÊNCIAS</h2>
                <p>
                  Com 6 meses de experiência como freelancer na área de
                  desenvolvimento web, trabalhei em uma variedade de projetos
                  desafiadores. Durante esse tempo, pude aprimorar minhas
                  habilidades técnicas e criativas, adquirindo conhecimentos
                  sólidos em tecnologias como ReactJS, React Native, HTML, CSS e
                  JavaScript. Essa experiência me permitiu desenvolver uma
                  abordagem centrada no usuário, priorizando a criação de
                  interfaces intuitivas e cativantes.
                </p>
              </motion.div>
              <div className="more-text-container">
                <h2 ref={navGlith.ref}>FACULDADE</h2>
                <p>
                  Atualmente, estou cursando Análise e Desenvolvimento de
                  Sistemas na Faculdade SENAI Gaspar Ricardo Junior. Essa
                  jornada acadêmica tem sido uma excelente oportunidade para
                  expandir meus conhecimentos e me tornar um profissional mais
                  ético e completo na área de desenvolvimento de sistemas.
                </p>
              </div>
            </motion.div>
          </div>
          <div
            className="projects"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 ref={navGlith.ref}>PROJETOS</h2>
            <ProjectPicker check={checked} />
          </div>
          <div
            className="projects"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 ref={navGlith.ref}>ESTUDOS</h2>
            <StudiesPicker check={checked} />
          </div>
        </div>
        <footer>
          <img
            src={signature}
            alt=""
            style={{ height: "15vw" }}
            ref={glitch.ref}
          />
          <motion.h2
            className="email"
            ref={glitch.ref}
            onClick={() => {
              window.open("mailto:jonathanbergamo16@gmail.com", "_blank");
            }}
          >
            jonathanbergamo16@gmail.com
          </motion.h2>
          <div className="social-icons">
            <div
              className="icon"
              ref={navGlith.ref}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/jonathanbergamo/",
                  "_blank"
                );
              }}
            >
              <Linkedin size={50} style={{ color: "red" }} />
            </div>
            <div
              className="icon"
              ref={navGlith.ref}
              onClick={() => {
                window.open("https://www.instagram.com/jowbergamo/", "_blank");
              }}
            >
              <Instagram size={50} />
            </div>
            <div
              className="icon"
              ref={navGlith.ref}
              onClick={() => {
                window.open("https://github.com/jonabergamo", "_blank");
              }}
            >
              <Github size={50} />
            </div>
          </div>
        </footer>
      </main>
      <motion.div
        className="progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: barSize }}
        transition={{ type: "spring", stiffness: 100 }}
      ></motion.div>
      <motion.div
        className="top-arrow"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: barSize < 80 ? 0 : 1, x: barSize < 80 ? 200 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onTap={() => {
          window.scrollTo(0, 0);
        }}
        whileTap={{ opacity: 0 }}
        ref={navGlith.ref}
      >
        <FiArrowUp size={40} color="red" />
      </motion.div>
    </motion.div>
  );
}
