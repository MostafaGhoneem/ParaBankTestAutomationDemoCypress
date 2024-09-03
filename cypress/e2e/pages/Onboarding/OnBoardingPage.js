

class OnboardingPage {
    
    get listboxInput() {return cy.get('.css-hlgwow'); }
    get getStartedBtn() {return cy.get('#onboarding-get-started-btn',{ timeout: 10000 }); }
    get countryInfo() {return cy.get('.sc-bJBgwP');}
    
    
      
   
      selectCountryFromTheListBox(country){
        this.listboxInput.should('be.visible');
        this.listboxInput.type(country+'{enter}');
        this.countryInfo.should('contain.text',country);
        cy.wait(2000);
        this.getStartedBtn .should('be.visible')
        .and('not.be.disabled')
        .click({ log: false });
      }

    
}

export default OnboardingPage;