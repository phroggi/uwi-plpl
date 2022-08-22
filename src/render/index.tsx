import React from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./router";

import "./index.css";

const root = createRoot(document.getElementById("app") as HTMLDivElement);

const render = async () => {
  root.render(<AppRouter />);
};

render();
