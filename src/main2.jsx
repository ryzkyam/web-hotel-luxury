import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Dashboard from "./pages/Dasboard";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
