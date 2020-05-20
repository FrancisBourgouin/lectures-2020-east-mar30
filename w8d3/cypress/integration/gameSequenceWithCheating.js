// Visit /
// Activate the robot
//   Click on the robot icon
// Verify that the robot is colored
//   (Will have class cheating, filter:saturate:(1))
// We want to click a button
//   Click on the axe button
// Shows the result
//   We lost, because computer is cheating
// Hide the buttons
//   Because the game is over
// Shows a restart button  
//   To restart the game

describe('Plays the game three times, should always lose since computer is cheating', () => {
  beforeEach(() => {
    cy.visit('/')

    cy
      .get('.game span')
      .first()
      .click()
  })


  it('will give the win to the computer when we pick the axe', () => {
    // cy.visit('/')

    // cy
    //   .get('.game span')
    //   .first()
    //   .click()

    cy
      .get('.game span')
      .first()
      .should("have.class", "cheating")

    cy
      .get('.choices button')
      .eq(1)
      .click()

    cy.get('.result h2').should('have.text', 'Computer won')
  })

  it('will give the win to the computer when we pick the tree', () => {
    cy
      .get('.game span')
      .first()
      .should("have.class", "cheating")

    cy
      .get('.choices button')
      .eq(0)
      .click()

    cy.get('.result h2').should('have.text', 'Computer won')
  })
})