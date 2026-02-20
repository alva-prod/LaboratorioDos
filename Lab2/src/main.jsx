import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomHook from "./components/CustomHook.jsx";
import CustomHook2 from "./components/CustomHook2.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ display: "flex", height: "100vh", width: "100vw", margin: 0, padding: 0, overflow: "hidden", boxSizing: "border-box", position: "fixed", top: 0, left: 0 }}>
      <div style={{ flex: 1, overflow: "auto", boxSizing: "border-box", minWidth: 0 }}>
        <CustomHook/>
      </div>
      <div style={{ width: "2px", background: "#ccc", flexShrink: 0 }} />
      <div style={{ flex: 1, overflow: "auto", boxSizing: "border-box", minWidth: 0 }}>
        <CustomHook2/>
      </div>
    </div>
  </StrictMode>,
);