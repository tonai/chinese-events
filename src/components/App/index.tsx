import { AppShell, Group, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "../../hooks/useI18n";

import Events from "../Events";
import LanguagePicker from "../LanguagePicker";

import styles from "./styles.module.css";

function App() {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [height, setHeight] = useState<number | undefined>(68);
  const { translate } = useI18n();

  useEffect(() => {
    setHeight(headerRef.current?.offsetHeight);
  }, []);

  return (
    <AppShell header={{ height: height as number }} padding="md">
      <AppShell.Header className={styles.header} ref={headerRef}>
        <Group justify="space-between">
          <Title order={1} size="h2">
            {translate("Chinese Festivals")}
          </Title>
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
