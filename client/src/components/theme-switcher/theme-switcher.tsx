// components/theme/switcher/theme-switcher.
import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { SunIcon } from "@heroicons/react/24/outline";

function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <ActionIcon
      variant="outline"
      onClick={() => toggleColorScheme()}
      title="Toggle theme"
      radius="xl"
      size="lg"
      style={{
        borderColor: isDark ? theme.colors.dark[4] : theme.colors.gray[4],
      }}
    >
      <SunIcon
        className="h-6 w-6 transition-transform duration-300"
        style={{
          color: isDark ? theme.colors.dark[0] : theme.colors.gray[7],
        }}
      />
    </ActionIcon>
  );
}

export default ThemeSwitcher;
