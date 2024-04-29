import "@mantine/core/styles.css";
import { App, I18nProvider } from "chinese-events-shared";
import "chinese-events-shared/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <I18nProvider>
        <App logo="/icon.svg" />
      </I18nProvider>
    </StrictMode>,
  );
}
