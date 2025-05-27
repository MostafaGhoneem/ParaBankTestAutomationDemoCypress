import BillPayPage from '../pages/BillPayPage';

describe('Bill Pay Tests', () => {
    const billPayPage = new BillPayPage();
    let testData;

    before(() => {
        // Load test data once before all tests
        cy.fixture('billPayData.json').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        // Ensure we have a registered user and are logged in
        billPayPage.ensureUserExists();
        
        // Navigate to bill pay page
        billPayPage.visitBillPay();
    });

    it('should validate required fields', () => {
        billPayPage.submitPayment();
        billPayPage.verifyRequiredFieldErrors();
    });

    it('should successfully complete bill payment', () => {
        billPayPage.sendPayment(testData.validPayment);
        billPayPage.verifySuccessfulPayment(testData.validPayment.amount);
    });

    it('should validate account number mismatch', () => {
        billPayPage.fillBillPayForm(testData.mismatchedAccount);
        billPayPage.submitPayment();
        billPayPage.verifyAccountMismatchError();
    });

    it('should validate invalid payment amount', () => {
        billPayPage.sendPayment(testData.invalidAmount);
        billPayPage.verifyInvalidAmountError();
    });

  
}); 