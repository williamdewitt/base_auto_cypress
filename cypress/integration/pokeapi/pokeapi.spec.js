describe("PokeAPI", function () {
    it('pokemon', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon')
    });

    it('bulbasaur', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/1/')
            .its('body.name').should('be', 'bulbasour')
    });
})
