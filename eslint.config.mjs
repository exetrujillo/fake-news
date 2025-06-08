// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Mantienes tus configuraciones base
  ...compat.extends("next/core-web-vitals"),

  // --- INICIO DE LA MODIFICACIÓN ---
  // Añades un nuevo objeto de configuración para tus reglas personalizadas
  {
    rules: {
      // Aquí desactivas la regla específica
      "react/no-unescaped-entities": "off",

      // Aquí podrías añadir otras reglas personalizadas en el futuro
      // "otra-regla": "warn",
    },
  },
  // --- FIN DE LA MODIFICACIÓN ---
];

export default eslintConfig;