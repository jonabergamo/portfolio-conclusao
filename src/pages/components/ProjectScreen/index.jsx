import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { BsArrowBarLeft } from "react-icons/bs";
import "./styles.css";

export const ProjectScreen = (props) => {
  const screenInfo = props.data;

  return (
    <motion.div
      className="screen-project"
      exit={{ opacity: 0, x: -150 }}
      initial={{ opacity: 0, scale: 1, x: 150 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <button className="close" onClick={props.close}>
        <BsArrowBarLeft size={30} style={{ color: "red" }} />
      </button>
      <ReactPlayer url={screenInfo.video_url} loop playing light controls />
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
