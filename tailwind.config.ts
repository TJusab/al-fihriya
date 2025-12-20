import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lora": ["var(--lora)", "serif"],
        "amiri": ["var(--amiri)", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Desert sand and warm beiges
        primary: {
          DEFAULT: "#E5D4B8", // Warm desert sand
          admin: "#8B6B47", // Rich desert brown
        },
        // Turquoise/Teal (mosque tile colors)
        green: {
          DEFAULT: "#1B998B", // Vibrant turquoise
          100: "#E6F7F5", // Very light turquoise
          400: "#45B5A8", // Medium turquoise
          500: "#20B2AA", // Light sea green
          800: "#0D7C72", // Deep teal
        },
        // Desert rose and terracotta
        red: {
          DEFAULT: "#D4A5A5", // Soft desert rose
          400: "#E8B4A8", // Light terracotta
          500: "#C97B63", // Burnt terracotta
          800: "#B85C4F", // Deep terracotta
        },
        // Sky blue accent
        blue: {
          100: "#5AB9EA", // Desert sky blue
        },
        // Light warm neutrals
        light: {
          100: "#F5EFE7", // Cream
          200: "#F0E5D8", // Light sand
          300: "#FAF7F2", // Off-white
          400: "#EDE6DC", // Pale beige
          500: "#C4B5A0", // Medium sand
          600: "#FBF8F3", // Almost white
          700: "#E8DFD0", // Light tan
          800: "#F7F3EE", // Warm white
        },
        // Dark warm neutrals
        dark: {
          100: "#3D3227", // Dark brown
          200: "#5C4A3A", // Warm dark brown
          300: "#4A3F35", // Deep earth
          400: "#3E352B", // Rich brown
          500: "#2B241F", // Almost black brown
          600: "#6B5647", // Medium brown
          700: "#7D6B59", // Light brown
          800: "#352D25", // Very dark brown
        },
        // Neutral grays with warm tones
        gray: {
          100: "#D4CFC5", // Warm light gray
        },
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        pattern: "url('/images/concrete-surface-background.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;