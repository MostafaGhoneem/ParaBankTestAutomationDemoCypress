import BasePage from "./BasePage.js";

class RegisterPage extends BasePage {
    constructor() {
        super();
    }

    get firstName() { return cy.get('input[name="customer.firstName"]'); }
    get lastName() { return cy.get('input[name="customer.lastName"]'); }
    get address() { return cy.get('input[name="customer.address.street"]'); }
    get city() { return cy.get('input[name="customer.address.city"]'); }
    get state() { return cy.get('input[name="customer.address.state"]'); }
    get zipCode() { return cy.get('input[name="customer.address.zipCode"]'); }
    get phoneNumber() { return cy.get('input[name="customer.phoneNumber"]'); }
    get ssn() { return cy.get('input[name="customer.ssn"]'); }
    get username() { return cy.get('input[name="customer.username"]'); }
    get password() { return cy.get('input[name="customer.password"]'); }
    get confirmPassword() { return cy.get('input[name="repeatedPassword"]'); }
    get registerButton() { return cy.get('input[value="Register"]'); }

    // Error message locators
    get firstNameError() { return cy.get('#customer\\.firstName\\.errors'); }
    get lastNameError() { return cy.get('#customer\\.lastName\\.errors'); }
    get addressError() { return cy.get('#customer\\.address\\.street\\.errors'); }
    get cityError() { return cy.get('#customer\\.address\\.city\\.errors'); }
    get stateError() { return cy.get('#customer\\.address\\.state\\.errors'); }
    get zipCodeError() { return cy.get('#customer\\.address\\.zipCode\\.errors'); }
    get ssnError() { return cy.get('#customer\\.ssn\\.errors'); }
    get usernameError() { return cy.get('#customer\\.username\\.errors'); }
    get passwordError() { return cy.get('#customer\\.password\\.errors'); }
    get phoneNumberError() { return cy.get('#customer\\.phoneNumber\\.errors'); }

    // Navigation
    visitRegisterPage() {
        cy.visit('/register.htm');
        cy.url().should('include', 'register.htm');
    }

    // Helper method to generate unique username
    generateUniqueUsername(baseUsername = 'testuser') {
        return `${baseUsername}_${Date.now()}`;
    }

    fillRegistrationForm(userData) {
        const uniqueUsername = this.generateUniqueUsername(userData.username);
        
        if (userData.firstName) this.firstName.type(userData.firstName);
        if (userData.lastName) this.lastName.type(userData.lastName);
        if (userData.address) this.address.type(userData.address);
        if (userData.city) this.city.type(userData.city);
        if (userData.state) this.state.type(userData.state);
        if (userData.zipCode) this.zipCode.type(userData.zipCode);
        if (userData.phoneNumber) this.phoneNumber.type(userData.phoneNumber);
        if (userData.ssn) this.ssn.type(userData.ssn);
        
        this.username.type(uniqueUsername);
        
        if (userData.password) {
            this.password.type(userData.password);
            this.confirmPassword.type(userData.password);
        }

        // Return the generated data for potential future use
        return {
            ...userData,
            username: uniqueUsername
        };
    }

    submitRegistration() {
        this.registerButton.click();
    }

    registerNewUser(userData) {
        const updatedUserData = this.fillRegistrationForm(userData);
        this.submitRegistration();
        return updatedUserData;
    }

    // Validation methods
    verifyRequiredFieldErrors() {
        this.firstNameError.should('be.visible');
        this.lastNameError.should('be.visible');
        this.addressError.should('be.visible');
        this.cityError.should('be.visible');
        this.stateError.should('be.visible');
        this.zipCodeError.should('be.visible');
        this.ssnError.should('be.visible');
        this.usernameError.should('be.visible');
        this.passwordError.should('be.visible');
        this.phoneNumberError.should('not.exist');
    }

    verifySuccessfulRegistration() {
        cy.get('#rightPanel').should('contain', 'Your account was created successfully');
    }

    verifyDuplicateUsernameError() {
        cy.get('#customer\\.username\\.errors')
            .should('be.visible')
            .and('contain', 'This username already exists');
    }

    verifyPasswordMismatchError() {
        cy.get('#repeatedPassword\\.errors')
            .should('be.visible')
            .and('contain', 'Passwords did not match');
    }
}

export default RegisterPage; 