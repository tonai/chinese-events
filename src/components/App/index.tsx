import type { ReactElement } from "react";

import { AppShell, Group, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "../../hooks/useI18n";
import ColorScheme from "../ColorScheme";
import Events from "../Events";
import LanguagePicker from "../LanguagePicker";

import styles from "./styles.module.css";

function App(): ReactElement {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [height, setHeight] = useState<number | undefined>(68);
  const { translate } = useI18n();

  useEffect(() => {
    setHeight(headerRef.current?.offsetHeight);
  }, []);

  return (
    <AppShell header={{ height: height as number }} padding="md">
      <AppShell.Header ref={headerRef} className={styles.header}>
        <Group gap="xs" justify="space-between">
          <img
            alt="Logo Chinese Events"
            className={styles.icon}
            src="/chinese-events/icon.svg"
          />
          <Title className={styles.title} order={1} size="h2">
            {translate("Chinese Festivals")}
          </Title>
          <ColorScheme />
          <LanguagePicker />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Events />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
