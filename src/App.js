import { useState } from "react";
import "./App.css";
import Page01 from "./pages/page01/Page01";
import { AnimatePresence } from "framer-motion";
import Page02 from "./pages/page02";

function App() {
  const [gameFinished, setGameFinished] = useState(true);

  return (
    <>
      <AnimatePresence>
        {gameFinished ? (
          <Page02 />
        ) : (
          <Page01
            gameFinished={() => {
              setTimeout(() => {
                setGameFinished(true);
              }, 1000);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
