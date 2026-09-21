/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // A custom PostCSS config replaces the one Next ships, which already
    // included this — without it nothing vendor-prefixes the output.
    autoprefixer: {},
  },
};

export default config;
