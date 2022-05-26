/* eslint-disable quotes */
/* eslint-disable quote-props */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
      },
      screens: {
        'xlalt': "1200px",
        '2xlalt': "1400px",
      },
    },
  },
  plugins: [],
};
