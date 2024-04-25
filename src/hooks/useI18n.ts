import { useContext } from "react";

import { i18nContext } from "../contexts/i18n";

export function useI18n() {
  return useContext(i18nContext);
}
