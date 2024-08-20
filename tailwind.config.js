const customColors = {
  "about-text-color": "#99abc5",
  "card-hover": "#2e3f5b",
  "page-bg": "#0f172a",
};

module.exports = {
  prefix: "pf-",
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        ...customColors,
      },
      fontSize: {
        "18-px": "18px",
        "24-px": "24px",
      },
      padding: {
        "4-px": "4px",
        "8-px": "8px",
        "16-px": "16px",
        "24-px": "24px",
        "48-px": "48px",

        "90-px": "90px",
        "200-px": "200px",
      },
      margin: {
        "4-px": "4px",
        "8-px": "8px",
        "16-px": "16px",
        "24-px": "24px",
        "36-px": "36px",

        "48-px": "48px",
      },
      borderRadius: {
        "8-px": "8px",
        "12-px": "12px",
      },
      boxShadow: {
        "project-card-shadow": "0px 0px 4px 2px #506486",
      },
    },
  },
  plugins: [],
};
