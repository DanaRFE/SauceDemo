class Login {
    constructor() {
        this.username = '#user-name'
        this.password = '#password'
        this.loginButton = '#login-button'
        this.errorMessage = '[data-test="error"]'
    }
    loginAction(username,password){
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.loginButton).click()
    }
    geterrorMessage(){
       return cy.get(this.errorMessage)
   }
}
export default  new Login()