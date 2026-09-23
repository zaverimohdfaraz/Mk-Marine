import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A47",
          deep: "#081C30",
        },
        ocean: {
          DEFAULT: "#1E5C97",
          hover: "#164A7C",
          light: "#E8F1F8",
        },
        gold: {
          DEFAULT: "#B8912F",
          soft: "#F3E9D2",
        },
        ink: {
          DEFAULT: "#16232F",
          muted: "#5C6B78",
          faint: "#8C99A4",
        },
        border: {
          DEFAULT: "#DCE3E9",
          soft: "#EAEFF3",
        },
        offwhite: "#FAF8F3",
        success: { DEFAULT: "#2E7D4F", bg: "#E9F5EE" },
        warn: { DEFAULT: "#9A6B12", bg: "#FBF1DD" },
        danger: { DEFAULT: "#B23A3A", bg: "#FBEBEB" },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,42,71,0.06), 0 4px 16px rgba(15,42,71,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
