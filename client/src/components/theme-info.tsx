import { useMantineTheme, Text } from "@mantine/core";

function ThemeInfo() {
  const theme = useMantineTheme();

  return (
    <div>
      {/* Light Theme */}
      <Text>Huu</Text> 
      <p>hello</p>
      <div>
        <Text size="md">Styled with Mantine</Text>
      </div>
      <div
        style={{
          backgroundColor: theme.colors.gray[0],
          color: theme.colors.gray[7],
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <p>huu</p>
        <p>Light Theme</p>
        <p>Background: {theme.colors.gray[0]}</p>
        <p>Text: {theme.colors.gray[7]}</p>
      </div>

      {/* Dark Theme */}
      <div
        style={{
          backgroundColor: theme.colors.dark[7],
          color: theme.colors.dark[0],
          padding: "1rem",
        }}
      >
        <p>Dark Theme</p>
        <Text>Huu</Text>
        <p>Background: {theme.colors.dark[7]}</p>
        <p>Text: {theme.colors.dark[0]}</p>
      </div>
    </div>
  );
}

export default ThemeInfo;
