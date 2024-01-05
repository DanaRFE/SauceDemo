import Login from "../Pages/Login"
import Logout from "../Pages/Logout"

describe("Check Login and Logout", () =>{
    beforeEach( ()=>{
        cy.visit("/")
        
    })
    it("Check valid credentials", () =>{
       Login.loginAction('standard_user','secret_sauce')
       cy.url("/").should('contain','inventory')
       cy.get('.title').should('have.text','Products')
       cy.get('#inventory_container').should('have.length.gt',0)
       cy.scrollTo('top')
    })
    it("Check locked out user credentials", () =>{
        Login.loginAction('locked_out_user','secret_sauce')
        Login.geterrorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.')

    })
    it("Check Logout", () =>{
        Login.loginAction('standard_user','secret_sauce')
        Logout.logoutAction()
        cy.get(".login_credentials_wrap-inner").should('contain','Accepted usernames are:')
    })
})

describe("Add product to card", () => {
    beforeEach( () =>{
        cy.visit("/")
        Login.loginAction('standard_user','secret_sauce')
     
    })
    it("Check if element is added to card", ()=>{
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text','Remove')
        cy.get('.shopping_cart_badge').should('exist')
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item_label').should('have.length.gt',0)
        cy.scrollTo('top')
    })

    it("Check if element is removed from card", () =>{
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('not.exist')
        cy.get('#add-to-cart-sauce-labs-backpack').should('have.text','Add to cart')
        cy.scrollTo('top')
    })
})