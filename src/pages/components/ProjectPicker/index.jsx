import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  calculadora,
  calculadoraWhite,
  gerenciador,
  gerenciadorWhite,
  img1,
  jogoEspaco,
  jogoEspacoWhite,
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

const squareVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: "spring", delay: 0.3, stiffness: 50 },
  },
  hidden: { opacity: 0, x: -100 },
};

export const ProjectPicker = (props) => {
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
      img: props.check ? smartCode : smartCodeWhite,
      video_url: "https://www.youtube.com/watch?v=mODBNPbVLpQ&feature=youtu.be",
      title: "Smart-Code",
      sub: "Esse foi meu primeiro grande projeto, consiste em um site onde você pode programar dentro dele, similar a uma IDE. Ele possui função de salvamento automatico e dowload de saves.",
      link: "https://smart-code-senai.netlify.app/",
      tec: "JavaScript Vanilla, HTML, CSS",
    },
    {
      img: props.check ? gerenciador : gerenciadorWhite,
      video_url: "https://www.youtube.com/watch?v=-3XL7kxLb2M",
      title: "Gerenciamento de Cartões",
      sub: "Esse projeto foi feito usando React.Js, foi um estudo do flamework e da biblioteca framer-motion. Consiste em um sistema que permite que você crie e armazene cartões personalizados.",
      link: "https://gerenciamento-cartoes.netlify.app",
      tec: "React.js, framer-motion",
    },
    {
      img: props.check ? portfolio : portfolioWhite,
      video_url: "https://www.youtube.com/watch?v=orrun-jwY-Y",
      title: "Portfólio Web",
      sub: "Primeiro projeto realizado em sala de aula, consistia em um portfólio web.",
      link: "https://jonabergamo.netlify.app/",
      tec: "JavaScript Vanilla, HTML, CSS",
    },
    {
      img: props.check ? jogoEspaco : jogoEspacoWhite,
      video_url: "https://youtu.be/VVtA4Dsq9as",
      title: "Jogo de Espaço Sideral",
      sub: "Durante meus estudos de Java e POO, criei esse jogo divertido.",
      link: false,
      tec: "Java, JFrame",
    },
    {
      img: props.check ? paginaCaptura : paginaCapturaWhite,
      video_url: "https://youtu.be/CLtmCFphzHM",
      title: "Pagina de Captura",
      sub: "Meu primeiro projeto utilizando um banco de dados não relacional em uma situação real.",
      link: false,
      tec: "React.js, Firebase/firestore",
    },
    {
      img: props.check ? calculadora : calculadoraWhite,
      video_url: "https://youtu.be/0JhTLRziZQY",
      title: "Calculadora INSS",
      sub: "Projeto simples de uma calculadora de INSS com interface amigavel.",
      link: "https://calculadora-inss.netlify.app",
      tec: "JavaScript Vanilla, HTML, CSS",
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
            <motion.img
              src={project.img}
              className="picker"
              alt=""
              style={style.style}
              whileHover={style.whileHover}
              onTap={() => {
                showScreen(project);
              }}
              whileTap={{ scale: 1 }}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariants}
            />
          </motion.div>
        ))}
        <AnimatePresence>
          {show ? (
            <ProjectScreen data={screenInfo} close={closeScreen} />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
