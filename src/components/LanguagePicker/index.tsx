import {
  Button,
  Combobox,
  useCombobox,
} from "@mantine/core";

import { useI18n } from "../../hooks/useI18n";

import styles from "./styles.module.css";

export default function LanguagePicker() {
  const { language, languages, setLanguage } = useI18n();
  const combobox = useCombobox();

  function handleOptionSubmit(option: string) {
    setLanguage(option);
    combobox.closeDropdown();
  }

  return (
    <Combobox onOptionSubmit={handleOptionSubmit} store={combobox} width="max-content">
      <Combobox.Target>
        <Button
          onClick={() => combobox.toggleDropdown()}
          size="xs"
          variant="subtle"
        >
          {languages[language as keyof typeof languages].label}
        </Button>
      </Combobox.Target>
      <Combobox.Dropdown className={styles.dropdown}>
        <Combobox.Options>
          {Object.entries(languages).map(([key, value]) => (
            <Combobox.Option value={key} key={key}>
              {value.label}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
