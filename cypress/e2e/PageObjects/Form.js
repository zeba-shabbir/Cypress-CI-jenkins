
class Form{
    visit(){
        cy.visit('https://miacademy.co/#/')
    
    }
    
    FillForm(fname,lname,phone,email,source1,source2,source3,date){
     
    
cy.get(".mia-announcementText>span>a").click({force:true})
cy.get(".wp-block-button__link.has-theme-palette-2-background-color.has-background").click()
cy.get('#ariarequired-Name0').next().type(fname) // input firstname
cy.get('#ariarequired-Name1').next().type(lname) // input last name
cy.get('#Email-arialabel').type(email)           // input email
cy.get('input[name=PhoneNumber]').type(phone)    // input phone no

cy.get('#select2-Dropdown-arialabel-container>.select2FormFont.drpDwnPlaceholder').click()
 cy.get("#select2-Dropdown-arialabel-results>li").eq(2).click()

 cy.get('input[type=checkbox]').check([source1,source2,source3],{force:true}) // input 'how did you hear about us

 cy.get('input[name=Date]').click()

cy.get('.ui-datepicker-calendar' ).find('a').contains(date).click() // input preferred start date
 
cy.get('ul[page_no=1]').find('button').click()  // click on next button

    }

}


export default Form
    