import React, { useState } from "react";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";
 
const Toglle = () => {
  const [isDark, setIsDark] = useState(false);
 
  return (
    <ToggleButton isDark={isDark} onChange={() => setIsDark(prevIsDark => !prevIsDark)} />
  )
}