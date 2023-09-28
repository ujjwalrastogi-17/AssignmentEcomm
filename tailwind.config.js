/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans"], // 'sans' is optional and specifies a fallback font
      },
      backgroundImage: {
        musthvbig:
          "url('/home/anvesha/Documents/Anvesha/VscODE/React/Assessment_EComm/vite-project/src/assets/images/MustHaveTab.png')",
        musthvsmall:
          "url('/home/anvesha/Documents/Anvesha/VscODE/React/Assessment_EComm/vite-project/src/assets/images/MustHave1.png')",
      },
      backgroundColor: {
        "card-5": "var(--background-color-card-5, #F7DDD0)",
        footsearch: "var(--background-color-send-email-frm, #7296AB)",
        footer: " var(--background-color-footer, #D1E2EB)",
      },
    },
  },
  variants: {
    display: ["abc-hover"],
  },
  plugins: [],
};
