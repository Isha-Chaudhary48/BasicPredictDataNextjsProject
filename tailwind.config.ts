import type { Config } from "tailwindcss";
// @ts-expect-error: No type definitions for daisyui
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
    "./src/**/*.{js,ts,jsx,tsx}", // If using /src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Optional
  },
};

export default config;
