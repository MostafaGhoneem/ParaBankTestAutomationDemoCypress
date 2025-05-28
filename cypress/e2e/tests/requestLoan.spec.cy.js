import RequestLoanPage from '../pages/RequestLoanPage';

describe('Request Loan Tests', () => {
    const requestLoanPage = new RequestLoanPage();
    let testData;

    before(() => {
       
        cy.fixture('loanData.json').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        requestLoanPage.ensureUserExists();
        requestLoanPage.visitRequestLoan();
    });

    it('should successfully process valid loan request', () => {
        requestLoanPage.requestLoan(testData.validLoan);
        requestLoanPage.verifyLoanRequestResult('approved');
        requestLoanPage.verifyAndNavigateToNewAccount();
    });

    it('should show error for insufficient funds', () => {
        requestLoanPage.requestLoan(testData.insufficientFunds);
        requestLoanPage.verifyLoanRequestResult('denied');
    });

    it('should require all mandatory fields', () => {
        requestLoanPage.submitLoan();
        requestLoanPage.verifyRequiredFieldErrors();
    });


    it('should display correct loan form elements', () => {
        requestLoanPage.verifyLoanFormElements();
    });
}); 