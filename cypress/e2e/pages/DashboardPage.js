class DashboardPage {
    get addTalentBtn() {return cy.get('[data-testid="add-employee-menu"]'); }
    get createNewBtn() {return cy.get('[data-testid="create-new-item"]'); }
    get notificationIcon(){return cy.get('.sc-hKiFIE > [data-cy="header-notifications-button"]');}
    get lastNotification() {return cy.get('.infinite-scroll-component > :nth-child(1) > :nth-child(2)')}
   
   
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
       .should('contain.text', userName)
       .click({force:true}))
}

assertTheNotificationIsMarkedAsRead(){
   this.lastNotification.should('have.attr', 'data-is-notification-clickable', 'false');
}
}

export default DashboardPage