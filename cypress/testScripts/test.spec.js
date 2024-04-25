///<reference types="cypress" />


import '../support/commands';
import TestPageObject from './testPageObject';

describe('New suite of tests',function(){


before(function(){
    cy.viewport(1920, 1080);
//     cy.fixture('example.json').then(function(data){
//         this.getfixdata = data;
//         this.gerd = data.scripts;
// })
})

beforeEach(function(){
    cy.fixture('example.json').then(function(data){
            this.getfixdata = data;
            this.gerd = data.scripts;

    })
})

it('Sample test - Getting menu option from flipkart  ',function(){

    // cy.log(this.getfixdata.name);

    // cy.DoSomething();

    const testObject = new TestPageObject()
    // cy.log(Cypress.env('url'));
    cy.visit(Cypress.env('url'));
    cy.get('._1XjE3T').should('be.visible')
    // cy.contains('._1XjE3T','Electronics').invoke('index').then(index=>{

    //     cy.get('._1XjE3T').eq(index).click()

    //     cy.get('._16rZTH a').each($el=>{
    //         let text = $el.text().trim()
    //         cy.log(text)
    //     })
    // })

    cy.get('._1XjE3T').each($el=>{
         let text = $el.text().trim()
         if(text.includes('Electronics')){
            cy.wrap($el).trigger('mouseover').then(()=>{
                cy.get('._16rZTH a').each($el=>{
                            let text = $el.text().trim()
                            cy.log(text)
                        })
            });
         }

    })

})






})