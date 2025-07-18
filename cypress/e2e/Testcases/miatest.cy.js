///<reference types="cypress"/> 
import Form from "../PageObjects/Form"



describe('test suite 2', () => {
  // create object
    const form = new Form();
   
    beforeEach(function () {
// fetch data stored in fixture file
      cy.fixture('formdata').then((data) => {
        this.data = data
      })
      form.visit()
  
    })



it('Fill parent info', function() {

  // call class function
// form.FillForm(this.data.fname,this.data.lname,this.data.phone,this.data.email,this.data.source1,this.data.source2,this.data.source3,this.data.date)

});

  it.only('Should search for "Cypress Testing" and show results', () => {
    
     cy.visit('https://example.com');
    cy.title().should('include', 'Examsgfe Domain');
   
  });



 })


