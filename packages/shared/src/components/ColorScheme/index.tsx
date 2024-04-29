import type { ReactElement } from "react";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

import Moon from "../../assets/moon.svg?react";
import Sun from "../../assets/sun.svg?react";

export function ColorScheme(): ReactElement {
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  return (
    <ActionIcon
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      variant="default"
    >
      {!isDark && <Moon />}
      {Boolean(isDark) && <Sun />}
    </ActionIcon>
  );
}
