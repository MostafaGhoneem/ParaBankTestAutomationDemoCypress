class OnBoardingCompensationCalculationPage { 

    get healthInsuranceYesRadioBtn() {
        return cy.get('[data-cy="steps-benefit-private-health-insurance-selector-yes-radio"]');
    }

    get healthInsuranceNoRadioBtn() {
        return cy.get('[data-cy="steps-benefit-private-health-insurance-selector-no-radio"]');
    }

    get stockOptionYesRadioBtn() {
        return cy.get('[data-cy="steps-esop-provided-yes-radio"]');
    }

    get stockOptionNoRadioBtn() {
        return cy.get('[data-cy="steps-esop-provided-no-radio"]');
    }

    get fixedBounsYesRadioBtn() {
        return cy.get('[data-cy="steps-annual-bonus-selector-yes-radio"]');
    }

    get fixedBounsNoRadioBtn() {
        return cy.get('[data-cy="steps-annual-bonus-selector-no-radio"]');
    }

    get variableBounsYesRadioBtn() {
        return cy.get('[data-cy="steps-variable-bonus-selector-yes-radio"]');
    }

    get variableBounsNoRadioBtn() {
        return cy.get('[data-cy="steps-variable-bonus-selector-no-radio"]');
    }

    get allowanceYesRadioBtn() {
        return cy.get('[data-cy="steps-allowances-selector-yes-radio"]');
    }

    get allowanceNoRadioBtn() {
        return cy.get('[data-cy="steps-allowances-selector-no-radio"]');
    }

    get grossSalaryInput() {
        return cy.get('[data-cy="steps-salary-gross-salary-input"]');
    }

    get continueBtn() {
        return cy.get('[data-cy="steps-continue-btn"]');
    }

    fillCompensationDetails(data) {
        // Handling Health Insurance Selection
        data.healthInsurance ? this.healthInsuranceYesRadioBtn.click() : this.healthInsuranceNoRadioBtn.click();
    
        // Handling Stock Option Selection
        data.stockOption ? this.stockOptionYesRadioBtn.click() : this.stockOptionNoRadioBtn.click();
    
        // Handling Fixed Bonus Selection
        data.fixedBonus ? this.fixedBounsYesRadioBtn.click() : this.fixedBounsNoRadioBtn.click();
    
        // Handling Variable Bonus Selection
        data.variableBonus ? this.variableBounsYesRadioBtn.click() : this.variableBounsNoRadioBtn.click();
    
        // Handling Allowances Selection
        data.allowances ? this.allowanceYesRadioBtn.click() : this.allowanceNoRadioBtn.click();
    
        // Inputting Gross Salary with validation
        this.grossSalaryInput.clear().type(String(data.grossSalary)) 
        this.continueBtn.click();
    }
    
}

export default OnBoardingCompensationCalculationPage;
