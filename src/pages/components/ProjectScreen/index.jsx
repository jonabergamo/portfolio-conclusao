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
      <motion.div
        className="player"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        exit={{ scaleY: 0, opacity: 0 }}
      >
        <ReactPlayer
          url={screenInfo.video_url}
          loop
          playing={true}
          light={screenInfo.img}
          controls={false}
          volume={0.5}
          muted={true}
          playsinline={true}
        />
      </motion.div>
      <motion.div
        className="infos"
        style={{ display: "flex", flexDirection: "column" }}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1>{screenInfo.title}</h1>
        <p>{screenInfo.sub}</p>
        {screenInfo.link !== false ? (
          <a
            href={screenInfo.link}
            target="_blank"
            ref={navGlith.ref}
            className="light"
            style={{ width: 150 }}
          >
            <div className="button">Testar Projeto</div>
          </a>
        ) : null}
        {screenInfo.git !== false ? (
          <a
            href={screenInfo.git}
            target="_blank"
            ref={navGlith.ref}
            className="light"
            style={{ width: 150 }}
          >
            <div className="button">Projeto Github</div>
          </a>
        ) : null}
        <p>Técnologias Utilizadas: {screenInfo.tec}</p>
      </motion.div>
    </motion.div>
  );
};
