import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import testData from '../../fixtures/testData.json';

describe('Login Tests', () => {
    const loginPage = new LoginPage();
    const registerPage = new RegisterPage();
    let registeredUser;

    before(() => {
        // Clear cookies only once at the start of our test suite
        cy.clearCookies();
        cy.clearLocalStorage();
        
        // Register a user once before all tests
        registerPage.visitRegisterPage();
        registeredUser = registerPage.registerNewUser(testData);
    });

    beforeEach(() => {
        loginPage.visitLoginPage();
    });

    it('should login successfully with valid credentials', () => {
        loginPage.logoutIfNeeded();
        loginPage.login(registeredUser.username, registeredUser.password);
        loginPage.verifySuccessfulLogin();
    });

    it('should show error with invalid credentials', () => {
        loginPage.login('invalidUser', 'invalidPass');
        loginPage.verifyFailedLogin();
    });

    it('should show error with empty fields', () => {
        loginPage.loginButton.click();
        loginPage.verifyEmptyFieldsError();
    });

    it('should show error with valid username and invalid password', () => {
        loginPage.login(registeredUser.username, 'wrongPassword');
        loginPage.verifyFailedLogin();
    });
}); 