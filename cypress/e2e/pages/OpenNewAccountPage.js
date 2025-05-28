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

    // Navigation
    visitOpenNewAccount() {
        cy.get('a').contains('Open New Account').click();
        cy.url().should('include', 'openaccount');
        cy.get('#rightPanel h1.title').should('contain', 'Open New Account');
    }

    // Methods
    openNewAccount(accountType = 'CHECKING', fromAccountId) {
        
        this.accountTypeSelect.should('exist').and('be.visible');
        
        
        const accountTypeValue = accountType === 'CHECKING' ? '0' : '1';
        this.accountTypeSelect.select(accountTypeValue);

       
        this.fromAccountSelect.should('exist').and('be.visible');
        
       
        if (fromAccountId) {
            this.fromAccountSelect.select(fromAccountId);
        } else {
           
            this.fromAccountSelect.find('option').then($options => {
                if ($options.length > 0) {
                    this.fromAccountSelect.select($options.first().val());
                }
            });
        }

        
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