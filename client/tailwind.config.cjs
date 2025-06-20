module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a3d62",     // Deep Navy Blue from header/footer
        secondary: "#ff7043",   // Bright Coral (e.g., “Become a Buddy” button)
        accent: "#ffc107",      // Soft Yellow-Orange (used in illustrations)
        light: "#fff5ec",       // Background beige
        dark: "#1f2d3d",        // Deep dark blue-gray for texts
        neutral: "#f8f8f8",     // Light neutral background
        textPrimary: "#2b2d42", // Main text color
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
