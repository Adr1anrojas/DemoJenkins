describe('Testing the hero list page', function () {
  it('should contain the word FrontDemo2 ', function () {
    cy.visit('http://localhost:4200');
    cy.contains("FrontDemo2 ");
  })
});