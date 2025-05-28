import BillPayPage from '../pages/BillPayPage';

describe('Bill Pay Tests', () => {
    const billPayPage = new BillPayPage();
    let testData;

    before(() => {
    
        cy.fixture('billPayData.json').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        billPayPage.ensureUserExists();
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