context('Departures by Route', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });


    it('Click on By Stop', () => {
        cy.get('.by-stop')
            .contains('By Stop')
            .click()
            .get('#search-by-stop')
            .should('have.value','')
    });

    it('Search departures by route', () =>{
        cy.get('.by-stop')
            .contains('By Stop')
            .click()
            .get('#search-by-stop')
            .type('1231')
            .get('.search-icon')
            .click()
            .get('.departures-status')
            .contains('Departures')
            .get('#root')
            .screenshot('Search-By-Stop')
    });

});