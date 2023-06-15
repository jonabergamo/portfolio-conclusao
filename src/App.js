import { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Page01 from "./pages/Page01";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return <AnimatePresence>{load ? null : <Page01 />}</AnimatePresence>;
}

export default App;
