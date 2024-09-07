const { exec } = require('child_process');

// Function to run Cypress tests
exec('npx cypress run', (err, stdout, stderr) => {
  if (err) {
    console.error(`Cypress tests failed: ${stderr}`);
  } else {
    console.log('Cypress tests finished successfully');
  }

  // Proceed with generating the Allure report
  exec('allure generate allure-results --clean -o allure-report', (genErr, genStdout, genStderr) => {
    if (genErr) {
      console.error(`Error generating Allure report: ${genStderr}`);
      return;
    }
    console.log('Allure report generated successfully');

    // Open Allure report
    exec('allure open allure-report', (openErr, openStdout, openStderr) => {
      if (openErr) {
        console.error(`Error opening Allure report: ${openStderr}`);
        return;
      }
      console.log('Allure report opened successfully');
    });
  });
});
