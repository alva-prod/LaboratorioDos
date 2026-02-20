// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CustomHook from "./components/CustomHook.jsx";
import CustomHook2 from "./components/CustomHook2.jsx";
import CustomHook3 from "./components/CustomHook3.jsx";

const panelStyle = {
  flex: 1,
  overflow: "auto",
  boxSizing: "border-box",
  minWidth: 0,
  backgroundColor: "#1a1a2e",
  color: "#e0e0e0",
  padding: "20px",
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      boxSizing: "border-box",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "#1a1a2e",
    }}>
      <div style={panelStyle}>
        <CustomHook />
      </div>
      <div style={{ width: "2px", background: "#444466", flexShrink: 0 }} />
      <div style={panelStyle}>
        <CustomHook2 />
      </div>
      <div style={{ width: "2px", background: "#444466", flexShrink: 0 }} />
      <div style={panelStyle}>
        <CustomHook3 />
      </div>
    </div>
  </StrictMode>,
);