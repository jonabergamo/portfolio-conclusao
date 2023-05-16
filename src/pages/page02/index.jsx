import React from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Page02() {
  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main></main>
      <aside></aside>
      <div className="background-page02"></div>
    </motion.div>
  );
}
