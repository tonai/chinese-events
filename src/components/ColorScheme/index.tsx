import type { ReactElement } from "react";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

export default function ColorScheme(): ReactElement {
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  return (
    <ActionIcon
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      variant="default"
    >
      {!isDark && <img alt="Switch to dark mode" src={moon} />}
      {Boolean(isDark) && <img alt="Switch to light mode" src={sun} />}
    </ActionIcon>
  );
}
