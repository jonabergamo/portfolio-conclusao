import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
import { CoolSwitch } from "../components/coolSwitch/index";
import Language from "../routes/language";
import Automation from "../routes/automation";
import Network from "../routes/network";
import DataCience from "../routes/datacience";
import DataBase from "../routes/database";
import { main, signature } from "../../images";
import { useGlitch } from "react-powerglitch";

import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { ProjectPicker } from "../components/ProjectPicker";

export default function Page02() {
  const [checked, setChecked] = useState(true);
  const [language, setLanguage] = useState(10);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main>
        <header>
          <div className="logo">
            <h1 className="name">Jonathan Bergamo</h1>
          </div>
          <div className="navbar">
            <ol
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>INÍCIO</a>
            </ol>
            <ol
              onClick={() => {
                window.scrollTo(0, 650);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>SOBRE</a>
            </ol>
            <ol
              onClick={() => {
                window.scrollTo(0, 1300);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>PROJETOS</a>
            </ol>
            <ol
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <a ref={navGlith.ref}>ESTUDO</a>
            </ol>
            <ol style={{ cursor: "pointer" }}>
              <CoolSwitch
                handleChange={handleChange}
                checked={checked}
                ref={glitch.ref}
              />
            </ol>
          </div>
        </header>
        <div className="first-look">
          <motion.img
            src={main}
            alt=""
            style={{ width: "75vw" }}
            ref={glitch.ref}
          />
          <div className="circle"></div>
          <h2
            className="left-side-text"
            style={{
              position: "absolute",
              left: 45,
              bottom: 25,
              color: "var(--text-color2)",
            }}
          >
            LIVE IN SP, BRAZIL
          </h2>
          <img
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
            <h3 className="about-text">
              Olá! Sou Jonathan Bergamo, um desenvolvedor criativo do Brasil.
              Tenho paixão por criar soluções digitais inovadoras e impactantes,
              proporcionando experiências excepcionais aos usuários. Meu
              objetivo é combinar design visualmente atraente com usabilidade
              eficiente, garantindo a criação de sites e aplicativos que se
              destacam no mercado.
            </h3>
            <div
              className="more-text"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className="more-text-container">
                <h2>EXPERIÊNCIAS</h2>
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
              </div>
              <div className="more-text-container">
                <h2>FACULDADE</h2>
                <p>
                  Atualmente, estou cursando Análise e Desenvolvimento de
                  Sistemas na Faculdade SENAI Gaspar Ricardo Junior. Essa
                  jornada acadêmica tem sido uma excelente oportunidade para
                  expandir meus conhecimentos e me tornar um profissional mais
                  ético e completo na área de desenvolvimento de sistemas.
                </p>
              </div>
            </div>
          </div>
          <ProjectPicker check={checked} />
          <Routes>
            <Route exacth path="/" />
            <Route path="/language" element={<Language />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/network" element={<Network />} />
            <Route path="/database" element={<DataBase />} />
            <Route path="/dataciencie" element={<DataCience />} />
          </Routes>
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
