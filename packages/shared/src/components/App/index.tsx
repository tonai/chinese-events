import type { ReactElement } from "react";

import {
  AppShell,
  Group,
  MantineProvider,
  Title,
  createTheme,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "../../hooks/useI18n";
import { ColorScheme } from "../ColorScheme";
import { Events } from "../Events";
import { LanguagePicker } from "../LanguagePicker";

import styles from "./styles.module.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

interface IAppProps {
  logo: string;
}

export function App(props: IAppProps): ReactElement {
  const { logo } = props;
  const headerRef = useRef<HTMLHeadElement>(null);
  const [height, setHeight] = useState<number | undefined>(68);
  const { translate } = useI18n();

  useEffect(() => {
    setHeight(headerRef.current?.offsetHeight);
  }, []);

  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <AppShell header={{ height: height as number }} padding="md">
        <AppShell.Header ref={headerRef} className={styles.header}>
          <Group gap="xs" justify="space-between">
            <img alt="Logo Chinese Events" className={styles.icon} src={logo} />
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
    </MantineProvider>
  );
}
