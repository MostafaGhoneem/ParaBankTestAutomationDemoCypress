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

    // Navigation
    visitRequestLoan() {
        cy.visit('/requestloan.htm');
        cy.url().should('include', 'requestloan.htm');
    }

    // Actions
    fillLoanForm(loanData) {
        if (loanData.amount) this.loanAmount.clear().type(loanData.amount);
        if (loanData.downPayment) this.downPayment.clear().type(loanData.downPayment);
        
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
    verifyLoanRequestResult(expectedResult) {
        if (expectedResult === 'approved') {
            cy.get('#loanRequestApproved')
                .should('be.visible')
                .find('p')
                .first()
                .should('contain', 'Congratulations, your loan has been approved');

          
            cy.get('#loanRequestApproved')
                .find('#newAccountId')
                .should('be.visible')
                .and('have.attr', 'href')
                .and('include', '/parabank/activity.htm?id=');
        } else if (expectedResult === 'denied') {
            cy.get('#loanRequestDenied')
                .should('be.visible')
                .find('p.error')
                .should('contain', 'You do not have sufficient funds for the given down payment');
        }
    }

    verifyRequiredFieldErrors() {
        cy.get('.error')
            .should('be.visible')
            .and('contain', 'Loan Amount is required')
            .and('contain', 'Down Payment is required');
    }

    verifyLoanFormElements() {
        cy.get('#rightPanel').within(() => {
            cy.get('h1.title').should('contain', 'Apply for a Loan');
            cy.get('#amount').should('be.visible');
            cy.get('#downPayment').should('be.visible');
            cy.get('#fromAccountId').should('be.visible');
            cy.get('input[value="Apply Now"]').should('be.visible');
        });
    }

    getNewAccountNumber() {
        return cy.get('#newAccountId').invoke('text');
    }

    verifyAndNavigateToNewAccount() {
        this.getNewAccountNumber().then(accountNumber => {
            
            cy.wrap(accountNumber).should('match', /^\d+$/);
            
            
            cy.get(`#newAccountId[href*="${accountNumber}"]`).click();
            cy.url().should('include', `activity.htm?id=${accountNumber}`);
        });
    }

    // Combined actions
    requestLoan(loanData) {
        this.fillLoanForm(loanData);
        this.submitLoan();
    }
}

export default RequestLoanPage; 