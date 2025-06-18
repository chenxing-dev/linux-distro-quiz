import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from "@/components/ErrorBoundary";
import { LocaleProvider } from "@/context/LocaleContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </ErrorBoundary>
    </HashRouter>
  </StrictMode>
);
