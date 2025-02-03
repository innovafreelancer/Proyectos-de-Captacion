import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores para el modo claro
        light: {
          primary: '#DFDFDF', // Fondo claro
          secondary: '#f3f4f6', // Fondo secundario
          text: '#1f2937', // Texto oscuro
          accent: '#3b82f6', // Color de acento (azul)
        },
        // Colores para el modo oscuro
        dark: {
          primary: '#1f2937', // Fondo oscuro
          secondary: '#374151', // Fondo secundario
          text: '#f3f4f6', // Texto claro
          accent: '#60a5fa', // Color de acento (azul claro)
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
