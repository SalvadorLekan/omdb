import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import axios from "axios";

axios.defaults.baseURL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
