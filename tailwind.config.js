/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
      backdropBlur: {
        // Add custom backdrop blur utilities
        '10': '10px',
        '20': '20px',
        '30': '30px',
        // Add more values as needed
      },
    },
  },
  plugins: [
    // Register the custom backdrop blur utilities
    function ({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-10': {
          backdropFilter: 'blur(10px)',
        },
        '.backdrop-blur-20': {
          backdropFilter: 'blur(20px)',
        },
        '.backdrop-blur-30': {
          backdropFilter: 'blur(30px)',
        },
        // Add more classes as needed
      };

      addUtilities(newUtilities, {
        variants: ['responsive'],
      });
    },
  ],
}

