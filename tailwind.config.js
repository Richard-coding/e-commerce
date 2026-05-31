/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        secondary: "#3F2B21",
        accent: "#FFD700",
        background: "#FFF7ED",
        foreground: "#1F1F1F",
        success: "#16A34A",
        destructive: "#DC2626",
        muted: "#A1A1AA",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "4xl": "32px",
        full: "9999px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
