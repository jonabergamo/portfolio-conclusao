import { useEffect, useState } from "react";
import "./App.css";
import Page01 from "./pages/page01/Page01";
import { AnimatePresence } from "framer-motion";
import Page02 from "./pages/page02";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return <AnimatePresence>{load ? null : <Page02 />}</AnimatePresence>;
}

export default App;
