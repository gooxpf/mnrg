import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_BASE_URL || `http://localhost:${process.env.PORT || 3000}`,
  },
});
