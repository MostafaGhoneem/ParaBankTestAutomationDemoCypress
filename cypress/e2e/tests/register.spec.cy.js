import RegisterPage from '../pages/RegisterPage';
import testData from '../../fixtures/testData.json';

describe('Registration Tests', () => {
    const registerPage = new RegisterPage();
    let registeredUser;

    beforeEach(() => {
        registerPage.visitRegisterPage();
    });

    it('should register a new user successfully', () => {
        registeredUser = registerPage.registerNewUser(testData);
        registerPage.verifySuccessfulRegistration();
    });

    it('should validate required fields', () => {
        registerPage.submitRegistration();
        registerPage.verifyRequiredFieldErrors();
    });

    it('should show error for duplicate username', () => {

        const firstUser = registerPage.registerNewUser(testData);
        
     
        registerPage.visitRegisterPage();
        registerPage.fillRegistrationForm(firstUser); 
        registerPage.submitRegistration();
        registerPage.verifyDuplicateUsernameError();
    });

    it('should validate password mismatch', () => {
        const userData = { ...testData };
        registerPage.fillRegistrationForm(userData);
     
        registerPage.confirmPassword.clear().type('DifferentPassword123');
        registerPage.submitRegistration();
        registerPage.verifyPasswordMismatchError();
    });
}); 