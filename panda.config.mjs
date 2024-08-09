import { defineConfig } from "@pandacss/dev";

// https://panda-css.com/docs/guides/minimal-setup
const minimalSetup = {
  // Remove the default design tokens
  presets: [],
  // Remove default utilities
  eject: true,
  utilities: {
    color: {
      values: "colors",
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: "#ff0000" },
      },
    },
  },
};

const useMinimalSetup = false;

export default defineConfig({
  // Whether to use css reset
  preflight: false,
  minify: false,
  lightningcss: true,

  // Whether to hash the classnames
  // This option will impact the compression rate of the css
  hash: false,

  // Whether to use the minimal setup
  ...(useMinimalSetup ? minimalSetup : {}),

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
});
