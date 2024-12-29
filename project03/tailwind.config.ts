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
        blue: 'hsl(223, 87%, 63%)',
        paleBlue: 'hsl(223, 100%, 88%)',
        lightRed: 'hsl(354, 100%, 66%)',
        gray: 'hsl(0, 0%, 59%)',
      },

      screens: {
        // Target mobile devices with 375px width as the baseline
        mobile: "375px",

        // Target desktop devices with 1440px as the upper limit
        desktop: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
