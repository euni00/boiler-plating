import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1440,
    viewportHeight: 720,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
