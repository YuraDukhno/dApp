import React, { useState } from "react";
import "./Button.css";

export default function Button({ text }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <button className={!disabled ? "button" : "button--disabled"}>
      Connect
    </button>
  );
}
