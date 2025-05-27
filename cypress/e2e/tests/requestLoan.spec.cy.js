import RequestLoanPage from '../pages/RequestLoanPage';

describe('Request Loan Tests', () => {
    const requestLoanPage = new RequestLoanPage();
    let testData;

    before(() => {
        // Load test data once before all tests
        cy.fixture('loanData.json').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
    
        requestLoanPage.ensureUserExists();
        requestLoanPage.visitRequestLoan();
    });

    it('should successfully process valid loan request', () => {
        requestLoanPage.requestLoan(testData.validLoan);
        requestLoanPage.verifyLoanRequestResult(
            testData.validLoan.expectedResult, 
            testData.validLoan.expectedMessage
        );
    });

    it('should show error when down payment exceeds loan amount', () => {
        requestLoanPage.requestLoan(testData.highDownPayment);
        requestLoanPage.verifyLoanRequestResult(
            testData.highDownPayment.expectedResult, 
            testData.highDownPayment.expectedMessage
        );
    });

    it('should show error for zero amount loan request', () => {
        requestLoanPage.requestLoan(testData.zeroAmount);
        requestLoanPage.verifyLoanRequestResult(
            testData.zeroAmount.expectedResult, 
            testData.zeroAmount.expectedMessage
        );
    });

    it('should show error for insufficient funds', () => {
        requestLoanPage.requestLoan(testData.insufficientFunds);
        requestLoanPage.verifyLoanRequestResult(
            testData.insufficientFunds.expectedResult, 
            testData.insufficientFunds.expectedMessage
        );
    });

    it('should require all mandatory fields', () => {
        requestLoanPage.submitLoan();
        requestLoanPage.verifyZeroAmountError();
    });
}); 