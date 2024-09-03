class OnboardingCheckListPage{

    get requirmentAgreementCheckbox() {
        return cy.contains('label', 'I acknowledge & confirm the agreement requirements')
                  .find('input[type="checkbox"]');
      }
      
      get terminationProcessCheckbox() {
        return cy.contains('label', 'I acknowledge & confirm the termination process requirements')
                  .find('input[type="checkbox"]');
      }

      get onboardingRequirementsCheckbox() {
        return cy.contains('label', 'I hereby acknowledge & confirm that I have read and understood all the necessary onboarding requirements')
                  .find('input[type="checkbox"]');
      }

      get continueBtn() {return cy.get('[data-cy="steps-continue-btn"]')};

      CheckAllAgreementsAndRequirements(){
        this.requirmentAgreementCheckbox.check({ force: true });
        this.terminationProcessCheckbox.check({ force: true });
        this.onboardingRequirementsCheckbox.check({ force: true });
        this.continueBtn.click();
      }


}
export default OnboardingCheckListPage