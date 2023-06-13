import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { BsArrowBarLeft } from "react-icons/bs";
import "./styles.css";
import { useGlitch } from "react-powerglitch";

export const ProjectScreen = (props) => {
  const screenInfo = props.data;

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
      velocity: 10,
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
      className="screen-project"
      exit={{ opacity: 0, x: -150 }}
      initial={{ opacity: 0, scale: 1, x: 150 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <motion.button
        className="projects-close"
        onClick={props.close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={navGlith.ref}
      >
        <BsArrowBarLeft size={30} style={{ color: "red" }} />
      </motion.button>
      <div className="player">
        <ReactPlayer url={screenInfo.video_url} loop playing light controls />
      </div>
      <div
        className="infos"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1>{screenInfo.title}</h1>
        <p>{screenInfo.sub}</p>
        {props.link !== false ? (
          <a href={screenInfo.link} target="_blank">
            <div className="button">Testar Projeto</div>
          </a>
        ) : null}
        <p>Técnologias Utilizadas: {screenInfo.tec}</p>
      </div>
    </motion.div>
  );
};
