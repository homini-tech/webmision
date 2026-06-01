import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16130E",        // marrón casi negro (texto / fondos profundos)
        bone: "#F4EFE6",       // hueso / fondo claro cálido
        sand: "#E7DECF",       // arena
        clay: "#B08454",       // terracota suave (acento)
        brass: "#9C7A3C",      // bronce (acento metálico)
        stone: "#6F665A",      // gris piedra (texto secundario)
        deep: "#241E16",       // panel oscuro
        paper: "#fffdf9",      // papel cálido claro
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        prose2: "62ch",
      },
    },
  },
  plugins: [],
};
export default config;
