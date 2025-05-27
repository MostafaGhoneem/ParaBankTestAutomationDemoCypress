import BasePage from '../pages/BasePage';

describe('Logout Tests', () => {
    let basePage;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        basePage = new BasePage();
        
       
        basePage.ensureUserExists();
        
        
        cy.get('#leftPanel').should('contain', 'Welcome');
    });

    it('should successfully logout', () => {
        basePage.logout();
        basePage.verifyLoggedOut();
    });


    it('should maintain logout state after browser refresh', () => {

        basePage.logout();
        
        cy.reload();
        
        basePage.verifyLoggedOut();
    });
}); 