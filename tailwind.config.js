/* eslint-disable quotes */
/* eslint-disable quote-props */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundPosition: {
        full: "100%",
      },
      backgroundImage: {
        discover: "url('/public/images/hero-headphones.jpg')",
      },
      colors: {
        primary: "#141414",
      },
      screens: {
        ssm: "480px",
        "2md": "960px",
        xlalt: "1200px",
        sxlalt: "1348px",
        "2xlalt": "1400px",
        "3xlalt": "1600px",
      },
    },
  },
  plugins: [],
};
