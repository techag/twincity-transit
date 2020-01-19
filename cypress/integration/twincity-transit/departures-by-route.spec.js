context('Departures by Route', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('Click on By Route', () => {
        cy.get('.by-route')
            .contains('By Route')
            .click()
            .get('.departure-by-route')
            .should('contain','Select')
            .should('have.value','')
    });

    it('Test departures by route', () => {
        cy.get('#select-route')
            .select('901')
            .should('have.value','901')
            .get('#select-direction')
            .select('4')
            .should('have.value', '4')
            .get('#select-stop')
            .select('MAAM')
            .should('have.value', 'MAAM')
            .get('.departures-status')
            .contains('Departures')
            .get('#root')
            .screenshot('Search-By-Route')
    });
});