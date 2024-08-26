import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import "./main.css";
import ScrollIntoViewProvider from "./components/context/ScrollIntoView.tsx";

createRoot(document.getElementById("root")!).render(
  <ScrollIntoViewProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ScrollIntoViewProvider>,
);
