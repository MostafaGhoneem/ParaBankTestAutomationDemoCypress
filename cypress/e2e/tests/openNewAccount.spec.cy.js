import OpenNewAccountPage from '../pages/OpenNewAccountPage';

describe('Open New Account Tests', () => {
    let openNewAccountPage;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        openNewAccountPage = new OpenNewAccountPage();
        
   
        openNewAccountPage.ensureUserExists();
        
    
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
            cy.wrap(accountId).as('newAccountId');
        });
    });

}); 