import { createContext } from "react";
import { II18nContext } from "../types";

export const i18nContext = createContext<II18nContext>({
  formatDate: () => "",
  language: "en-US",
  languages: {},
  setLanguage: () => null,
  translate: () => "",
});
