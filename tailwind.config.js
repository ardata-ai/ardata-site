/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg-main": "#090D16",
        "bg-soft": "#0E1524",
        "bg-card": "#131B2E",
        "text-main": "#F9FAFB",
        "text-muted": "#94A3B8",
        "brand-cyan": "#00C2FF",
        ink: "#041018",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.35)",
        lift: "0 0 28px rgba(0, 194, 255, 0.22)",
        glow: "0 0 20px rgba(0, 194, 255, 0.15)",
      },
    },
  },
};
