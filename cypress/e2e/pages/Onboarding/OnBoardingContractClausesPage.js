class OnBoardingContractClausesPage{
get relationWithEmploymentYesRadioBtn() {return cy.get('[data-cy="steps-previously-employed-selector-yes-radio"]');}
get relationWithEmploymentNoRadioBtn() {return cy.get('[data-cy="steps-previously-employed-selector-no-radio"]');}
get probationaryPeriodYesRadioBtn() {return cy.get('[data-cy="steps-probation-period-selector-yes-radio"]');}
get probationaryPeriodNoRadioBtn() {return cy.get('[data-cy="steps-probation-period-selector-no-radio"]');}
get acceptRiskYesRadioBtn() {return cy.get('[data-cy="steps-no-probation-risks-selector-yes-radio"]');} 
get acceptRiskNoRadioBtn() {return cy.get('[data-cy="steps-no-probation-risks-selector-no-radio"]');} 
get continueBtn() {return cy.get('[data-cy="steps-continue-btn"]');}

fillContractClausesForm(data) {

    data.isEmployedPreviously ? this.relationWithEmploymentYesRadioBtn.click() : this.relationWithEmploymentNoRadioBtn.click();
    this.probationaryPeriodNoRadioBtn.should('be.visible');

    data.hasProbationPeriod ? this.probationaryPeriodYesRadioBtn.click() : this.probationaryPeriodNoRadioBtn.click();
    this.acceptRiskNoRadioBtn.should('be.visible');
    
    data.acceptsRisk ? this.acceptRiskYesRadioBtn.click() : this.acceptRiskNoRadioBtn.click();

    this.continueBtn.click();
}
}
export default OnBoardingContractClausesPage;