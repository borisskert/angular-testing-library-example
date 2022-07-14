describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.findByText('Welcome').should('exist');
    cy.findByText('angular-testing-library-example app is running!').should('exist');
  })
})
