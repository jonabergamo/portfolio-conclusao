import { useState } from "react";
import "./style.css";
import { useEffect } from "react";

export const CoolSwitch = (props) => {
  return (
    <div class="btn-container" ref={props.ref}>
      <label class="switch btn-color-mode-switch">
        <input
          id="color_mode"
          name="color_mode"
          type="checkbox"
          checked={props.checked}
          onChange={() => {
            props.handleChange(!props.checked);
          }}
        />
        <label
          class="btn-color-mode-switch-inner"
          data-off="Light"
          data-on="Dark"
          for="color_mode"
        ></label>
      </label>
    </div>
  );
};
