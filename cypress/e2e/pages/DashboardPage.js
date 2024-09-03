class DashboardPage {
    get addTalentBtn() {return cy.get('[data-testid="add-employee-menu"]'); }
    get createNewBtn() {return cy.get('[data-testid="create-new-item"]'); }
    get notificationIcon(){return cy.get('.sc-hKiFIE > [data-cy="header-notifications-button"]');}
    get lastNotification() {return cy.get('.sc-jLqQTn').last();}
   
   
 openOnboardingPage(){
    this.addTalentBtn.should('be.visible');
    this.addTalentBtn.click();
    this.createNewBtn.click();
 }  

 openNotificationSlide() {
   this.notificationIcon.click();
   
   cy.log(this.lastNotification.should('be.visible'))
}

assertAndClickLastNotification(userName) {
  cy.log( this.lastNotification
       .should('contain.text', userName) // Assert that the last notification contains the userName
       .click())// Click on the last notification to mark it as read
}
}

export default DashboardPage