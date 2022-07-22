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
        'ssm': "480px",
        'xlalt': "1200px",
        'sxlalt': "1348px",
        '2xlalt': "1400px",
      },
    },
  },
  plugins: [],
};
