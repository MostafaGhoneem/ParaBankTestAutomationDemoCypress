import BasePage from "./BasePage.js";

class UpdateProfilePage extends BasePage {
    constructor() {
        super();
    }

    // Locators
    get firstName() { return cy.get('input[name="customer.firstName"]'); }
    get lastName() { return cy.get('input[name="customer.lastName"]'); }
    get address() { return cy.get('input[name="customer.address.street"]'); }
    get city() { return cy.get('input[name="customer.address.city"]'); }
    get state() { return cy.get('input[name="customer.address.state"]'); }
    get zipCode() { return cy.get('input[name="customer.address.zipCode"]'); }
    get phoneNumber() { return cy.get('input[name="customer.phoneNumber"]'); }
    get updateProfileButton() { return cy.get('input[value="Update Profile"]'); }

    // Methods
    updateProfile(profileData) {
        // Intercept the update profile request to wait for it
        cy.intercept('POST', '**/services_proxy/bank/customers/update/**').as('updateProfile');

        // Fill in the form fields
        if (profileData.firstName) this.firstName.clear().type(profileData.firstName);
        if (profileData.lastName) this.lastName.clear().type(profileData.lastName);
        if (profileData.address) this.address.clear().type(profileData.address);
        if (profileData.city) this.city.clear().type(profileData.city);
        if (profileData.state) this.state.clear().type(profileData.state);
        if (profileData.zipCode) this.zipCode.clear().type(profileData.zipCode);
        if (profileData.phoneNumber) this.phoneNumber.clear().type(profileData.phoneNumber);
        
        // Submit the form
        this.updateProfileButton.click();
        
        // Wait for the update request to complete
        cy.wait('@updateProfile');
    }

    clearAllFields() {
        this.firstName.clear();
        this.lastName.clear();
        this.address.clear();
        this.city.clear();
        this.state.clear();
        this.zipCode.clear();
    }

    submitEmptyForm() {
        this.clearAllFields();
        this.updateProfileButton.click();
    }

    verifyValidationMessages() {
        cy.get('#rightPanel')
            .should('contain', 'First name is required')
            .and('contain', 'Last name is required')
            .and('contain', 'Address is required')
            .and('contain', 'City is required')
            .and('contain', 'State is required')
            .and('contain', 'Zip Code is required');
    }

    verifyProfileUpdate() {
        // Wait for the specific success message
        cy.get('#updateProfileResult').should('contain', 'been added to the system');
    }

    navigateToUpdateProfile() {
        cy.get('a').contains('Update Contact Info').click();
        cy.url().should('include', 'updateprofile');
        cy.get('#rightPanel h1.title').should('contain', 'Update Profile');
    }

    verifyProfileValues(profileData) {
        if (profileData.firstName) this.firstName.should('have.value', profileData.firstName);
        if (profileData.lastName) this.lastName.should('have.value', profileData.lastName);
        if (profileData.address) this.address.should('have.value', profileData.address);
        if (profileData.city) this.city.should('have.value', profileData.city);
        if (profileData.state) this.state.should('have.value', profileData.state);
        if (profileData.zipCode) this.zipCode.should('have.value', profileData.zipCode);
        if (profileData.phoneNumber) this.phoneNumber.should('have.value', profileData.phoneNumber);
    }
}

export default UpdateProfilePage; 