module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border, 220 13% 91%))", // Added a fallback HSL value
        },
        input: "hsl(var(--input, 220 13% 80%))", // Fallback value for safety
        ring: "hsl(var(--ring, 220 13% 70%))",
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 0 0% 10%))",
        primary: {
          DEFAULT: "hsl(var(--primary, 240 100% 50%))",
          foreground: "hsl(var(--primary-foreground, 0 0% 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 300 100% 50%))",
          foreground: "hsl(var(--secondary-foreground, 0 0% 100%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0 100% 50%))",
          foreground: "hsl(var(--destructive-foreground, 0 0% 100%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 0 0% 60%))",
          foreground: "hsl(var(--muted-foreground, 0 0% 40%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 200 100% 50%))",
          foreground: "hsl(var(--accent-foreground, 0 0% 100%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0 0% 95%))",
          foreground: "hsl(var(--popover-foreground, 0 0% 20%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 90%))",
          foreground: "hsl(var(--card-foreground, 0 0% 10%))",
        },
        neon: {
          purple: "#b026ff",
        },
      },
      borderRadius: {
        lg: "var(--radius, 8px)",
        md: "calc(var(--radius, 8px) - 2px)",
        sm: "calc(var(--radius, 8px) - 4px)",
      },
    },
  },
}
