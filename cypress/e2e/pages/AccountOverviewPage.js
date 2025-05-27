import BasePage from "./BasePage.js";

class AccountOverviewPage extends BasePage {
    constructor() {
        super();
    }

    get accountsTable() { return cy.get('#accountTable'); }
    get accountRows() { return cy.get('#accountTable tbody tr'); }
    get totalBalance() { return cy.get('#accountTable tr:last-child td:nth-child(2)'); }
    get accountNumbers() { return cy.get('#accountTable a'); }
    get accountBalances() { return cy.get('#accountTable td:nth-child(2)'); }
    get availableAmounts() { return cy.get('#accountTable td:nth-child(3)'); }
    get accountOverviewLink() { return cy.get('a[href*="overview.htm"]'); }

    // Navigation
    visitAccountOverview() {
        cy.visit('/overview.htm');
        cy.url().should('include', 'overview.htm');
    }

    // Actions
    clickAccountOverviewLink() {
        this.accountOverviewLink.click();
        cy.url().should('include', 'overview.htm');
        cy.get('#rightPanel h1.title').should('contain', 'Accounts Overview');
    }

    clickFirstAccount() {
        this.accountNumbers.first().click();
        this.verifyAccountDetailsPage();
    }

    // Verifications
    verifyAccountsTableVisible() {
        this.accountsTable.should('be.visible');
    }

    verifyAccountBalancesExist() {
        this.accountBalances.should('have.length.gt', 0);
    }

    verifyAvailableAmountsExist() {
        this.availableAmounts.should('have.length.gt', 0);
    }

    verifyAccountDetailsPage() {
        cy.url().should('include', 'activity.htm');
        cy.get('#rightPanel h1.title').should('contain', 'Account Details');
    }

    verifyBalanceAndAvailableAmount() {
        this.accountRows.each(($row) => {
            cy.wrap($row).find('td:nth-child(2)').should('not.be.empty');
            cy.wrap($row).find('td:nth-child(3)').should('not.be.empty');
        });
    }

    calculateTotalBalance() {
        let total = 0;
        return this.accountBalances
            .each(($el) => {
                if (!$el.closest('tr').is(':last-child')) {
                    const value = parseFloat($el.text().replace('$', '').replace(',', ''));
                    if (!isNaN(value)) {
                        total += value;
                    }
                }
            })
            .then(() => total);
    }

    verifyTotalMatchesSum() {
        return this.calculateTotalBalance().then(calculatedTotal => {
            this.totalBalance.invoke('text').then(displayedTotal => {
                const displayedValue = parseFloat(displayedTotal.replace('$', '').replace(',', ''));
                expect(calculatedTotal).to.equal(displayedValue);
            });
        });
    }

    verifyAccountOverview() {
        this.clickAccountOverviewLink();
        this.verifyAccountsTableVisible();
        this.verifyAccountBalancesExist();
        this.verifyTotalMatchesSum();
    }

    verifyAccountDetails() {
        this.verifyAccountsTableVisible();
        this.verifyAccountBalancesExist();
        this.verifyAvailableAmountsExist();
        this.verifyBalanceAndAvailableAmount();
    }

    // Methods
    getAccountBalance(accountId) {
        return cy.get(`#accountTable a:contains("${accountId}")`)
            .closest('tr')
            .find('td:nth-child(2)');
    }

    getAvailableAmount(accountId) {
        return cy.get(`#accountTable a:contains("${accountId}")`)
            .closest('tr')
            .find('td:nth-child(3)');
    }

    clickAccount(accountId) {
        cy.get(`#accountTable a:contains("${accountId}")`).click();
    }
}

export default AccountOverviewPage; 