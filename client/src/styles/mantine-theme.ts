// styles/mantine-theme.ts
import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Public Sans, sans-serif",

  primaryColor: "blue",
  headings: {
    fontFamily: "Public Sans, sans-serif",
    sizes: {
      h1: {
        fontSize: "calc(2.125rem * var(--mantine-scale))",
        lineHeight: "1.3",
      },
      h2: {
        fontSize: "calc(1.625rem * var(--mantine-scale))",
        lineHeight: "1.35",
      },
      h3: {
        fontSize: "calc(1.375rem * var(--mantine-scale))",
        lineHeight: "1.4",
      },
      h4: {
        fontSize: "calc(1.125rem * var(--mantine-scale))",
        lineHeight: "1.45",
      },
      h5: {
        fontSize: "calc(1rem * var(--mantine-scale))",
        lineHeight: "1.5",
      },
      h6: {
        fontSize: "calc(0.875rem * var(--mantine-scale))",
        lineHeight: "1.5",
      },
    },
  },
  colors: {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424", //   "#1d1e30", // dark theme body bg color
      "#1f1f1f",
      "#141414",
    ],
  },

  // other colors: orange, green/teal, pink
});

export default theme;
