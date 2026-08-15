import next from "eslint-config-next/core-web-vitals";

/**
 * Flat ESLint config. `eslint-config-next` (v16+) ships a native flat-config
 * array, so we spread it directly and add our own ignore patterns.
 */
const eslintConfig = [
  ...next,
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
];

export default eslintConfig;
