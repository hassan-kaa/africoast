import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        custom: "9/16",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(180deg, rgba(21, 58, 91, 0) 0%, rgba(21, 58, 91, 0) 33.33%, rgba(21, 58, 91, 0.1) 66.67%, rgba(21, 58, 91, 0.8) 100%)",
        "custom-gradient-2":
          "linear-gradient(to left, rgb(228, 218, 209) 0%, rgb(228, 218, 209,0.8) 66%,  rgba(21, 58, 91, 0) 100%)",
        "custom-gradient-3":
          "linear-gradient(to left, rgb(212, 212, 214) 0%, rgb(212, 212, 214,0.8) 66%,  rgba(21, 58, 91, 0) 100%)",
        "custom-gradient-4":
          "linear-gradient(to left, rgb(198, 220, 212) 0%, rgb(198, 220, 212,0.8) 66%,  rgba(21, 58, 91, 0) 100%)",
      }),
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwind-scrollbar")],
};
export default config;
