import DatePickerModel from '../../utils/DatePickerModel';

class OnboardingTalentInfoPage {
  get firstNameInput() { return cy.get('[data-cy="steps-candidate-first-name-input"]'); }
  get lastNameInput() { return cy.get('[data-cy="steps-candidate-last-name-input"]'); }
  get citizeYesRadioBtn() { return cy.get('[data-cy="steps-talent-is-local-yes-radio"]'); }
  get citizeNoRadioBtn() { return cy.get('[data-cy="steps-talent-is-local-no-radio"]'); }
  get seniorYesRadioBtn() { return cy.get('[data-cy="steps-talent-is-senior-yes-radio"]'); }
  get seniorNoRadioBtn() { return cy.get('[data-cy="steps-talent-is-senior-no-radio"]'); }
  get validAddressYesRadioBtn() { return cy.get('[data-cy="steps-address-selector-hr-yes-radio"]'); }
  get validAddressNoRadioBtn() { return cy.get('[data-cy="steps-address-selector-hr-no-radio"]'); }
  get remoteWorkYesRadioBtn() { return cy.get('[data-cy="steps-work-from-home-selector-yes-radio"]'); }
  get remoteWorkNoRadioBtn() { return cy.get('[data-cy="steps-work-from-home-selector-no-radio"]'); }
  get continueBtn() { return cy.get('#onboarding-continue-btn'); }
  get talentBirthInput(){return cy.get('input[placeholder="DD/MM/YYYY"]')}

  constructor() {
    this.datePicker = new DatePickerModel(
      'input[placeholder="DD/MM/YYYY"]',   // Selector for the date input field
      '.MuiIconButton-root'                // Selector for the button that opens the date picker
    );
  }

  selectDate(date) {
    this.datePicker.selectDate(date);
  }

  fillTalentDetails(talent) {
    this.firstNameInput.type(talent.firstName);
    this.lastNameInput.type(talent.lastName);
    talent.isCitizen ? this.citizeYesRadioBtn.click() : this.citizeNoRadioBtn.click();
    talent.isSenior ? this.seniorYesRadioBtn.click() : this.seniorNoRadioBtn.click();
    talent.hasValidAddress ? this.validAddressYesRadioBtn.click() : this.validAddressNoRadioBtn.click();
    talent.worksRemotely ? this.remoteWorkYesRadioBtn.click() : this.remoteWorkNoRadioBtn.click();
    this.talentBirthInput.dblclick().type(talent.dateOfBirth);
    //this.selectDate(talent.dateOfBirth);
    
    this.continueBtn.click();
  }
}

export default OnboardingTalentInfoPage;
