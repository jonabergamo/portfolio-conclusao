import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  automation,
  automationWhite,
  calculadora,
  calculadoraWhite,
  database,
  databaseWhite,
  datacience,
  datacienceWhite,
  gerenciador,
  gerenciadorWhite,
  img1,
  jogoEspaco,
  jogoEspacoWhite,
  language,
  languageWhite,
  network,
  networkWhite,
  paginaCaptura,
  paginaCapturaWhite,
  portfolio,
  portfolioWhite,
  smartCode,
  smartCodeWhite,
} from "../../../images";
import "./style.css";
import { useState, useEffect } from "react";
import { ProjectScreen } from "../ProjectScreen";
import { useInView } from "react-intersection-observer";
import { StudiesScreen } from "../StudiesScreen";
import { NavLink } from "react-router-dom";

const squareVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: "spring", delay: 0.3, stiffness: 50 },
  },
  hidden: { opacity: 0, x: -100 },
};

export const StudiesPicker = (props) => {
  const [show, setShow] = useState(false);
  const [screenInfo, setScreenInfo] = useState([]);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const style = {
    style: { cursor: "pointer", width: "20vw" },
    animate: {},
    whileHover: { scale: 1.1 },
  };

  function showScreen(project) {
    setScreenInfo(project);
    setShow(true);
  }

  const projects = [
    {
      img: props.check ? language : languageWhite,
      path: "/language",
    },
    {
      img: props.check ? automation : automationWhite,
      path: "/automation",
    },
    {
      img: props.check ? network : networkWhite,
      path: "/network",
    },
    {
      img: props.check ? database : databaseWhite,
      path: "/database",
    },
    {
      img: props.check ? datacience : datacienceWhite,
      path: "/datascience",
    },
  ];

  function closeScreen() {
    setShow(false);
  }
  return (
    <div className="project-main">
      <div className="project-picker-main">
        {projects.map((project, index) => (
          <motion.div key={index}>
            <NavLink to={project.path}>
              <motion.img
                src={project.img}
                alt=""
                style={style.style}
                whileHover={style.whileHover}
                onTap={() => {
                  showScreen(project);
                }}
                className="picker"
                whileTap={{ scale: 1 }}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
              />
            </NavLink>
          </motion.div>
        ))}
        <AnimatePresence>
          {show ? (
            <StudiesScreen data={screenInfo} close={closeScreen} />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
