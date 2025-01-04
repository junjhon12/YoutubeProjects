import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        SoftOrange: 'hsl(35, 77%, 62%)',
        SoftRed: 'hsl(5, 85%, 63%)',
        OffWhite: 'hsl(36, 100%, 99%)',
        Grayishblue: 'hsl(233, 8%, 79%)',
        Darkgrayishblue: 'hsl(236, 13%, 42%)',
        Verydarkblue: 'hsl(240, 100%, 5%)',
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
