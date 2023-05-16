import React, { useState } from "react";
import "./page01.css";
import Me from "../../assets/me.png";
import { AnimatePresence, motion } from "framer-motion";
import { wait } from "@testing-library/user-event/dist/utils";

export default function Page01() {
  const [messages, setMessages] = useState([
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="text-shows"
    >
      Este é o registro do meu primeiro semestre em Análise e Desenvolvimento de
      sistemas, no SENAI.
    </motion.p>,
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      className="text-shows"
    >
      Ele é privado, e só vou deixar você ler se completar o meu desafio...
    </motion.p>,
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 5 }}
      className="text-shows"
    >
      Se você conseguir pegar a esfera luminosa você poderá ver, irá aceitar o
      desafio?
    </motion.p>,
    <motion.button
      className="yes-btn"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7 }}
      whileHover={{ scale: 1.2 }}
      onTap={startGame}
    >
      Sim.
    </motion.button>,
  ]);
  const [cardHeight, setCardHeight] = useState();
  const [cardWidth, setCardWidth] = useState();
  const [cardStyle, setCardStyle] = useState([]);
  const [photoStyle, setPhotoStyle] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  async function expand() {
    if (!expanded) {
      setExpanded(true);
      setCardHeight(350);
      setCardWidth(400);
      setCardStyle({
        marginTop: "15vh",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      });
      setPhotoStyle({ height: "50px" });
    }
  }

  function startGame() {}

  return (
      <div className="main">
      <motion.div
        className="main-card"
        onHoverStart={expand}
        initial={{ scale: 0 }}
        animate={{ scale: 1, height: cardHeight, width: cardWidth }}
        transition={{ duration: 0.1 }}
        style={cardStyle}
      >
        <motion.img
          src={Me}
          alt=""
          srcset=""
          className="photo"
          style={photoStyle}
        />
        <h2>Jonathan Oliveira Bergamo</h2>
        <AnimatePresence>{expanded ? messages : null}</AnimatePresence>
      </motion.div>
      <aside>1º SEMESTRE</aside>
      <div className="background"></div>
    </div>
  );
}
