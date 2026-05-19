/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11100d",
        night: "#17130d",
        ivory: "#fffaf0",
        pearl: "#f8efe1",
        champagne: "#d6a84a",
        antique: "#b8892d",
        emerald: "#0f513f",
        wine: "#7a1d2f",
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(17, 16, 13, 0.16)",
        glow: "0 18px 45px rgba(214, 168, 74, 0.25)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "soft-float": "soft-float 6s ease-in-out infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
