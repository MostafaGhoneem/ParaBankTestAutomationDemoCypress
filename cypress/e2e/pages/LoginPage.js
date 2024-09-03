import BasePage from "./BasePage.cy";

class LoginPage extends BasePage{
    constructor() {
        super();}
get loginInput() { return cy.get('#email'); }
get passwordInput() { return cy.get('#password'); }
get loginBtn() { return cy.get('[data-cy="login-login-btn"]'); }



login(email, password) {
  
    this.loginInput.type(email)
    this.passwordInput.type(password)
    this.loginBtn.click()
}


}

export default LoginPage;