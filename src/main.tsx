import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App/index.tsx";
import I18nProvider from "./components/I18nProvider/index.tsx";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <MantineProvider theme={theme}>
        <I18nProvider>
          <App />
        </I18nProvider>
      </MantineProvider>
    </StrictMode>,
  );
}
