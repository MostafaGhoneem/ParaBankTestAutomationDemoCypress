import BasePage from "./BasePage.js";

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    // Locators
    get username() { return cy.get('input[name="username"]'); }
    get password() { return cy.get('input[name="password"]'); }
    get loginButton() { return cy.get('input[value="Log In"]'); }
    get errorMessage() { return cy.get('.error'); }

    // Navigation
    visitLoginPage() {
        cy.visit('/index.htm');
        cy.url().should('include', 'index.htm');
    }

    // Actions
    login(username, password) {
        this.username.clear().type(username);
        this.password.clear().type(password);
        this.loginButton.click();
    }

    // Verifications
    verifySuccessfulLogin() {
        cy.get('#leftPanel').should('contain', 'Welcome');
        cy.get('#leftPanel').should('contain', 'Log Out');
    }

    verifyFailedLogin() {
        this.errorMessage
            .should('be.visible')
            .and('contain', 'The username and password could not be verified');
    }

    verifyEmptyFieldsError() {
        this.errorMessage
            .should('be.visible')
            .and('contain', 'Please enter a username and password');
    }

    // Logout handling
    logoutIfNeeded() {
        cy.get('body').then($body => {
            if ($body.find('a[href*="logout.htm"]').length > 0) {
                this.logout();
            }
        });
    }
}

export default LoginPage;