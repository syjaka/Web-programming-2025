module.exports = {
  screenshotOnRunFailure: false,
  video: false,
  reporter: 'CypressReporter.js',
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: './**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false, // Aseta tukitiedoston arvoksi false E2E-testeille
  },
  component: {
    specPattern: './**/*.spec.{js,jsx,ts,tsx}',
    supportFile: false, // Aseta tukitiedoston arvoksi false komponenttitesteille
  }
};
