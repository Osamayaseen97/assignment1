// /// <reference types= "cypress" />



// describe('login and sign up process for the test automation website', () => {
//     it ('sign up ', () => {
//         cy.visit("https://automationteststore.com/index.php?rt=account/login")
//         cy.get('#accountFrm > fieldset > .btn').click()
//         let firstName = "osama"
//         let lastName = "yaseen"
//         let email = "osamayaseen1997@gmail.com"
//         let adress = "zarka"
//         let password ="Oshm123#@!"

//         let loginName = "Osama_Yaseen"

//         cy.get('#AccountFrm_firstname').type(firstName)
//         cy.get('#AccountFrm_lastname').type(lastName)
//         cy.get('#AccountFrm_email').type(email)
//         cy.get('#AccountFrm_country_id').select("Jordan")

//         cy.get('#AccountFrm_city').type("alzarqaa")
//         cy.get('#AccountFrm_zone_id').select("Az Zarqa'")

//         cy.get('#AccountFrm_postcode').type("123331")
//         cy.get('#AccountFrm_address_1').type("Az Zarqaa")

//         cy.get('#AccountFrm_loginname').type(loginName)

//         cy.get('#AccountFrm_password').type(password)
//         cy.get('#AccountFrm_confirm').type(password)
//         cy.get('#AccountFrm_agree').check()

//         cy.contains("Continue").click()
//     }
//     );
// });27-8

// describe('Print the name of the first item and the last item ', () => {
//   it('first category - FEATURED', () => {
//         cy.visit("https://www.automationteststore.com/");

//         cy.get('#featured > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//           cy.log("first item inside the Featured Category is : ",the_text)
//         })

//         cy.get('#featured > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//           cy.log("last item inside the Featured Category is : ",the_text)

//         })
//   });

//   it('second category - latest products', () => {
//     cy.visit("https://www.automationteststore.com/");

//     cy.get('#latest > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//       cy.log("first item inside the latest Category is : ",the_text)
//     })

//     cy.get('#latest > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//       cy.log("last item inside the latest Category is : ",the_text)

//     })
// });
// });

// describe("this is to see the price multiply by 10 ", () => {
//   it("hey we need to see the price multiply by 10 for the first item inside best seller category", () => {
//     cy.visit("https://www.automationteststore.com/");
//     cy.get("#bestseller > .container-fluid")
//       .find(".oneprice")
//       .first()
//       .invoke("text")
//       .then((the_text) => {
//         // cy.log(the_text.replace("$", "") * 10);
//         let ModifiedPrice = (the_text.replace("$",""))*10
//         cy.log(ModifiedPrice)

//         // alert(`the price of the element multiplied by 10 is ${ModifiedPrice}`)


//         let myage = 30

//         myage+=myage

//         cy.log(myage)
//       });
//   });
// });

describe('assignment', () => {
    it('calculates and alerts prices for SPECIALS category', () => {
      cy.visit("https://www.automationteststore.com/");
  

  
      let totalOldPrice = 0;
      let totalNewPrice = 0;
  
      
      cy.get('#special > .container-fluid')
        .find('.pricenew')
        .each(($newPriceElement, index, $newPriceList) => {
          const newPriceText = $newPriceElement.text();
          const newPrice = parseFloat(newPriceText.replace('$', ''));
  
          
          cy.get($newPriceList[index])
            .siblings('.priceold')
            .invoke('text')
            .then((oldPriceText) => {
              const oldPrice = parseFloat(oldPriceText.replace('$', ''));
  
              
              totalOldPrice += oldPrice;
              totalNewPrice += newPrice;
            });
        })
        .then(() => {
          const alertMessage = `Hey, the sum of the old prices is $${totalOldPrice.toFixed(
            2
          )}, and the sum of the new prices is $${totalNewPrice.toFixed(2)}`;
          
          
          cy.log(alertMessage);
          
        });
    });
  });
  
  