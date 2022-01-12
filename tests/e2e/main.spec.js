describe('Main', () => {
  it('should display header text and a table', () => {
    cy.visit('/')
    cy.contains('div', 'EasyPay')
  })
})
