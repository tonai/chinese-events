import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index.tsx";
import I18nProvider from "./components/I18nProvider/index.tsx";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <I18nProvider>
        <App />
      </I18nProvider>
    </MantineProvider>
  </React.StrictMode>
);
