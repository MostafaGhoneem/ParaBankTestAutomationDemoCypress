class OnboardingSummaryPage{
get agreementCheckbox() {return cy.get('[data-cy="steps-confirm-summary-checkbox"]');}
get finishBtn() {return cy.get('[data-cy="steps-finish-btn"]');}
get goToTalentList() {return cy.get('[data-testid="go-to-talent-list-btn"]');}


AgreeAndFinishTheOnboarding(){
    this.agreementCheckbox.check({force:true});
    this.finishBtn.click();
    this.goToTalentList.should('be.visible');
    this.goToTalentList.click();
}




}
export default OnboardingSummaryPage