module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
       animation: {
        zoomIn: 'zoomIn 1s infinite',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' }, 
          '100%': { transform: 'scale(1.05)' },
        },
      },
      colors: {
        primary: '#0C5C3A',
        secondary: '#0C5C3A',
        accent: '#FACC15',
        background: '#0F172A',
        foreground: '#E5E7EB',
        danger: '#EF4444',
        success: '#22C55E', 
        warning: '#F59E0B',
        info:'#016B5C',
        para:'#616161'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Noto Sans', 'sans-serif'],
        mono: ['Noto Sans', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '100': '25rem',
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        customHover: '0 16px 32px 0 #09C22440',
      },
    },
  },
  plugins: [],
}

