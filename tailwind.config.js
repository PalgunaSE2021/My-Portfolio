module.exports = {
  prefix: "pf-",
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      padding: {
        "8-px": "8px",
        "24-px": "24px",
        "90-px": "90px",
        "200-px": "200px",
      },
      margin: {
        "24-px": "24px",
        "48-px": "48px",
      },
      borderRadius: {
        "8-px": "8px",
      },
    },
  },
  plugins: [],
};
