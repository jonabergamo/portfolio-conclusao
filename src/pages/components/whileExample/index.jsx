import React, { useState, useEffect } from "react";
import "./style.css";

export default function WhileExample() {
  const [condition, setCondition] = useState(true);
  const [ligada, setLigada] = useState(false);

  function toggleCondition() {
    setCondition(!condition);
  }

  useEffect(() => {
      const intervalId = setInterval(() => {
        setLigada((ligada) => !ligada);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };

  }, []);

  return (
    <div className="while-example">
      <div className="while-container">
        <h3>While</h3>
        <div
          className="condition"
          onClick={toggleCondition}
          style={condition ? { color: "green" } : { color: "red" }}
        >
          {condition ? "True" : "False"}
        </div>
      </div>
      <div
        className={
          condition ? (ligada ? "light-off" : "light-on") : "light-off"
        }
      ></div>
    </div>
  );
}
