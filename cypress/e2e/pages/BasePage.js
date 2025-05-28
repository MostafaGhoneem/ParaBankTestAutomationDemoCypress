class BasePage {
    constructor() {
        this.baseUrl = Cypress.config('baseUrl');
    }

    // Helper method to ensure a user exists
    ensureUserExists() {
        cy.fixture('testData.json').then(userData => {
           
            cy.visit('');
            cy.get('input[name="username"]').type(userData.username);
            cy.get('input[name="password"]').type(userData.password);
            cy.get('input[value="Log In"]').click();
            cy.get('body').then($body => {
                if ($body.find('#rightPanel .error').length > 0 && 
                    $body.find('#rightPanel .error').text().includes('could not be verified')) {
                    cy.get('a[href*="register"]').click();
                    cy.url().should('include', 'register');
                    cy.get('#customer\\.firstName').type(userData.firstName);
                    cy.get('#customer\\.lastName').type(userData.lastName);
                    cy.get('#customer\\.address\\.street').type(userData.address);
                    cy.get('#customer\\.address\\.city').type(userData.city);
                    cy.get('#customer\\.address\\.state').type(userData.state);
                    cy.get('#customer\\.address\\.zipCode').type(userData.zipCode);
                    cy.get('#customer\\.ssn').type(userData.ssn);
                    cy.get('#customer\\.username').type(userData.username);
                    cy.get('#customer\\.password').type(userData.password);
                    cy.get('#repeatedPassword').type(userData.confirmPassword);
                    cy.get('input[value="Register"]').click();
                }
            });

            cy.get('#leftPanel').should('contain', 'Welcome');
        });
    }

    // Logout functionality
    logout() {
        cy.get('a[href*="logout.htm"]').click();
     
        cy.get('#loginPanel').should('be.visible');
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
    }
}

export default BasePage;