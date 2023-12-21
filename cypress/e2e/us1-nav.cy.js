describe('Home navigation', () => {
  it('Should navigate to stock page', () => {
    cy.visit('index.html')

    // 1. Should get the link object
    const linkItem = cy.get('ul li:nth-child(2) a')

    //2. Should simulate a click to link object
    linkItem.click()
    // 3. Ensure page loaded is stock.html

    const url = cy.url()
    cy.should('include', 'stock.html')
  })
})