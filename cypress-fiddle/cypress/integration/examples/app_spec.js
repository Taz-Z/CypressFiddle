describe('My First Test', function() {
    it('Does not do much!', function() {
        cy.visit('localhost:3000');
        cy.contains(3);
    })
  })