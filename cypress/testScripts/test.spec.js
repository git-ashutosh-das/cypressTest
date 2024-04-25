///<reference types="cypress" />


import '../support/commands';
import TestPageObject from './testPageObject';

describe('New suite of tests',function(){


before(function(){
    cy.viewport(1920, 1080);
})

beforeEach(function(){
    cy.fixture('example.json').then(function(data){
            this.getfixdata = data;
    })
})

it('Sample test ',function(){

    cy.log(this.getfixdata.name);

    cy.DoSomething();

    
    cy.log(Cypress.env('url'));

})




})