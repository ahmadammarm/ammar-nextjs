import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        hand: ["var(--font-hand)", "cursive"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "brand-blue": "#007AFF",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(0,0,0,1)",
        "neo-hover": "6px 6px 0px 0px rgba(0,0,0,1)",
        "neo-dark": "4px 4px 0px 0px rgba(255,255,255,1)",
        "neo-hover-dark": "6px 6px 0px 0px rgba(255,255,255,1)",
        "neo-active": "2px 2px 0px 0px rgba(0,0,0,1)",
        "neo-active-dark": "2px 2px 0px 0px rgba(255,255,255,1)",
        "neo-lg": "8px 8px 0px 0px rgba(0,0,0,1)",
        "neo-lg-dark": "8px 8px 0px 0px rgba(255,255,255,1)",
        "neo-md": "6px 6px 0px 0px rgba(0,0,0,1)",
        "neo-md-dark": "6px 6px 0px 0px rgba(255,255,255,1)",
        "neo-xs": "1px 1px 0px 0px rgba(0,0,0,1)",
        "neo-xs-dark": "1px 1px 0px 0px rgba(255,255,255,1)",
        "neo-sm": "2px 2px 0px 0px rgba(0,0,0,1)",
        "neo-sm-dark": "2px 2px 0px 0px rgba(255,255,255,1)",
        "neo-sm-hover": "4px 4px 0px 0px rgba(0,0,0,1)",
        "neo-sm-hover-dark": "4px 4px 0px 0px rgba(255,255,255,1)",
        "neo-sm-active": "1px 1px 0px 0px rgba(0,0,0,1)",
        "neo-sm-active-dark": "1px 1px 0px 0px rgba(255,255,255,1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config