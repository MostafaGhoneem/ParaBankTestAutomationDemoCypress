import BasePage from '../pages/BasePage';

describe('Logout Tests', () => {
    let basePage;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        basePage = new BasePage();
        
        // Ensure we have a registered user and are logged in
        basePage.ensureUserExists();
        
        // Verify we're logged in before testing logout
        cy.get('#leftPanel').should('contain', 'Welcome');
    });

    it('should successfully logout', () => {
        basePage.logout();
        basePage.verifyLoggedOut();
    });


    it('should maintain logout state after browser refresh', () => {
        // Logout first
        basePage.logout();
        
        // Refresh the page
        cy.reload();
        
        // Verify still logged out
        basePage.verifyLoggedOut();
    });
}); 