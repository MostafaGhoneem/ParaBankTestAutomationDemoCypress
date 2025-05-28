import AccountOverviewPage from '../pages/AccountOverviewPage';

describe('Account Overview Tests', () => {
    const accountOverviewPage = new AccountOverviewPage();

    beforeEach(() => {
      
        accountOverviewPage.ensureUserExists();
        accountOverviewPage.clickAccountOverviewLink();
        cy.get('#rightPanel h1.title').should('contain', 'Accounts Overview');
    });

    it('should display account overview correctly', () => {
        accountOverviewPage.verifyAccountOverview();
    });

    it('should display account balance and available amounts', () => {
        accountOverviewPage.verifyAccountDetails();
    });

    it('should navigate to account details when clicking account number', () => {
        accountOverviewPage.clickFirstAccount();
    });
}); 