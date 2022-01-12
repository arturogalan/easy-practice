describe('Main', () => {
  it('should display the easypay title', () => {
    cy.visit('/')
    cy.contains('div', 'EasyPay')
  })
})
