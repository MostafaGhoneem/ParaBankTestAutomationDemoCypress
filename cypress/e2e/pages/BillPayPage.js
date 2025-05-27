import BasePage from "./BasePage.js";

class BillPayPage extends BasePage {
    constructor() {
        super();
    }

    // Locators
    get payeeName() { return cy.get('input[name="payee.name"]'); }
    get address() { return cy.get('input[name="payee.address.street"]'); }
    get city() { return cy.get('input[name="payee.address.city"]'); }
    get state() { return cy.get('input[name="payee.address.state"]'); }
    get zipCode() { return cy.get('input[name="payee.address.zipCode"]'); }
    get phoneNumber() { return cy.get('input[name="payee.phoneNumber"]'); }
    get accountNumber() { return cy.get('input[name="payee.accountNumber"]'); }
    get verifyAccount() { return cy.get('input[name="verifyAccount"]'); }
    get amount() { return cy.get('input[name="amount"]'); }
    get sendPaymentButton() { return cy.get('input[value="Send Payment"]'); }

    // Error message locators
    get payeeNameError() { return cy.get('#validationModel-name.error'); }
    get addressError() { return cy.get('#validationModel-address.error'); }
    get cityError() { return cy.get('#validationModel-city.error'); }
    get stateError() { return cy.get('#validationModel-state.error'); }
    get zipCodeError() { return cy.get('#validationModel-zipCode.error'); }
    get phoneNumberError() { return cy.get('#validationModel-phoneNumber'); }
    get accountNumberError() { return cy.get('#validationModel-account-empty'); }
    get verifyAccountError() { return cy.get('#validationModel-verifyAccount-empty'); }
    get amountError() { return cy.get('#validationModel-amount-empty'); }
    get successMessage() { return cy.get('#rightPanel'); }

    // Navigation
    visitBillPay() {
        cy.visit('/billpay.htm');
        cy.url().should('include', 'billpay.htm');
    }

    // Actions
    fillBillPayForm(payeeData) {
        if (payeeData.name) this.payeeName.type(payeeData.name);
        if (payeeData.address) this.address.type(payeeData.address);
        if (payeeData.city) this.city.type(payeeData.city);
        if (payeeData.state) this.state.type(payeeData.state);
        if (payeeData.zipCode) this.zipCode.type(payeeData.zipCode);
        if (payeeData.phoneNumber) this.phoneNumber.type(payeeData.phoneNumber);
        if (payeeData.accountNumber) {
            this.accountNumber.type(payeeData.accountNumber);
            this.verifyAccount.type(payeeData.accountNumber);
        }
        if (payeeData.amount) this.amount.type(payeeData.amount);
    }

    submitPayment() {
        this.sendPaymentButton.click();
    }

    // Verifications
    verifyRequiredFieldErrors() {
        this.payeeNameError.should('be.visible').and('contain', 'Payee name is required.');
        this.addressError.should('be.visible').and('contain', 'Address is required.');
        this.cityError.should('be.visible').and('contain', 'City is required.');
        this.stateError.should('be.visible').and('contain', 'State is required.');
        this.zipCodeError.should('be.visible').and('contain', 'Zip Code is required.');
        this.phoneNumberError.should('be.visible').and('contain', 'Phone number is required.');
        this.accountNumberError.should('be.visible').and('contain', 'Account number is required.');
        this.verifyAccountError.should('be.visible').and('contain', 'Account number is required.');
        this.amountError.should('be.visible').and('contain', 'The amount cannot be empty.');
    }

    verifySuccessfulPayment(expectedAmount) {
        this.successMessage.should('contain', 'Bill Payment Complete');
        if (expectedAmount) {
            this.successMessage.should('contain', `$${expectedAmount}`);
        }
    }

    verifyAccountMismatchError() {
        cy.get('.error').should('contain', 'The account numbers do not match.');
    }

    verifyInvalidAmountError() {
        this.amountError.should('be.visible')
            .and('contain', 'The amount cannot be zero.');
    }

    // Combined actions
    sendPayment(payeeData) {
        this.fillBillPayForm(payeeData);
        this.submitPayment();
    }
}

export default BillPayPage; 