import OpenNewAccountPage from '../pages/OpenNewAccountPage';

describe('Open New Account Tests', () => {
    let openNewAccountPage;

    beforeEach(() => {
        openNewAccountPage = new OpenNewAccountPage();
        openNewAccountPage.ensureUserExists();
        openNewAccountPage.visitOpenNewAccount();
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
}); 