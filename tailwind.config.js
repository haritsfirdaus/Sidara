/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Poppins", "Inter", "sans-serif"],
      inter: "Inter",
      default: "Poppins",
      poppins: "Poppins",
      darkerGrotesque: ['Darker Grotesque', 'Poppins', 'Inter'],
      roboto: "Roboto",
      PlusJakartaSans: ['Plus Jakarta Sans', 'Poppins', 'san-serif']
  },
    container :{
      center: true,
            padding: {
                DEFAULT: "24px",
                md: "30px",
            //     lg: "3.25rem",
                xl: "120px",
            },
    },
    screens: {
      'sm' : '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors : {
        "emas" : "#facc14",
        "silver" : "#F5F7FA",
        
        "grey-blue" : "#ABBED1",
        "sky" : "#978D58", 
         
        "primary" : "#0B5269",
        
        "secondary" : "#03051E",
        
        "third" : "#ff5b62"
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}