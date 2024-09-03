
class OnBoardingIntroPage{
    get workGolbalBtn() {return cy.get('[data-cy="product-selection-workglobal-option"]'); }
    get beginOnboardingBtn() {return cy.get('[data-cy="product-selection-begin-onboarding-btn"]'); }


    workGlobal(){
        this.workGolbalBtn.should('be.visible');
        this.workGolbalBtn.click();
        this.beginOnboardingBtn.click();
    }
    
}

export default OnBoardingIntroPage;