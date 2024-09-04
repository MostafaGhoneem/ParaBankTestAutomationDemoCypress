class OnBoardingContractDetailsPage {
    get jobTitleInput() { return cy.get('[data-cy="steps-job-title-input"]'); }
    get jobDescriptionEngInput() { return cy.get('[data-cy="steps-job-description-textarea"]'); }
    get jobDescriptionLocalInput() { return cy.get('[data-cy="steps-job-description-local-language-textarea"]'); }
    get fullTimeRadioBtn() { return cy.get('[data-cy="steps-employment-type-full-time-radio"]'); }
    get partTimeRadioBtn() { return cy.get('[data-cy="steps-employment-type-part-time-radio"]'); }
    get fixedTermRadioBtn() { return cy.get('[data-cy="steps-contract-type-fixed-term-radio"]'); }
    get contractStartDateInput(){return cy.get('[data-cy="steps-start-date-input"] input[placeholder="DD/MM/YYYY"]'); }
    get contractEndDateInput(){return cy.get('[data-cy="steps-end-date-input"] input[placeholder="DD/MM/YYYY"]'); }
    get signatoryFullNameInput() { return cy.get('[data-cy="steps-signatory-full-name-input"]');}
    get signatoryTitleInput() { return cy.get('[data-cy="steps-signatory-title-input"]'); }
    get signatoryFEmailInput() { return cy.get('[data-cy="steps-signatory-email-input"]'); }
    get continueBtn() {return cy.get('[data-cy="steps-continue-btn"]');}

    

    
    fillContractDetails(data) {
        this.jobTitleInput.type(data.jobTitle);
        this.jobDescriptionEngInput.type(data.jobDescriptionEng);
        this.jobDescriptionLocalInput.type(data.jobDescriptionLocal);
        
        if (data.employmentType === "full-time") {
          this.fullTimeRadioBtn.click();
        } else if (data.employmentType === "part-time") {
          this.partTimeRadioBtn.click();
        }
    

        this.contractStartDateInput.dblclick().type(data.contractStartDate);

        if (data.contractType === "fixed-term") {
            this.fixedTermRadioBtn.click();
          }

        this.contractEndDateInput.dblclick().type(data.contractEndDate);
        this.signatoryFullNameInput.type(data.signatoryFullName);
        this.signatoryTitleInput.type(data.signatoryTitle);
        this.signatoryFEmailInput.type(data.signatoryEmail);
        this.continueBtn.click();
      }
    }


    export default OnBoardingContractDetailsPage;