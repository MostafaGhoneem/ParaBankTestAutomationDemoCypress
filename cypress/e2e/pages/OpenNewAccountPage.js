import BasePage from "./BasePage.js";

class OpenNewAccountPage extends BasePage {
    constructor() {
        super();
    }

    // Locators
    get accountTypeSelect() { return cy.get('select#type'); }
    get fromAccountSelect() { return cy.get('select#fromAccountId'); }
    get openNewAccountButton() { return cy.get('input[value="Open New Account"]'); }
    get newAccountId() { return cy.get('#newAccountId'); }

    // Methods
    openNewAccount(accountType = 'CHECKING', fromAccountId) {
        // Wait for account type dropdown to be populated
        this.accountTypeSelect.should('exist').and('be.visible');
        
        // Map account type to the correct value (0 for CHECKING, 1 for SAVINGS)
        const accountTypeValue = accountType === 'CHECKING' ? '0' : '1';
        this.accountTypeSelect.select(accountTypeValue);

        // Wait for from account dropdown to be populated
        this.fromAccountSelect.should('exist').and('be.visible');
        
        // Select the source account
        if (fromAccountId) {
            this.fromAccountSelect.select(fromAccountId);
        } else {
            // If no specific account provided, select the first available account
            this.fromAccountSelect.find('option').then($options => {
                if ($options.length > 0) {
                    this.fromAccountSelect.select($options.first().val());
                }
            });
        }

        // Verify selections before clicking
        this.accountTypeSelect.should('have.value', accountTypeValue);
        this.fromAccountSelect.should('not.have.value', '');
        
        this.openNewAccountButton.click();
    }

    verifyAccountCreated() {
        cy.get('#rightPanel').should('contain', 'Account Opened!');
        return this.newAccountId;
    }

    getNewAccountId() {
        return this.newAccountId.invoke('text');
    }
}

export default OpenNewAccountPage; 