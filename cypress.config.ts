import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 10000;
    },
  },
});
