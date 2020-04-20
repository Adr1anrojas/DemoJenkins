describe('Testing the hero list page', function () {
  it('should contain the word FrontDemoPush4 ', function () {
    cy.visit('http://localhost:4200');
    cy.contains("FrontDemoPush4 ");
  })
});