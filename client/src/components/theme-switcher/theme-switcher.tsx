// components/theme/switcher/theme-switcher.
import { useMantineColorScheme, Button, Group } from "@mantine/core";

function ThemeSwitcher() {
  const { setColorScheme } = useMantineColorScheme();
  return (
    <div>
      <Group>
        <Button onClick={() => setColorScheme("light")}>Light</Button>
        <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        <Button onClick={() => setColorScheme("auto")}>Auto</Button>
      </Group>
    </div>
  );
}

export default ThemeSwitcher;
