const path = require("path");
const { defineConfig } = require("vitest/config");
const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
  },
});
