/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel Decorative"', 'Cinzel', 'serif'],
        royal: ['Cinzel', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        mantra: ['"Tiro Devanagari Sanskrit"', 'serif'],
      },
      colors: {
        krishna: {
          void: '#030712',
          midnight: '#060D24',
          navy: '#0B1536',
        },
        gold: {
          DEFAULT: '#D4AF37',
          glow: '#F59E0B',
          flute: '#FBBF24',
        },
        peacock: {
          emerald: '#0D9488',
          cyan: '#06B6D4',
          azure: '#2563EB',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      keyframes: {
        'marquee-drift': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'chakra-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'marquee-drift': 'marquee-drift 52s linear infinite',
        'chakra-spin': 'chakra-spin 60s linear infinite',
        'chakra-spin-fast': 'chakra-spin 14s linear infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
