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
  before(() => {
    cy.visit('/')

    cy
      .get('.game span')
      .first()
      .click()
  })

  it('will let the computer win if we choose the axe', () => {
    // Verify that the robot is colored
    cy
      .get('.game span')
      .first()
      .should("have.class", "cheating")
    // We want to click a button
    cy
      .get('.choices button')
      .eq(1)
      .click()
    // Hide the buttons
    cy
      .get('.choices')
      .should('not.exist')
    // Shows the result
    cy
      .get('.result h2')
      .should('have.text', 'Computer won')
    // Shows a restart button
    cy
      .get('#restart')
      .click()
    // Should not see result, and should see choices
    cy.get('.choices').should('exist')
    cy.get('.result').should('not.exist')
  })

  it('will let the computer win if we choose the tree', () => {
    // Verify that the robot is colored
    cy
      .get('.game span')
      .first()
      .should("have.class", "cheating")
    // We want to click a button
    cy
      .get('.choices button')
      .eq(0)
      .click()
    // Hide the buttons
    cy
      .get('.choices')
      .should('not.exist')
    // Shows the result
    cy
      .get('.result h2')
      .should('have.text', 'Computer won')
    // Shows a restart button
    cy
      .get('#restart')
      .click()
    // Should not see result, and should see choices
    cy.get('.choices').should('exist')
    cy.get('.result').should('not.exist')
  })

})