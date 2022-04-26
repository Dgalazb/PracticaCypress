describe('Formas de encontrar un elemento', function(){
    it('buscar en el buscador',function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola'); //Busqueda por clase en inspeccionar de chrome, agregar puntos
        //cuando tenga espacios
        cy.get('#search_query_top').type(' Como te vaa'); //Buscar por id
        cy.get('[name="search_query"]').type(' Me va muy bien'); //Buscar por otra propiedad
        cy.get('[placeholder="Search"]').clear(); // borra lo que esta en el elemento
        
    });
})