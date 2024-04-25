import { ReactNode, useCallback, useEffect, useMemo } from "react";

import { i18nContext } from "../../contexts/i18n";
import { useStorage } from "../../hooks/useStorage";
import { IGregorianDate, ILanguages, ITranslations } from "../../types";

export const languages: ILanguages = {
  "en-US": { label: "🇺🇸 English" },
  "fr-FR": {
    label: "🇫🇷 Français",
    translations: () => import("../../translations/fr-FR.json"),
  },
};

interface II18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider(props: II18nProviderProps) {
  const { children } = props;
  const [language, setLanguage] = useStorage({
    defaultValue: "en-US",
    key: "language",
  });
  const [translations, setTranslations] = useStorage<ITranslations | null>({
    defaultValue: null,
    key: "translations",
  });

  const intl = useMemo(
    () => new Intl.DateTimeFormat(language, { dateStyle: "full" }),
    [language]
  );

  const formatDate = useCallback(
    (gDate: IGregorianDate) => {
      return intl.format(new Date(gDate.year, gDate.month - 1, gDate.day));
    },
    [intl]
  );

  const translate = useCallback(
    (text: string, substitutions: Record<string, string | number> = {}) => {
      let translation =
        translations && text in translations
          ? translations[text as keyof typeof translations]
          : text;
      for (const [key, value] of Object.entries(substitutions)) {
        translation = translation.replaceAll(`$${key}`, String(value));
      }
      return translation;
    },
    [translations]
  );

  const loadTranslations = useCallback(
    async (language: string) => {
      if (language in languages) {
        const { translations } = languages[language as keyof typeof languages];
        if (translations) {
          const result = await translations();
          return setTranslations(result.default);
        }
      }
      setTranslations({});
    },
    [setTranslations]
  );

  const handleLanguageChange = useCallback(
    async (language: string) => {
      setLanguage(language);
      loadTranslations(language);
    },
    [loadTranslations, setLanguage]
  );

  const context = useMemo(
    () => ({
      formatDate,
      language,
      languages,
      translate,
      setLanguage: handleLanguageChange,
    }),
    [formatDate, handleLanguageChange, language, translate]
  );

  useEffect(() => {
    loadTranslations(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <i18nContext.Provider value={context}>{children}</i18nContext.Provider>
  );
}
