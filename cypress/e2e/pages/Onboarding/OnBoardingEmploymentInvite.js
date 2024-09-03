
class OnBoardingEmploymentInvite {
get talentEmailInput() {return cy.get('[data-cy="steps-candidate-email-input"]')}
get continueBtn() {return cy.get('[data-cy="steps-continue-btn"]');}


fillTalentEmail(email) {
    this.talentEmailInput.clear().type(email);
    this.continueBtn.click();
}
}
export default OnBoardingEmploymentInvite