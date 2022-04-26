import indexPage from '../support/pages/index';
import articlesPage from'../support/pages/articles';

describe('Search test case',function(){
    before(function(){
        cy.log("Ejecutando precondiciones a las pruebas")
    })
    after(function(){
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(function(){
        cy.log("Poniendo datos en su estado original");
    })
    it('Search dresses',function(){
        indexPage.search('dress');
        articlesPage.verifyArticle('"dress"');
        /*cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();*/
        /*cy.get('.lighter').contains('"dress"');*/
    })
    it('Search hats',function(){
        indexPage.search('hat');
        articlesPage.verifyArticle('"hat"');
       /* cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();*/
       /* cy.get('.lighter').contains('"hat"');*/
    })
})