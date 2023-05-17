/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: "1200ms",
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      animation: {
        projectEnter: "projectEnter 0.5s ease-in 1",
      },
      keyframes: {
        projectEnter: {
          "0%": {
            transform: "translateY(-30%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0",
          },

          "100%": {
            transform: "translateY(0%)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
      },
      boxShadow: {
        outer: "2px 2px 6px 1px #0f172abe",
      },
      colors: {
        textDrk: "#1e293b",
        textMed: "#484943",
        textLit: "#7C7D6D",
        fillLitSolid2: "#F3F4EF",
        fillLitSolid1: "#FDFCFB",
        fillLit: "#BFBAB7",
        fillDrk: "#1e293b",
        fillMed: "#334155",
        fillDrkLit: "#64748b",

        darkBackgroundOpacity: "#c8cabc94",
        button: "#7C7D6D",
        buttonHover: "#96988A",
        buttonActive: "#545750",
        accent: "#d4a99c",
        accentHover: "#C99383",
        accentActive: "#dfbeb5",
        accentOpacity: "#dfbeb55e",
        shadow: "#1e293b",
      },
    },
  },

  plugins: [],
};
