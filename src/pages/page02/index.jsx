import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

import Intro from "../routes/Intro";
import Language from "../routes/language";
import Automation from "../routes/automation";
import Network from "../routes/network";
import DataCience from "../routes/datacience";
import DataBase from "../routes/database";

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

  return (
    <motion.div
      className="content"
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
    >
      <main>
        <RouterProvider router={router} />
      </main>
      <motion.aside
        initial={{ y: 0 }}
        animate={{ y: scrollY }}
        transition={{
          type: "spring",
          duration: 0.3,
          stiffness: 50,
        }}
      >
        <div className="text-area">
          <a href="/">
            <div className="section-title">
              <span className="green-circle 1"></span>
              <h3>Introdução</h3>
            </div>
          </a>
          <a href="language">
            <div className="section-title">
              <span className="green-circle 2"></span>
              <h3>Linguagem de Programação</h3>
            </div>
          </a>
          <a href="automation">
            <div className="section-title">
              <span className="green-circle 3"></span>
              <h3>Automação industrial</h3>
            </div>
          </a>
          <a href="network">
            <div className="section-title">
              <span className="green-circle 4"></span>
              <h3>Redes de Computadores</h3>
            </div>
          </a>
          <a href="database">
            <div className="section-title">
              <span className="green-circle 5"></span>
              <h3>Banco de Dados</h3>
            </div>
          </a>
          <a href="datacience">
            <div className="section-title">
              <span className="green-circle 6"></span>
              <h3>Ciência de Dados</h3>
            </div>
          </a>
          <div className="section-title">
            <span className="green-circle 7"></span>
            <h3>Projetos Pessoais</h3>
          </div>
        </div>
      </motion.aside>
      <div className="background-page02"></div>
    </motion.div>
  );
}
