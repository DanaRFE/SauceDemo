**SauceDEMO Test**

**Description:**

This test is checking if the login and logout is working, if the user is using some invalid credentials, the app will return an error and also is checking if the user is able to add and remove an item to/from card.

**Instalation:**

1. Install Visual Studio Code
      https://code.visualstudio.com/
2. Instal NodeJS
      https://nodejs.org/en/download
3. Open terminal in VS Code and write
     npm init
4. Install Cypress
     npm install cypress --save-dev
5. Install Chai
     npm install --save-dev chai
6. Install Mocha
     npm install --save-dev mocha  

**How to run the test :**
 npm run runner (you can find in package.json that is set to open e2e tests directly in chrome)
 After is opened click on the saucetest.cy.ts from Specs 
 Everything should work as expected 

**Functions used:**
 
1. beforeEach()-> before every it() it go on the baseURL defined in cypress.config.js
             -> the second beforeEach() will also Login using some valid credentials 
2. cy.get() -> was used to interract with different DOM elements 
3.  click() -> was used to click on different DOM elements 
4.  should() -> was used to make assertion to verify conditions 
5.  Login.loginAction() and Logout.logoutAction() ->loginAction and logoutAction are methods of Login and Logout classes;
  
 



 
 
