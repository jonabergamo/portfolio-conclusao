import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { BsArrowBarLeft } from "react-icons/bs";
import "./styles.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Language from "../../routes/language";
import Network from "../../routes/network";
import Automation from "../../routes/automation";
import DataBase from "../../routes/database";
import DataCience from "../../routes/datacience";
import { useGlitch } from "react-powerglitch";

export const StudiesScreen = (props) => {
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
      id="screen-test"
      className="screen-studie"
      exit={{ opacity: 0, x: -150 }}
      initial={{ opacity: 0, scale: 1, x: 150 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <NavLink to="/">
        <motion.button
          className="studies-close"
          onTap={props.close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ opacity: 0 }}
          ref={navGlith.ref}
        >
          <BsArrowBarLeft size={30} style={{ color: "red" }} />
        </motion.button>
      </NavLink>
      <div className="studie-routes">
        <img src={screenInfo.img} alt="" style={{ width: "45vw" }} />
        <Routes>
          <Route exacth path="/" element={<></>} />
          <Route path="/language" element={<Language />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/network" element={<Network />} />
          <Route path="/database" element={<DataBase />} />
          <Route path="/datascience" element={<DataCience />} />
        </Routes>
        <div style={{ height: "50px" }}></div>
      </div>
    </motion.div>
  );
};
