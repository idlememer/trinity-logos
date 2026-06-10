import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Israel-flag-inspired blue family — light, clean, premium
        navy: {
          950: "#001033",
          900: "#001C66",
          800: "#002C8C",
          700: "#0038B8",
          600: "#0046DB",
          500: "#1F5BE6",
          400: "#5B82EE",
          300: "#8FA9F3",
          200: "#C5D1F8",
          100: "#E6ECFB",
        },
        israel: {
          DEFAULT: "#0038B8",
          dark: "#001C66",
          light: "#E6ECFB",
        },
        flame: {
          900: "#7A2E00",
          700: "#C95800",
          600: "#E66A00",
          500: "#FF7A00",
          400: "#FF924D",
          300: "#FFB082",
          200: "#FFD2B8",
          100: "#FFE8D9",
        },
        ink: {
          DEFAULT: "#0B1F3A",
          soft: "#1A2A47",
        },
        mist: {
          50: "#FFFFFF",
          100: "#F7F9FE",
          200: "#EEF2FB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw + 1rem, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(29, 91, 170, 0.45)",
        "glow-orange": "0 0 60px -10px rgba(255, 122, 0, 0.55)",
        soft: "0 30px 60px -30px rgba(11, 31, 58, 0.4)",
        card: "0 12px 40px -12px rgba(11, 31, 58, 0.35)",
        ring: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(11,31,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(29,91,170,0.35), transparent 70%)",
        "orange-fade":
          "radial-gradient(60% 60% at 100% 0%, rgba(255,122,0,0.18), transparent 70%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
