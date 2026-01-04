import React, { useState } from "react";
import "./AccessibilityWidget.css";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);

  const increaseFont = () => {
    document.body.style.fontSize = "larger";
  };

  const decreaseFont = () => {
    document.body.style.fontSize = "smaller";
  };

  const toggleContrast = () => {
    document.body.classList.toggle("high-contrast");
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  const stopAnimations = () => {
    document.body.classList.toggle("stop-animations");
  };

  return (
    <div className="accessibility-widget">
      <button className="accessibility-toggle" onClick={() => setOpen(!open)}>
        ♿
      </button>

      {open && (
        <div className="accessibility-panel">
          <button onClick={increaseFont}>הגדל טקסט</button>
          <button onClick={decreaseFont}>הקטן טקסט</button>
          <button onClick={toggleContrast}>קונטרסט גבוה</button>
          <button onClick={toggleDarkMode}>מצב כהה</button>
          <button onClick={stopAnimations}>עצור אנימציות</button>
        </div>
      )}
    </div>
  );
}
