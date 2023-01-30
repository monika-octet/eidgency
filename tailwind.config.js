/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/layout/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "18x": ["18px", "18px"],
        "20x": ["20px", "24px"],
        "22x": ["22px", "22px"],
        "24x": ["24px", "32px"],
        "27x": ["27px", "35px"],
        "32x": ["32px", "32px"],
        "34x": ["34px", "32px"],
        "37x": ["37px", "32px"],
        "44x": ["44px", "51px"],
        "52x": ["52px", "45px"],
        "60x": ["60px", "78px"],
        "64x": ["64px", "51px"],
        "80x": ["80px", "74px"],
        "108x": ["108px", "92px"],
        "158x": ["158px", "128px"],
        "166x": ["166px", "128px"],
      },
      boxShadow: {
        even: "0 0 0 2px #DDFF8D",
      },
      colors: {
        blue: "#232646",
        primary: "#DDFF8D",
      },
    },
    container: {
      center: true,
      padding: "12px",
      screens: {
        mobile: "640px",
        tablet: "960px",
        desktop: "1380px",
      },
    },
  },
  plugins: [],
}
