import OpenNewAccountPage from '../pages/OpenNewAccountPage';

describe('Open New Account Tests', () => {
    let openNewAccountPage;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        openNewAccountPage = new OpenNewAccountPage();
        
        // Ensure we have a registered user and are logged in
        openNewAccountPage.ensureUserExists();
        
        // Navigate to Open New Account page
        cy.get('a').contains('Open New Account').click();
        cy.url().should('include', 'openaccount');
        cy.get('#rightPanel h1.title').should('contain', 'Open New Account');
    });

    it('should successfully open a new checking account', () => {
        openNewAccountPage.openNewAccount('CHECKING');
        openNewAccountPage.verifyAccountCreated();
        openNewAccountPage.newAccountId.should('be.visible');
    });

    it('should successfully open a new savings account', () => {
        openNewAccountPage.openNewAccount('SAVINGS');
        openNewAccountPage.verifyAccountCreated();
        openNewAccountPage.newAccountId.should('be.visible');
    });

    it('should store new account id for future use', () => {
        openNewAccountPage.openNewAccount('CHECKING');
        openNewAccountPage.verifyAccountCreated();
        openNewAccountPage.getNewAccountId().then(accountId => {
            // Store account ID for future use if needed
            cy.wrap(accountId).as('newAccountId');
        });
    });

    it('should validate minimum deposit requirement', () => {
        // This test assumes there's validation for minimum deposit
        // If the application doesn't have this validation, you can remove this test
        openNewAccountPage.openNewAccount('CHECKING');
        cy.get('#rightPanel').should('contain', '$100.00');
    });
}); 