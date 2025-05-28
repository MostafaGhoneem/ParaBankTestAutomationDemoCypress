import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import testData from '../../fixtures/testData.json';

describe('Login Tests', { tags: '@login' }, () => {
    const loginPage = new LoginPage();
    const registerPage = new RegisterPage();
    let registeredUser;

    before(() => {
        cy.allure().epic('Authentication');
        cy.allure().feature('Login');
        
        registerPage.visitRegisterPage();
        registeredUser = registerPage.registerNewUser(testData);
    });

    beforeEach(() => {
        cy.allure().story('User Login');
        cy.clearCookies();
        cy.clearLocalStorage();
        loginPage.visitLoginPage();
    });

    it('should login successfully with valid credentials', () => {
        cy.allure().severity('critical');
        loginPage.logoutIfNeeded();
        loginPage.login(registeredUser.username, registeredUser.password);
        loginPage.verifySuccessfulLogin();
    });

    it('should show error with invalid credentials', () => {
        cy.allure().severity('normal');
        loginPage.login('invalidUser', 'invalidPass');
        loginPage.verifyFailedLogin();
    });

    it('should show error with empty fields', () => {
        cy.allure().severity('minor');
        loginPage.loginButton.click();
        loginPage.verifyEmptyFieldsError();
    });

    it('should show error with valid username and invalid password', () => {
        loginPage.login(registeredUser.username, 'wrongPassword');
        loginPage.verifyFailedLogin();
    });

            }); 