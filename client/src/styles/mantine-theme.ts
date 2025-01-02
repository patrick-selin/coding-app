// styles/mantine-theme.ts
import { MantineThemeOverride } from "@mantine/core";

const mantineTheme: MantineThemeOverride = {
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

  //   components: {
  //     Title: {
  //       styles: (theme) => ({
  //         root: {
  //           fontFamily: theme.headings.fontFamily, // Apply headings.fontFamily to Title
  //         },
  //       }),
  //     },
  //   },
  colors: {
    // dark: [
    //   "#d5d7e0",
    //   "#acaebf",
    //   "#8c8fa3",
    //   "#666980",
    //   "#4d4f66",
    //   "#34354a",
    //   "#2b2c3d",
    //   //   "#1d1e30", // dark theme body bg color
    //   "#292C43", // dark theme body bg color
    //   "#0c0d21",
    //   "#01010a",
    // ],
  },

  // other colors: orange, green/teal, pink
};

export default mantineTheme;
