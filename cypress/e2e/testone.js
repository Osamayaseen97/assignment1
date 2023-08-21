/// <reference types= "cypress" />



describe('login and sign up process for the test automation website', () => {
    it ('sign up ', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#accountFrm > fieldset > .btn').click()
        let firstName = "osama"
        let lastName = "yaseen"
        let email = "osamayaseen1997@gmail.com"
        let adress = "zarka"
        let password ="Oshm123#@!"

        let loginName = "Osama_Yaseen"

        cy.get('#AccountFrm_firstname').type(firstName)
        cy.get('#AccountFrm_lastname').type(lastName)
        cy.get('#AccountFrm_email').type(email)
        cy.get('#AccountFrm_country_id').select("Jordan")

        cy.get('#AccountFrm_city').type("alzarqaa")
        cy.get('#AccountFrm_zone_id').select("Az Zarqa'")

        cy.get('#AccountFrm_postcode').type("123331")
        cy.get('#AccountFrm_address_1').type("Az Zarqaa")

        cy.get('#AccountFrm_loginname').type(loginName)

        cy.get('#AccountFrm_password').type(password)
        cy.get('#AccountFrm_confirm').type(password)
        cy.get('#AccountFrm_agree').check()

        cy.contains("Continue").click()
    }
    );
});