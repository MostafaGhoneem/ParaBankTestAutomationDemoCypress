import BasePage from "./BasePage.js";

class RequestLoanPage extends BasePage {
    constructor() {
        super();
    }

    // Locators
    get loanAmount() { return cy.get('input[id="amount"]'); }
    get downPayment() { return cy.get('input[id="downPayment"]'); }
    get fromAccountId() { return cy.get('select[id="fromAccountId"]'); }
    get applyButton() { return cy.get('input[value="Apply Now"]'); }
    get successMessage() { return cy.get('#rightPanel span.title'); }
    get errorMessage() { return cy.get('.error'); }

    // Navigation
    visitRequestLoan() {
        cy.visit('/requestloan.htm');
        cy.url().should('include', 'requestloan.htm');
    }

    // Actions
    fillLoanForm(loanData) {
        if (loanData.amount) this.loanAmount.clear().type(loanData.amount);
        if (loanData.downPayment) this.downPayment.clear().type(loanData.downPayment);
        // Select first account by default if exists
        this.fromAccountId.then($select => {
            if ($select.find('option').length > 0) {
                this.fromAccountId.select($select.find('option').first().val());
            }
        });
    }

    submitLoan() {
        this.applyButton.click();
    }

    // Verifications
    verifySuccessfulLoanRequest() {
        this.successMessage.should('be.visible')
            .and('contain', 'Loan Request Processed');
    }

    verifyHighDownPaymentError() {
        this.errorMessage.should('be.visible')
            .and('contain', 'Down payment cannot exceed loan amount');
    }

    verifyZeroAmountError() {
        this.errorMessage.should('be.visible')
            .and('contain', 'The amount cannot be zero');
    }

    verifyInsufficientFundsError() {
        this.errorMessage.should('be.visible')
            .and('contain', 'Insufficient funds');
    }

    verifyLoanRequestResult(expectedResult, expectedMessage) {
        if (expectedResult === 'success') {
            this.successMessage.should('be.visible')
                .and('contain', expectedMessage);
        } else {
            this.errorMessage.should('be.visible')
                .and('contain', expectedMessage);
        }
    }

    // Combined actions
    requestLoan(loanData) {
        this.fillLoanForm(loanData);
        this.submitLoan();
    }
}

export default RequestLoanPage; 