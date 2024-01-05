class Logout {
    constructor() {
        this.burgerMenu = '#react-burger-menu-btn'
        this.logoutButton = '#logout_sidebar_link'
    }

    logoutAction () {
        cy.get(this.burgerMenu).click()
        cy.get(this.logoutButton).click()
    }
}
export default new Logout()