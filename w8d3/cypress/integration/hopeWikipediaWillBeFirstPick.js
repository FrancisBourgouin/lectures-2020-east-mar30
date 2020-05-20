// Einstein-Rosen Bridge


describe('Finds about einstein-rosen bridges', () => {
  it('searches!', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type("Einstein-Rosen Bridge").type('{enter}')
    cy.get(':nth-child(1) > .rc > .r').should('have.text', 'Wikipedia')
  })
})
