/// <reference types="cypress"/> 
/*Activa el autocompletado*/


describe("Pruebas en el sitio women",function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    })
    it("Large Tops Search", function(){
        /*Marcar casillas*/
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        /*Aca reviso cosas
        y mas cosas
        y mas cosas*/
        /*Desmarcar casillas*/
        cy.get('#layered_id_attribute_group_3').uncheck();
        cy.get('#layered_category_4').uncheck();
    })

    it("Order By Highest Price", function(){
        cy.get("#selectProductSort").select('Price: Highest first');
    })

    it("Order By In stock", function(){
        cy.get("#selectProductSort").select('In stock');
    })

  
})