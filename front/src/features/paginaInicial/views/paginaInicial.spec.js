
describe('Dindin Pagina Principal', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000')

        // ASSERT

        // Central
        cy.get('h1').should('contain.text','Aprenda a organizar seu dindin')
        cy.get('p').should('contain.text','A oportunidade de controlar suas finanças de forma prática')
        cy.get('button').should('contain.text','Minha carteira').should('be.enabled')
    })

})
